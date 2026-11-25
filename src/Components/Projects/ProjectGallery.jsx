import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectGallery({ images = [], projectTitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const active = images[activeIndex];
  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="space-y-3">
      <div className="relative rounded-lg overflow-hidden border border-[#1A4027]/15 dark:border-gray-700/80 bg-[#EBECEB] dark:bg-[#0F1724] group">
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={active.src}
            alt={`${projectTitle} — ${active.caption}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Controles discretos */}
        {images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagem anterior"
              className="pointer-events-auto w-8 h-8 rounded-md bg-white/90 dark:bg-[#111827]/90 text-[#1A4027] dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-[#1ED760] hover:text-[#1A4027] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="pointer-events-auto w-8 h-8 rounded-md bg-white/90 dark:bg-[#111827]/90 text-[#1A4027] dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-[#1ED760] hover:text-[#1A4027] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Legenda discreta no rodapé da foto */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-white dark:bg-[#131C2C] border-t border-[#1A4027]/10 dark:border-gray-800">
          <span className="text-xs text-gray-700 dark:text-gray-300 truncate">
            {active.caption}
          </span>
          <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 shrink-0 ml-3">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Miniaturas clicáveis */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={img.caption}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ver imagem: ${img.caption}`}
              className={`relative aspect-[16/10] rounded overflow-hidden border transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'border-[#1ED760] ring-1 ring-[#1ED760]'
                  : 'border-[#1A4027]/15 dark:border-gray-700 opacity-65 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
