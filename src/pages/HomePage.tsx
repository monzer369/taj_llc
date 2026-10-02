import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Compass, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  MessageCircle,
  Images
} from 'lucide-react';
import { PageId } from '../components/Navbar';
import { 
  IMAGES, 
  SERVICES, 
  PORTFOLIO_WORKS, 
  WHY_TAJ, 
  CONTACT_INFO, 
  ServiceItem, 
  getLocalizedService, 
  getLocalizedProject 
} from '../data';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { AutoServiceImageSlider } from '../components/AutoServiceImageSlider';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HomePageProps {
  onNavigate: (page: PageId, preselectedRequest?: string) => void;
  onOpenProjectModal: (work: any) => void;
  onOpenServiceGallery: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenProjectModal,
  onOpenServiceGallery
}) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  // Active selected service on the homepage
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const rawActiveService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];
  const activeService = getLocalizedService(rawActiveService, lang === 'en');
  const activeServiceImages = activeService.images || [];

  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
  };

  const ForwardArrow = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-6 overflow-hidden">
        {/* Subtle grid and ambient luxury glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text & CTA (7 cols) */}
            <div className={`lg:col-span-7 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527] border border-blue-500/25 text-xs font-semibold text-slate-200 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
                <span className="text-[#84CC16] font-bold">Industrial Luxury</span>
                <span className="text-slate-600">|</span>
                <span>{t.heroBadge}</span>
              </div>

              {/* Main Headline - matches user brief specifically */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
                {t.heroTitlePart1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2563EB]">
                  {t.heroTitleHighlight}
                </span>{' '}
                {t.heroTitlePart2}
              </h1>

              {/* Sub-text */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                {t.heroDesc}
              </p>

              {/* Guarantees pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-[#0E1628] border border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                  <span>{t.heroWarrantyPill}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-[#0E1628] border border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.heroCustomPill}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#2563EB]/25 border border-blue-400/30 transition-all"
                >
                  <span>{t.heroCtaQuote}</span>
                  <ForwardArrow className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1527] hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>{t.heroCtaPortfolio}</span>
                </button>
              </div>

              {/* Fast Direct WhatsApp */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <span>{t.heroQuickWhatsApp}</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً TAJ، أود الاستفسار عن تفاصيل المشاريع والأسعار.' : 'Hello TAJ, I would like to inquire about project details and prices.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84CC16] hover:underline flex items-center gap-1 font-bold font-mono"
                  dir="ltr"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#84CC16]" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Showcase with Autoplay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <AutoServiceImageSlider
                  images={SERVICES[0].images}
                  category={lang === 'en' ? SERVICES[0].category_en : SERVICES[0].category}
                  serviceTitle={lang === 'en' ? SERVICES[0].title_en : SERVICES[0].title}
                  onOpenGallery={() => onOpenServiceGallery(SERVICES[0])}
                  aspectClass="aspect-[4/3]"
                  showThumbnails={false}
                />

                {/* Floating micro card for spiral stairs */}
                <div 
                  onClick={() => onOpenServiceGallery(SERVICES[2])}
                  className={`cursor-pointer absolute -bottom-4 ${isRtl ? '-left-3' : '-right-3'} p-2.5 rounded-xl bg-[#0B101D]/95 backdrop-blur-md border border-slate-700/90 shadow-2xl flex items-center gap-2.5 max-w-[220px] hover:border-[#84CC16]/60 transition-all z-30`}
                >
                  <img
                    src={IMAGES.spiralStairs[0]}
                    alt="درج حلزوني"
                    className="w-10 h-10 rounded-lg object-contain bg-slate-950 border border-slate-800 shrink-0 p-0.5"
                  />
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <span className="block text-xs font-bold text-white">{t.heroFloatingStairsTitle}</span>
                    <span className="block text-[10px] text-[#84CC16] font-semibold">{t.heroFloatingStairsSub}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Services & Multi-Image Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className={`max-w-2xl mb-8 space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-bold text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
            <span>{t.showcaseBadge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {t.showcaseTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t.showcaseDesc}
          </p>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Services List (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((rawService, index) => {
              const service = getLocalizedService(rawService, lang === 'en');
              const isSelected = activeService.id === service.id;
              const imgCount = service.images.length;

              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'} ${
                    isSelected
                      ? 'bg-[#0E1628] border-blue-500 shadow-xl shadow-blue-500/10 translate-y-[-2px] ring-1 ring-blue-500/40'
                      : 'bg-[#0B101D] border-slate-800 hover:border-slate-700 hover:bg-[#0E1628]/60'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        0{index + 1}
                      </span>
                      {imgCount > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#84CC16]/15 text-[#84CC16] border border-[#84CC16]/30">
                          <Images className="w-3 h-3" />
                          <span>{imgCount} {lang === 'ar' ? 'صور' : 'Photos'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700">
                          <span>{t.showcaseCustomBlueprint}</span>
                        </span>
                      )}
                    </div>

                    <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#84CC16]' : 'text-white'}`}>
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">
                      {service.category}
                    </span>

                    {/* Direct action button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (imgCount > 0) {
                          onOpenServiceGallery(rawService);
                        } else {
                          handleSelectService(service.id);
                        }
                      }}
                      className="px-2.5 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white font-bold flex items-center gap-1 text-[11px] transition-colors"
                    >
                      {imgCount > 0 ? (
                        <>
                          <Images className="w-3 h-3 text-[#84CC16]" />
                          <span>{t.showcaseExplorePhotos} ({imgCount})</span>
                        </>
                      ) : (
                        <span>{t.showcaseViewSpecs}</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Multi-Image Viewport (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 bg-[#0B101D] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl p-5 flex flex-col justify-between min-h-[460px]">
              <div>
                {/* Visual Area with Autoplay Slider */}
                {activeServiceImages.length > 0 ? (
                  <div className="mb-4">
                    <AutoServiceImageSlider
                      key={activeService.id}
                      images={activeServiceImages}
                      category={activeService.category}
                      serviceTitle={activeService.title}
                      onOpenGallery={() => onOpenServiceGallery(rawActiveService)}
                      aspectClass="aspect-[16/10]"
                      showThumbnails={true}
                    />
                  </div>
                ) : (
                  /* If service has NO photo: Architectural blueprint layout */
                  <div className={`relative rounded-xl bg-[#060910] p-6 border border-dashed border-[#2563EB]/40 mb-4 blueprint-grid ${isRtl ? 'text-right' : 'text-left'} space-y-3`}>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/40 text-xs font-bold text-blue-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{t.showcaseBlueprintTag}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {t.showcaseBlueprintTitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t.showcaseBlueprintDesc}
                    </p>
                    <div className="p-2.5 rounded-lg bg-[#0F172A]/90 border border-slate-800 text-[11px] text-slate-400">
                      {t.showcaseBlueprintSpecs}
                    </div>
                  </div>
                )}

                {/* Details in Viewport */}
                <div className={`space-y-2.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#84CC16] font-bold">
                      {activeService.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {t.warrantyYearsText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {activeService.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeService.shortDesc}
                  </p>
                </div>
              </div>

              {/* Viewport Footer CTA */}
              <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center justify-between gap-2.5">
                {activeServiceImages.length > 0 && (
                  <button
                    onClick={() => onOpenServiceGallery(rawActiveService)}
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <Images className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>{t.showcaseFullAlbum} ({activeServiceImages.length})</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('contact', activeService.title)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all text-center"
                >
                  {t.showcaseRequestQuote}
                </button>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(lang === 'ar' ? `مرحباً TAJ، أود الاستفسار عن: "${activeService.title}".` : `Hello TAJ, I would like to inquire about: "${activeService.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shrink-0"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why TAJ Section */}
      <section className="bg-[#0B101D]/80 border-y border-slate-800/80 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text intro (5 cols) */}
            <div className={`lg:col-span-5 space-y-3 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
                <span>{t.whyBadge}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {t.whyTitlePart1} <span className="text-[#2563EB]">TAJ</span>?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {t.whyDesc}
              </p>
            </div>

            {/* Feature Cards Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHY_TAJ.map((item, idx) => {
                const icons = [Compass, ShieldCheck, Wrench, Award];
                const IconComponent = icons[idx % icons.length];
                const title = lang === 'en' ? item.title_en : item.title;
                const desc = lang === 'en' ? item.desc_en : item.desc;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-[#0E1628] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-2 shadow-md`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-700/80 flex items-center justify-center text-[#84CC16]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div className={`space-y-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
              <span>{t.projectsBadge}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t.projectsTitle}
            </h2>
            <p className="text-slate-400 text-xs">
              {t.projectsDesc}
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
          >
            <span>{t.projectsViewAll}</span>
            <ForwardArrow className="w-3.5 h-3.5 text-[#84CC16]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PORTFOLIO_WORKS.slice(0, 3).map((rawWork) => {
            const work = getLocalizedProject(rawWork, lang === 'en');
            return (
              <div
                key={work.id}
                onClick={() => onOpenProjectModal(rawWork)}
                className="cursor-pointer group rounded-2xl overflow-hidden bg-[#0B101D] border border-slate-800 hover:border-[#84CC16]/50 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={work.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={work.image}
                    alt={work.title}
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} px-2.5 py-0.5 rounded-full bg-slate-900/90 text-[11px] font-bold text-white border border-slate-700 z-20`}>
                    {work.categoryLabel}
                  </div>
                </div>

                <div className={`p-4 ${isRtl ? 'text-right' : 'text-left'} space-y-1.5 flex-1 flex flex-col justify-between`}>
                  <div>
                    <span className="text-[10px] text-slate-400 block mb-0.5">{work.location}</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                      {work.title}
                    </h3>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">{t.warrantyYearsText}</span>
                    <span className="text-[#2563EB] font-bold text-xs group-hover:underline">
                      {t.projectsViewDetails}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 10-Year Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>
    </div>
  );
};
