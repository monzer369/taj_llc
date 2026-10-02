import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  Database,
  X
} from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { SmartContactForm } from '../components/SmartContactForm';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ContactPageProps {
  initialRequestType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialRequestType }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const [showLogModal, setShowLogModal] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);
  const [logError, setLogError] = useState<string | null>(null);

  const fetchLogs = async () => {
    setIsLoadingLogs(true);
    setLogError(null);
    try {
      const q = query(collection(db, 'inquiries'), limit(15));
      const querySnapshot = await getDocs(q);
      const docsData: any[] = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setLogs(docsData);
      setShowLogModal(true);
    } catch (err: any) {
      console.warn('Viewing logs restricted by Firestore rules (admin-only):', err);
      setLogError(lang === 'ar'
        ? 'الاطلاع على سجل الطلبات الكامل محمي بقواعد أمان Firebase المشفرة (Admin Protected). يتم حفظ كافة الطلبات بشكل آمن ومباشر.'
        : 'Accessing the full inquiries log is protected by Firebase security rules (Admin Protected). All requests are securely stored directly in Firestore.');
      setShowLogModal(true);
    } finally {
      setIsLoadingLogs(false);
    }
  };

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400">
          <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>{t.contactBadge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {t.contactTitle}
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {t.contactDesc}
        </p>
      </section>

      {/* Main Content Grid: Smart Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <SmartContactForm initialRequestType={initialRequestType} />
          </div>

          {/* Contact Details & Info (5 cols) */}
          <div className={`lg:col-span-5 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            {/* Phone & WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B101D] border border-slate-800 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {lang === 'ar' ? 'الاتصال الهاتفي والمحادثة المباشرة' : 'Phone Call & Direct Chat'}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'ar' ? 'فريقنا الهندسي متواجد لخدمتكم والإجابة على أي استفسارات فنية.' : 'Our engineering specialists are ready to review your architectural requirements.'}
                </p>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً TAJ، أود الاستفسار عن تفاصيل تنفيذ أعمال حديدية لمشروع فيلا.' : 'Hello TAJ, I would like to inquire about custom metalwork execution for a villa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/25">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">{t.contactWhatsApp}</span>
                    <span className="block text-sm sm:text-base font-bold text-white font-mono" dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#25D366] group-hover:scale-105 transition-transform">
                  {lang === 'ar' ? 'محادثة فورية ←' : 'Chat Now →'}
                </span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30 hover:bg-[#2563EB]/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2563EB]/25">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">{t.contactPhone}</span>
                    <span className="block text-sm sm:text-base font-bold text-white font-mono" dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-400 group-hover:scale-105 transition-transform">
                  {lang === 'ar' ? 'اتصال الآن ←' : 'Call Now →'}
                </span>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#070B12] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-[#84CC16]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">{lang === 'ar' ? 'الموقع الجغرافي' : 'Headquarters'}</span>
                  <span className="block text-sm font-bold text-white">
                    {t.locationDubai}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#070B12] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-[#2563EB]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">{lang === 'ar' ? 'أوقات العمل المعتمدة' : 'Business Hours'}</span>
                  <span className="block text-xs sm:text-sm font-bold text-white">
                    {t.contactHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Warranty reminder */}
            <div className="p-6 rounded-3xl bg-[#070B12] border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#84CC16]/15 border border-[#84CC16]/30 flex items-center justify-center text-[#84CC16] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{t.warrantyYearsText}</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'ar' ? 'عقد ضمان موثق يشمل السلامة الإنشائية ومقاومة التآكل.' : 'Official certified contract covering structural stability and rust resilience.'}
                </p>
              </div>
            </div>

            {/* Admin Logs Button */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={fetchLogs}
                disabled={isLoadingLogs}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center justify-center gap-1.5 mx-auto transition-colors"
              >
                <Database className="w-3.5 h-3.5" />
                <span>{isLoadingLogs ? (lang === 'ar' ? 'جارٍ التحقق...' : 'Verifying...') : t.contactViewLogs}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`bg-[#0B101D] border border-slate-700 rounded-3xl max-w-2xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-[#84CC16]" />
                <span>{t.contactViewLogs}</span>
              </h3>
              <button
                onClick={() => setShowLogModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {logError ? (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                {logError}
              </div>
            ) : logs.length === 0 ? (
              <p className="text-xs text-slate-400">{lang === 'ar' ? 'لا توجد طلبات مسجلة حالياً.' : 'No inquiries registered yet.'}</p>
            ) : (
              <div className="space-y-2">
                {logs.map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>{item.name}</span>
                      <span className="text-[#84CC16]">{item.city}</span>
                    </div>
                    <div className="text-slate-400">{item.requestType}</div>
                    {item.details && <p className="text-slate-300 text-[11px] pt-1">{item.details}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
