import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  MapPin, 
  User, 
  Wrench, 
  FileText, 
  Sparkles 
} from 'lucide-react';
import { db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { 
  CONTACT_INFO, 
  UAE_CITIES_AR, 
  UAE_CITIES_EN, 
  REQUEST_OPTIONS_AR, 
  REQUEST_OPTIONS_EN 
} from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface SmartContactFormProps {
  initialRequestType?: string;
  onSuccess?: () => void;
}

export const SmartContactForm: React.FC<SmartContactFormProps> = ({
  initialRequestType,
  onSuccess,
}) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const cityOptions = lang === 'en' ? UAE_CITIES_EN : UAE_CITIES_AR;
  const requestOptions = lang === 'en' ? REQUEST_OPTIONS_EN : REQUEST_OPTIONS_AR;
  const otherCityLabel = lang === 'en' ? 'Other City' : 'مدينة أخرى';
  const otherInquiryLabel = lang === 'en' ? 'Other Inquiry' : 'استفسار آخر';

  const [name, setName] = useState('');
  const [city, setCity] = useState<string>(cityOptions[0]);
  const [customCity, setCustomCity] = useState('');
  const [isOtherCity, setIsOtherCity] = useState(false);
  const [requestType, setRequestType] = useState<string>(initialRequestType || requestOptions[0]);
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    city: string;
    requestType: string;
    details?: string;
    whatsappUrl: string;
  } | null>(null);

  const isDetailsRequired = requestType === otherInquiryLabel;

  const handleCitySelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === otherCityLabel) {
      setIsOtherCity(true);
      setCity(otherCityLabel);
    } else {
      setIsOtherCity(false);
      setCity(val);
      setCustomCity('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const finalName = name.trim();
    const finalCity = isOtherCity ? customCity.trim() : city;
    const finalDetails = details.trim();

    if (!finalName || finalName.length < 2) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال اسم كريم (حرفان على الأقل).' : 'Please enter your full name (at least 2 characters).');
      return;
    }

    if (!finalCity || finalCity.length < 2) {
      setErrorMessage(lang === 'ar' ? 'يرجى اختيار أو كتابة المدينة داخل الإمارات.' : 'Please select or enter a city in the UAE.');
      return;
    }

    if (!requestType) {
      setErrorMessage(lang === 'ar' ? 'يرجى تحديد نوع الطلب المطلوب.' : 'Please select the required service or work.');
      return;
    }

    if (isDetailsRequired && (!finalDetails || finalDetails.length < 3)) {
      setErrorMessage(lang === 'ar' ? 'عند اختيار "استفسار آخر"، يرجى توضيح تفاصيل استفسارك.' : 'When selecting "Other Inquiry", please describe your requirements.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Generate compliant ID (matches regex ^[a-zA-Z0-9_\-]+$)
      const randomSuffix = Math.random().toString(36).substring(2, 10);
      const inquiryId = `inq_${Date.now()}_${randomSuffix}`;

      // 2. Prepare payload
      const payload: Record<string, any> = {
        name: finalName,
        city: finalCity,
        requestType: requestType,
        language: lang,
        createdAt: serverTimestamp(),
      };

      if (finalDetails) {
        payload.details = finalDetails;
      }

      // 3. Save to Firebase Cloud Firestore
      const docRef = doc(db, 'inquiries', inquiryId);
      await setDoc(docRef, payload);

      // 4. Construct WhatsApp Message matching language specification
      const freeTextDetails = finalDetails || (lang === 'ar' ? 'بدون تفاصيل إضافية' : 'No additional details');
      const whatsappMessage = lang === 'ar'
        ? `مرحباً TAJ، الاسم: ${finalName}، المدينة: ${finalCity}، نوع الطلب: ${requestType}، التفاصيل: ${freeTextDetails}`
        : `Hello TAJ, Name: ${finalName}, City: ${finalCity}, Service: ${requestType}, Details: ${freeTextDetails}`;

      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

      setSubmittedData({
        name: finalName,
        city: finalCity,
        requestType,
        details: finalDetails,
        whatsappUrl,
      });

      // 5. Open WhatsApp directly
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.warn('Direct popup prevented, link provided in UI', err);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      console.error('Error saving inquiry:', err);
      setErrorMessage(t.formErrorPrefix);
      try {
        handleFirestoreError(err, OperationType.CREATE, 'inquiries');
      } catch (e) {
        // Handled
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setCity(cityOptions[0]);
    setCustomCity('');
    setIsOtherCity(false);
    setRequestType(requestOptions[0]);
    setDetails('');
    setSubmittedData(null);
    setErrorMessage(null);
  };

  return (
    <div className={`bg-[#0B101D] border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>

      {submittedData ? (
        <div className="text-center py-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#84CC16]/20 border border-[#84CC16]/40 text-[#84CC16] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {t.formSuccessTitle}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-5 leading-relaxed">
            {t.formSuccessDesc}
          </p>

          <div className={`bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto mb-6 ${isRtl ? 'text-right' : 'text-left'} text-xs space-y-2`}>
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">{t.formNameLabel}:</span>
              <span className="text-white font-semibold">{submittedData.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">{t.formCityLabel}:</span>
              <span className="text-white font-semibold">{submittedData.city}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">{t.formRequestTypeLabel}:</span>
              <span className="text-[#84CC16] font-bold">{submittedData.requestType}</span>
            </div>
            {submittedData.details && (
              <div className="pt-1">
                <span className="text-slate-400 block mb-1">{t.formDetailsLabel}:</span>
                <p className="text-slate-200 bg-slate-950 p-2 rounded-lg border border-slate-800/60 text-xs">
                  {submittedData.details}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={submittedData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.formContinueWhatsApp}</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all duration-200"
            >
              {t.formSubmitAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>{t.formBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.formTitlePart1} <span className="text-[#2563EB]">TAJ</span>
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              {t.formSubtitle}
            </p>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Field 1: Name */}
            <div>
              <label htmlFor="client-name" className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>{t.formNameLabel}</span>
                <span className="text-red-400">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.formNamePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-slate-100 placeholder:text-slate-500 text-xs transition-colors outline-none"
              />
            </div>

            {/* Field 2: City */}
            <div>
              <label htmlFor="client-city" className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>{t.formCityLabel}</span>
                <span className="text-red-400">*</span>
              </label>
              <select
                id="client-city"
                value={isOtherCity ? otherCityLabel : city}
                onChange={handleCitySelectChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-slate-100 text-xs transition-colors outline-none cursor-pointer"
              >
                {cityOptions.map((c) => (
                  <option key={c} value={c} className="bg-slate-900 text-slate-100">
                    {c}
                  </option>
                ))}
                <option value={otherCityLabel} className="bg-slate-900 text-slate-100">
                  {otherCityLabel}...
                </option>
              </select>

              {isOtherCity && (
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                    placeholder={t.formOtherCityPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-[#84CC16] text-slate-100 placeholder:text-slate-500 text-xs outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Field 3: Request Type */}
          <div>
            <label htmlFor="request-type" className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>{t.formRequestTypeLabel}</span>
              <span className="text-red-400">*</span>
            </label>
            <select
              id="request-type"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-slate-100 text-xs transition-colors outline-none cursor-pointer"
            >
              {requestOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-slate-100">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Field 4: Details */}
          <div>
            <label htmlFor="client-details" className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>{t.formDetailsLabel}</span>
              </span>
              {isDetailsRequired && (
                <span className="text-[11px] text-amber-400 font-normal">
                  {lang === 'ar' ? 'مطلوب لهذا الخيار *' : 'Required for this option *'}
                </span>
              )}
            </label>
            <textarea
              id="client-details"
              rows={3}
              required={isDetailsRequired}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t.formDetailsPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-slate-100 placeholder:text-slate-500 text-xs transition-colors outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-[0.99] disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#2563EB]/25 flex items-center justify-center gap-2 transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{t.formSubmittingBtn}</span>
                </>
              ) : (
                <>
                  <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  <span>{t.formSubmitBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
