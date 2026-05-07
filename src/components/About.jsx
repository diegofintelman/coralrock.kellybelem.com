import React, { useEffect, useRef } from 'react';

const dict = {
  en: {
    stats: [
      { value: '12,916', unit: 'Sq. Ft.', label: 'Total Area' },
      { value: '5', unit: '', label: 'Cottages' },
      { value: '3', unit: '', label: 'Stories' },
      { value: '1927', unit: '', label: 'Original Stone' },
    ],
    property: "The Property",
    title1: "A Legacy",
    title2: "Reimagined.",
    desc: "Originally built in 1927 with coral rock sourced from Biscayne Bay reefs, Coral Rock Village has been meticulously restored and expanded by an award-winning architectural team. Every detail preserves the soul of the original structure while delivering the comfort and sophistication demanded by the 21st century.",
    features: [
      {
        title: 'Coral Rock Architecture',
        desc: 'Authentic coral stone walls meticulously hand-carved, preserving nearly a century of history while seamlessly blending with contemporary finishes.',
      },
      {
        title: 'Biophilic Design',
        desc: 'Flawless integration with nature—lush tropical gardens, reflective water features, and natural cross-ventilation in every living space.',
      },
      {
        title: 'Invisible Technology',
        desc: 'State-of-the-art smart home automation, concealed ambient audio, sophisticated scene lighting, and intelligent climate control.',
      },
      {
        title: 'Absolute Privacy',
        desc: 'Towering perimeter walls, reinforced security gates, 24/7 surveillance, and paramount acoustic insulation for an unparalleled sanctuary of serenity.',
      },
    ]
  },
  pt: {
    stats: [
      { value: '1.200', unit: 'm²', label: 'Área Total' },
      { value: '5', unit: '', label: 'Cottages' },
      { value: '3', unit: '', label: 'Pavimentos' },
      { value: '1927', unit: '', label: 'Pedra Original' },
    ],
    property: "A Propriedade",
    title1: "Uma Relíquia",
    title2: "Reimaginada.",
    desc: "Originalmente construída em 1927 com pedra de coral extraída dos recifes de Biscayne Bay, a Coral Rock Village foi meticulosamente restaurada e expandida por um time de arquitetos premiados. Cada detalhe preserva a alma da estrutura original enquanto entrega o conforto e a sofisticação que o século XXI exige.",
    features: [
      {
        title: 'Arquitetura em Coral',
        desc: 'Paredes autênticas de pedra de coral meticulosamente esculpidas à mão, preservando quase um século de história enquanto se integram perfeitamente a acabamentos contemporâneos.',
      },
      {
        title: 'Design Biofílico',
        desc: 'Integração impecável com a natureza — exuberantes jardins tropicais, espelhos d\'água reflexivos e ventilação natural cruzada em todos os ambientes.',
      },
      {
        title: 'Tecnologia Invisível',
        desc: 'Automação residencial de última geração, áudio ambiente oculto, iluminação cênica sofisticada e controle climático inteligente.',
      },
      {
        title: 'Privacidade Absoluta',
        desc: 'Muros perimetrais imponentes, portões de segurança reforçados, vigilância 24/7 e isolamento acústico supremo para um santuário de serenidade inigualável.',
      },
    ]
  },
  es: {
    stats: [
      { value: '1.200', unit: 'm²', label: 'Área Total' },
      { value: '5', unit: '', label: 'Cottages' },
      { value: '3', unit: '', label: 'Pisos' },
      { value: '1927', unit: '', label: 'Piedra Original' },
    ],
    property: "La Propiedad",
    title1: "Un Legado",
    title2: "Reimaginado.",
    desc: "Originalmente construida en 1927 con piedra de coral extraída de los arrecifes de Biscayne Bay, Coral Rock Village ha sido meticulosamente restaurada y ampliada por un galardonado equipo arquitectónico. Cada detalle preserva el alma de la estructura original al tiempo que ofrece el confort y la sofisticación que exige el siglo XXI.",
    features: [
      {
        title: 'Arquitectura en Coral',
        desc: 'Auténticas paredes de piedra de coral meticulosamente talladas a mano, preservando casi un siglo de historia mientras se combinan a la perfección con acabados contemporáneos.',
      },
      {
        title: 'Diseño Biofílico',
        desc: 'Integración impecable con la naturaleza: exuberantes jardines tropicales, espejos de agua reflectantes y ventilación cruzada natural en cada espacio vital.',
      },
      {
        title: 'Tecnología Invisible',
        desc: 'Automatización residencial de vanguardia, audio ambiental oculto, iluminación escénica sofisticada y control climático inteligente.',
      },
      {
        title: 'Privacidad Absoluta',
        desc: 'Altos muros perimetrales, puertas de seguridad reforzadas, vigilancia 24/7 y máximo aislamiento acústico para un santuario de serenidad incomparable.',
      },
    ]
  }
};

const About = ({ language }) => {
  const wrapperRef = useRef(null);
  const t = dict[language] || dict.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = wrapperRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [language]); 

  return (
    <div ref={wrapperRef} className="w-full">
      {/* Stats Bar */}
      <section className="w-full bg-[#0f0f0f] border-y border-coral-stone/10 pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {t.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal opacity-0 py-12 md:py-16 flex flex-col items-start justify-center ${
                  i < 3 ? 'md:border-r border-coral-stone/10 md:pr-8' : ''
                } ${i > 0 ? 'md:pl-8' : ''} ${i === 1 || i === 3 ? 'pl-4 border-l border-coral-stone/10 md:border-l-0 md:pl-8' : 'pr-4'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-3 font-light">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-coral-gold text-sm md:text-lg ml-2 font-sans tracking-normal">{stat.unit}</span>
                  )}
                </div>
                <div className="text-coral-stone text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="w-full py-24 md:py-32 lg:py-40 bg-coral-dark pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20">
        <div className="w-full">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full mb-24">
            <div className="w-full">
              <div className="reveal opacity-0 w-full" style={{ animationDelay: '0.1s' }}>
                <span className="text-coral-gold text-xs uppercase tracking-[0.3em] block">
                  {t.property}
                </span>
                <div className="w-16 h-[1px] bg-coral-gold mt-6 mb-8 lg:mb-10" />
              </div>
              
              <h2
                className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light mb-8"
                style={{ animationDelay: '0.2s' }}
              >
                {t.title1} <br />
                <span className="italic text-coral-gold font-normal">{t.title2}</span>
              </h2>
            </div>
            
            <div className="h-full pt-2 lg:pt-14 w-full">
              <p
                className="reveal opacity-0 text-coral-stone font-light leading-loose text-base md:text-lg w-full"
                style={{ animationDelay: '0.3s' }}
              >
                {t.desc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-16 w-full mb-24 lg:mb-32">
            {t.features.map((feat, i) => (
              <div
                key={feat.title}
                className="reveal opacity-0 group border-l border-coral-stone/20 pl-6 md:pl-8 hover:border-coral-gold transition-colors duration-500 w-full"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-coral-gold transition-colors duration-300 font-light block">
                  {feat.title}
                </h3>
                <p className="text-coral-stone font-light leading-loose text-sm md:text-base w-full block">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal opacity-0 w-full overflow-hidden bg-[#111111]"
            style={{ animationDelay: '0.3s' }}
          >
            <img
              src="/images/vista-panoramica-1.jpg"
              alt="Vista Panorâmica da Coral Rock Village"
              className="w-full h-[50vh] md:h-[70vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
