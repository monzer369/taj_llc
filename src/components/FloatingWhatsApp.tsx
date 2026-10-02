import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { lang, isRtl } = useLanguage();

  const message = lang === 'ar'
    ? 'مرحباً شركة TAJ، أود الاستفسار عن أعمالكم الهندسية والحديدية للفلل السكنية.'
    : 'Hello TAJ Steel, I would like to inquire about your custom metalwork and engineering solutions for villas.';

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;

  return (
    <aside 
      aria-label={lang === 'ar' ? 'تواصل سريع' : 'Fast Contact'} 
      className={`fixed bottom-6 ${isRtl ? 'left-6 flex-row' : 'right-6 flex-row-reverse'} z-50 flex items-center group`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#84CC16]/40"
        aria-label={lang === 'ar' ? 'تواصل معنا عبر واتساب مباشرة' : 'Chat with us directly on WhatsApp'}
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#84CC16] border-2 border-[#0F172A] rounded-full"></span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
      
      {/* Tooltip text for desktop */}
      <span className={`hidden md:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isRtl ? 'mr-3' : 'ml-3'} px-3 py-1.5 rounded-lg bg-[#0F172A] border border-slate-700 text-xs font-medium text-slate-200 shadow-xl whitespace-nowrap`}>
        {lang === 'ar' ? 'تحدث معنا مباشرة عبر واتساب' : 'Chat with us directly on WhatsApp'}
      </span>
    </aside>
  );
};
