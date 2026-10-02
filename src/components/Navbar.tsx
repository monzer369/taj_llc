import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export type PageId = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, isRtl } = useLanguage();
  const t = translations[lang];

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'services', label: t.navServices },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ForwardArrow = isRtl ? ChevronLeft : ChevronRight;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800 shadow-xl transition-all">
      {/* Top micro bar for UAE VIP focus & contact */}
      <div className="bg-[#070B12] border-b border-slate-800/80 px-4 sm:px-8 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#84CC16]"></span>
            <span className="font-medium text-slate-300 truncate max-w-[280px] sm:max-w-none">
              {t.topBarNotice}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors" dir="ltr">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{t.locationDubai}</span>
            </div>

            {/* Language Switcher Button in Top Bar (Visible on all screens) */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700/80 font-bold text-xs transition-all shadow-sm active:scale-95"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-[#84CC16]" />
              <span className="font-bold">{t.langButton}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand title */}
          <button
            onClick={() => handleNavClick('home')}
            className={`flex items-center gap-2.5 focus:outline-none group ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <div className="relative h-11 w-auto flex items-center">
              <img
                src={IMAGES.logo}
                alt="TAJ Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className={`hidden sm:block ${isRtl ? 'border-r pr-2.5' : 'border-l pl-2.5'} border-slate-700/80`}>
              <span className="block text-base font-black text-white tracking-wider">
                TAJ <span className="text-[#2563EB]">{t.brandSeparator}</span> {isRtl ? 'تاج' : 'STEEL'}
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-normal -mt-0.5">
                {t.brandSubtitle}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-slate-800 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-3 h-0.5 bg-[#84CC16] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Primary Language switcher button in header */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white border border-slate-700 font-bold text-xs shadow-sm transition-all"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#84CC16]" />
              <span className="font-mono font-bold text-xs">{t.langButton}</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs shadow-md shadow-[#2563EB]/25 border border-blue-400/30 transition-all duration-200"
            >
              <span>{t.navQuoteBtn}</span>
              <ForwardArrow className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle & quick actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-white font-bold text-xs border border-slate-700"
            >
              {t.langButton}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-bold"
            >
              {lang === 'ar' ? 'طلب سعر' : 'Quote'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                    isRtl ? 'text-right' : 'text-left'
                  } ${
                    isActive
                      ? 'bg-[#2563EB]/20 text-[#84CC16] border border-[#2563EB]/40'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ForwardArrow className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-xs"
            >
              <Globe className="w-4 h-4 text-[#84CC16]" />
              <span>{lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'} ({t.langButton})</span>
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً TAJ، أود الاستفسار عن أعمالكم الهندسية والحديدية للفلل.' : 'Hello TAJ, I would like to inquire about your custom steel & engineering services for villas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'ar' ? 'محادثة واتساب سريعة' : 'Quick WhatsApp Chat'}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs font-mono"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
