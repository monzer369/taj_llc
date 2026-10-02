import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Sparkles,
  Target
} from 'lucide-react';
import { IMAGES } from '../data';
import { PageId } from '../components/Navbar';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  return (
    <div className="space-y-14 pb-16 pt-6">
      {/* 1. Header & Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text (7 cols) */}
          <div className={`lg:col-span-7 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>{t.aboutBadge}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {t.aboutTitle}
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t.aboutDesc1}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.aboutDesc2}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0B101D] border border-slate-800 text-xs text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{t.aboutHq}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0B101D] border border-slate-800 text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>{t.heroWarrantyPill}</span>
              </div>
            </div>
          </div>

          {/* Visual: Logo & Craftsmanship showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#0B101D] border border-slate-800 p-8 shadow-2xl text-center space-y-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <img
                  src={IMAGES.logo}
                  alt="TAJ Logo"
                  className="h-24 mx-auto object-contain drop-shadow-[0_10px_20px_rgba(37,99,235,0.3)] mb-4"
                />
                <h3 className="text-2xl font-black text-white">
                  TAJ <span className="text-[#2563EB]">{t.brandSeparator}</span> {isRtl ? 'تاج' : 'STEEL'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t.brandSubtitle}
                </p>
              </div>

              <div className={`grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="p-3 rounded-xl bg-[#070B12] border border-slate-800/80">
                  <span className="block text-[11px] text-slate-400">{lang === 'ar' ? 'التخصص الأساسي' : 'Primary Specialty'}</span>
                  <span className="block text-xs font-bold text-white mt-0.5">{lang === 'ar' ? 'فلل وقصور سكنية راقية' : 'Luxury Villas & Palaces'}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070B12] border border-slate-800/80">
                  <span className="block text-[11px] text-slate-400">{lang === 'ar' ? 'فلسفة التصنيع' : 'Fabrication Philosophy'}</span>
                  <span className="block text-xs font-bold text-[#84CC16] mt-0.5">{lang === 'ar' ? 'جلفنة ودهان حراري مقاوم' : 'Hot-Dip Galvanized & Coated'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission & Core Values */}
      <section className="bg-[#0B101D]/70 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className={`p-8 rounded-3xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-4 hover:border-[#2563EB]/50 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ar' ? 'رؤيتنا الهندسية' : 'Our Engineering Vision'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'أن نكون الوجهة الأولى والموثوقة لأصحاب الفلل والمهندسين المعماريين في دولة الإمارات عند البحث عن حلول حديدية ومعدنية متقنة تجمع بين القوة الفولاذية والجمال الإنشائي المعاصر.'
                  : 'To be the premier and trusted benchmark for villa owners and architects in the UAE when seeking bespoke metalwork that unites high-tensile steel strength with contemporary architectural poise.'}
              </p>
            </div>

            {/* Mission */}
            <div className={`p-8 rounded-3xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-4 hover:border-[#84CC16]/50 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-[#84CC16]/20 border border-[#84CC16]/40 flex items-center justify-center text-[#84CC16]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ar' ? 'رسالتنا في التصنيع' : 'Our Manufacturing Mission'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'تنفيذ كل قطعة حديدية كتحفة هندسية فريدة ومستدامة، تعتمد على خامات مجلفنة مدروسة تقاوم عوامل التعرية والحرارة وتوفر للمالك راحة بال مطلقة مدعومة بضمان 10 سنوات صريح.'
                  : 'To execute every steel piece as a unique and durable engineering masterpiece, crafted with hot-dip galvanized materials designed to resist weathering and extreme heat, providing complete peace of mind with a 10-year warranty.'}
              </p>
            </div>

            {/* UAE Climate Adaptation */}
            <div className={`p-8 rounded-3xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-4 hover:border-[#2563EB]/50 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'ar' ? 'مقاومة المناخ الإماراتي' : 'UAE Climate Resilience'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'تطوير معالجات خاصة للحديد عبر الغلفنة الساخنة والطلاءات الكهروسكونية المزدوجة التي تمنع الصدأ تماماً في البيئات الساحلية ودرجات الحرارة والرطوبة العالية.'
                  : 'Advanced steel passivation via hot-dip galvanization and dual electrostatic coatings completely preventing rust and oxidation in coastal UAE environments with high heat and humidity.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats / Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B101D] border border-slate-800 shadow-2xl">
          <div className={`max-w-3xl ${isRtl ? 'text-right' : 'text-left'} space-y-3 mb-10`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
              <span>{t.aboutValuesTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'ar' ? 'معايير الإنجاز الهندسي في TAJ' : 'Engineering Milestones at TAJ'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'ar'
                ? 'نلتزم بمنهجية عمل هندسية واضحة تبدأ من دراسة الموقع والمخططات حتى التسليم والتركيب النهائي مع ضمان 10 سنوات.'
                : 'We operate with a rigorous engineering methodology from site surveying and structural calculation to final installation with a certified 10-year warranty.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className={`p-6 rounded-2xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-2`}>
              <span className="text-3xl font-black text-[#84CC16] font-mono">{t.aboutStatYears}</span>
              <h4 className="text-sm font-bold text-white">{lang === 'ar' ? 'ضمان إنشائي معتمد' : 'Certified Structural Warranty'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{t.aboutStatYearsDesc}</p>
            </div>

            <div className={`p-6 rounded-2xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-2`}>
              <span className="text-3xl font-black text-[#2563EB] font-mono">{t.aboutStatEmirates}</span>
              <h4 className="text-sm font-bold text-white">{lang === 'ar' ? 'تغطية شاملة للمشاريع' : 'Nationwide UAE Coverage'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{t.aboutStatEmiratesDesc}</p>
            </div>

            <div className={`p-6 rounded-2xl bg-[#070B12] border border-slate-800 ${isRtl ? 'text-right' : 'text-left'} space-y-2`}>
              <span className="text-3xl font-black text-[#84CC16] font-mono">{t.aboutStatCustom}</span>
              <h4 className="text-sm font-bold text-white">{lang === 'ar' ? 'تصنيع مخصص حسب الطلب' : 'Bespoke Custom Tailoring'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{t.aboutStatCustomDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>
    </div>
  );
};
