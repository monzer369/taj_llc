import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { IMAGES, CONTACT_INFO, SERVICES } from '../data';
import { PageId } from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const ForwardArrow = isRtl ? ChevronLeft : ChevronRight;

  const emails = [
    { address: 'info@tajsteel.llc', labelAr: 'استفسارات عامة', labelEn: 'General Inquiries' },
    { address: 'sales@tajsteel.llc', labelAr: 'المبيعات', labelEn: 'Sales' },
    { address: 'support@tajsteel.llc', labelAr: 'الدعم الفني', labelEn: 'Support' },
    { address: 'media@tajsteel.llc', labelAr: 'الإعلام', labelEn: 'Media' },
  ];

  return (
    <footer className="bg-[#070B12] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#84CC16] to-[#2563EB]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-start">
            <div className="flex items-center gap-2.5">
              <img
                src={IMAGES.logo}
                alt="TAJ Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-base font-black text-white tracking-wider">
                  TAJ <span className="text-[#2563EB]">{t.brandSeparator}</span> {isRtl ? 'تاج' : 'STEEL'}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {t.brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footerBio}
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#84CC16] shrink-0" />
              <span>{t.footerWarrantyPill}</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-start">
            <h4 className={`text-sm font-bold text-white uppercase tracking-wider ${isRtl ? 'border-r-2 pr-3' : 'border-l-2 pl-3'} border-[#2563EB]`}>
              {t.footerLinksHeading}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ForwardArrow className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.navHome}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ForwardArrow className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.navServices}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ForwardArrow className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.navPortfolio}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ForwardArrow className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.navAbout}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ForwardArrow className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.navContact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-start">
            <h4 className={`text-sm font-bold text-white uppercase tracking-wider ${isRtl ? 'border-r-2 pr-3' : 'border-l-2 pl-3'} border-[#84CC16]`}>
              {t.footerServicesHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 5).map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors flex items-center gap-1.5 truncate max-w-full text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] shrink-0"></span>
                    <span className="truncate">{lang === 'en' ? serv.title_en : serv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-start">
            <h4 className={`text-sm font-bold text-white uppercase tracking-wider ${isRtl ? 'border-r-2 pr-3' : 'border-l-2 pl-3'} border-[#2563EB]`}>
              {t.footerContactHeading}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{t.locationDubai}</span>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-[#84CC16] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors" dir="ltr">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً TAJ، أود الاستفسار عن تفاصيل المشاريع والأسعار.' : 'Hello TAJ, I would like to inquire about project details and pricing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#25D366] font-bold"
                >
                  {lang === 'ar' ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}
                </a>
              </div>
            </div>

            {/* Emails Section */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] text-slate-400 block mb-2 font-semibold">
                {lang === 'ar' ? 'راسلنا عبر البريد:' : 'Email Us:'}
              </span>
              {emails.map((email) => (
                <a
                  key={email.address}
                  href={`mailto:${email.address}`}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2563EB] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0 group-hover:text-[#84CC16] transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-200 font-mono" dir="ltr">
                      {email.address}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {lang === 'ar' ? email.labelAr : email.labelEn}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-2 font-semibold">
                {lang === 'ar' ? 'تابعنا على المنصات:' : 'Follow Us:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#84CC16] text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2563EB] text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={CONTACT_INFO.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-yellow-400 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Snapchat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footerRights}
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span>UAE VIP Engineering Luxury</span>
            <span>•</span>
            <span>Dubai, Abu Dhabi, Sharjah, All Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
