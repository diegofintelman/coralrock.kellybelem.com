import React, { useState, useEffect, useRef } from 'react';

const dict = {
  en: {
    portfolio: "The Portfolio",
    title1: "A Visual",
    title2: "Journey",
    images: [
      { src: '/images/vista-panoramica-2.jpg', label: 'Façade & Exterior' },
      { src: '/images/milan-12.webp', label: 'Living Areas' },
      { src: '/images/milan-21.webp', label: 'Coral Details' },
      { src: '/images/milan-28.webp', label: 'Master Suite' },
      { src: '/images/milan-36.webp', label: 'Leisure Areas' },
      { src: '/images/milan-44.webp', label: 'Interior Design' },
      { src: '/images/milan-52.webp', label: 'Night Illumination' },
    ]
  },
  pt: {
    portfolio: "O Portfólio",
    title1: "Uma Jornada",
    title2: "Visual",
    images: [
      { src: '/images/vista-panoramica-2.jpg', label: 'Fachada & Exterior' },
      { src: '/images/milan-12.webp', label: 'Ambientes de Estar' },
      { src: '/images/milan-21.webp', label: 'Detalhes em Coral' },
      { src: '/images/milan-28.webp', label: 'Suíte Master' },
      { src: '/images/milan-36.webp', label: 'Área de Lazer' },
      { src: '/images/milan-44.webp', label: 'Design de Interiores' },
      { src: '/images/milan-52.webp', label: 'Iluminação Noturna' },
    ]
  },
  es: {
    portfolio: "El Portafolio",
    title1: "Un Viaje",
    title2: "Visual",
    images: [
      { src: '/images/vista-panoramica-2.jpg', label: 'Fachada y Exterior' },
      { src: '/images/milan-12.webp', label: 'Áreas de Estar' },
      { src: '/images/milan-21.webp', label: 'Detalles de Coral' },
      { src: '/images/milan-28.webp', label: 'Suite Principal' },
      { src: '/images/milan-36.webp', label: 'Zonas de Ocio' },
      { src: '/images/milan-44.webp', label: 'Diseño de Interiores' },
      { src: '/images/milan-52.webp', label: 'Iluminación Nocturna' },
    ]
  }
};

const Gallery = ({ language }) => {
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useRef(null);
  const t = dict[language] || dict.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('.gallery-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p + 1) % t.images.length);
      if (e.key === 'ArrowLeft') setLightbox((p) => (p - 1 + t.images.length) % t.images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, t.images.length]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" ref={sectionRef} className="w-full py-24 md:py-32 lg:py-40 bg-[#0a0a0a] pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20">
      <div className="w-full">
        {/* Header */}
        <div className="mb-16 md:mb-24 w-full">
          <span className="text-coral-gold text-xs uppercase tracking-[0.3em] block mb-4">{t.portfolio}</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-light">
            {t.title1} <span className="italic text-coral-gold font-normal">{t.title2}</span>
          </h2>
          <div className="w-16 h-[1px] bg-coral-gold/50" />
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {t.images.map((img, index) => (
            <div
              key={index}
              className={`gallery-reveal opacity-0 group relative overflow-hidden bg-[#111111] cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-75 ${
                  index === 0 ? 'h-[50vh] md:h-[800px]' : 'h-64 md:h-80'
                }`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 border border-coral-gold/80 rounded-full flex items-center justify-center mx-auto mb-4 bg-black/40 backdrop-blur-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c5a880" strokeWidth="1.5">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                  <span className="text-white text-xs uppercase tracking-[0.2em] font-light shadow-black drop-shadow-md px-4">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in-up" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-6 right-6 w-12 h-12 border border-white/20 flex items-center justify-center text-white text-xl hover:border-coral-gold hover:text-coral-gold transition-colors rounded-full z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            ✕
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white text-2xl hover:border-coral-gold hover:text-coral-gold transition-colors rounded-full z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + t.images.length) % t.images.length); }}
          >
            ‹
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white text-2xl hover:border-coral-gold hover:text-coral-gold transition-colors rounded-full z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % t.images.length); }}
          >
            ›
          </button>

          <div onClick={(e) => e.stopPropagation()} className="w-full h-full flex flex-col items-center justify-center">
            <img 
              src={t.images[lightbox].src} 
              alt={t.images[lightbox].label} 
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4 text-coral-stone text-xs md:text-sm uppercase tracking-[0.2em]">
              <span>{t.images[lightbox].label}</span>
              <span className="hidden md:inline">|</span>
              <span className="opacity-50">{lightbox + 1} / {t.images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
