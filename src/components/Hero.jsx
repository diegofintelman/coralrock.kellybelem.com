import React from 'react';

const dict = {
  en: {
    location: "Miami, FL",
    title1: "The Epitome of",
    title2: "Contemporary Luxury.",
    subtitle: "An architectural masterpiece crafted from native coral rock, designed for those who demand the extraordinary in Coral Gables."
  },
  pt: {
    location: "Miami, FL",
    title1: "O Epítome do",
    title2: "Luxo Contemporâneo.",
    subtitle: "Uma obra-prima arquitetônica esculpida em pedra de coral nativa, projetada para quem exige o extraordinário em Coral Gables."
  },
  es: {
    location: "Miami, FL",
    title1: "El Epítome del",
    title2: "Lujo Contemporáneo.",
    subtitle: "Una obra maestra arquitectónica esculpida en piedra de coral nativa, diseñada para quienes exigen lo extraordinario en Coral Gables."
  }
};

const Hero = ({ language }) => {
  const t = dict[language] || dict.en;

  return (
    <section className="relative h-screen min-h-[600px] w-full pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20 flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full relative z-20 mt-20">
        <h3 className="text-coral-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-8 font-light">
          {t.location}
        </h3>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 drop-shadow-lg max-w-4xl">
          {t.title1} <br className="hidden md:block" /> {t.title2}
        </h1>
        <p className="text-base md:text-xl text-coral-sand/90 font-light max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
