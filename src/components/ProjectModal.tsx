import React from 'react';
import { X, MapPin, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { ProjectWork, CONTACT_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ProjectModalProps {
  project: ProjectWork | null;
  onClose: () => void;
  onRequestQuote: (projectCategory: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  if (!project) return null;

  const projectTitle = lang === 'en' ? project.title_en : project.title;
  const projectCategory = lang === 'en' ? project.categoryLabel_en : project.categoryLabel;
  const projectLocation = lang === 'en' ? project.location_en : project.location;
  const projectDescription = lang === 'en' ? project.description_en : project.description;
  const projectHighlights = lang === 'en' ? project.highlights_en : project.highlights;

  const whatsappMessage = lang === 'ar'
    ? `مرحباً TAJ، أود الاستفسار عن تفاصيل تنفيذ مشروع مماثل لـ: "${projectTitle}" (${projectCategory}) - ${projectLocation}.`
    : `Hello TAJ, I would like to inquire about executing a project similar to: "${projectTitle}" (${projectCategory}) - ${projectLocation}.`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-3xl bg-[#0B101D] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B12]/90">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#84CC16]/15 text-[#84CC16] border border-[#84CC16]/30">
              {projectCategory}
            </span>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{projectLocation}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label={t.modalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/10] sm:aspect-video group flex items-center justify-center">
            {project.image && (
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
              />
            )}
            <img
              src={project.image}
              alt={projectTitle}
              className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
            <div className={`absolute bottom-4 ${isRtl ? 'right-4 left-4' : 'left-4 right-4'} z-20`}>
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                {projectTitle}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              {t.modalProjectOverview}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {projectDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-[#070B12] rounded-2xl p-5 border border-slate-800">
            <h4 className="text-xs uppercase tracking-wider text-[#84CC16] font-bold mb-3">
              {t.modalHighlights}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty reassurance */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-[#84CC16] shrink-0" />
            <span>{t.heroWarrantyPill}</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#070B12]/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onRequestQuote(projectTitle)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all"
          >
            {t.modalRequestSimilar}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
