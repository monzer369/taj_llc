import React, { useState } from 'react';
import { Sparkles, MapPin, Eye } from 'lucide-react';
import { PORTFOLIO_WORKS, ProjectWork, getLocalizedProject } from '../data';
import { PageId } from '../components/Navbar';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface PortfolioPageProps {
  onNavigate: (page: PageId, preselectedRequest?: string) => void;
  onOpenProjectModal: (work: ProjectWork) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.portfolioAllFilter },
    { id: 'مسابح', label: lang === 'en' ? 'Pool Covers' : 'أغطية المسابح' },
    { id: 'برجولات', label: lang === 'en' ? 'Canopies & Pergolas' : 'البرجولات والمظلات' },
    { id: 'أدراج', label: lang === 'en' ? 'Spiral Stairs' : 'الأدراج الحلزونية' },
    { id: 'أبواب', label: lang === 'en' ? 'Doors & Gates' : 'الأبواب والبوابات' },
    { id: 'جلسات', label: lang === 'en' ? 'Outdoor Lounges' : 'الجلسات الخارجية' },
    { id: 'ديكورات', label: lang === 'en' ? 'Screens & Partitions' : 'الديكورات والفواصل' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.portfolioBadge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {t.portfolioTitle}
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {t.portfolioDesc}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25 scale-105'
                  : 'bg-[#0B101D] text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((rawProject) => {
            const project = getLocalizedProject(rawProject, lang === 'en');
            return (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal(rawProject)}
                className="group cursor-pointer bg-[#0B101D] border border-slate-800 hover:border-[#84CC16]/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity z-10 pointer-events-none"></div>

                    <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} px-3 py-1 rounded-full bg-[#0F172A]/90 backdrop-blur-md text-xs font-bold text-[#84CC16] border border-slate-700 z-20`}>
                      {project.categoryLabel}
                    </div>

                    <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs text-slate-300 z-20">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{project.location}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#84CC16] font-bold group-hover:translate-x-[-4px] transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.portfolioInspectSpecs}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className={`p-6 ${isRtl ? 'text-right' : 'text-left'} space-y-3`}>
                    <h3 className="text-base font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{t.heroWarrantyPill}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('contact', project.title);
                      }}
                      className="text-[#2563EB] hover:text-blue-400 font-bold"
                    >
                      {lang === 'ar' ? 'طلب مماثل ←' : 'Request Similar →'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>
    </div>
  );
};
