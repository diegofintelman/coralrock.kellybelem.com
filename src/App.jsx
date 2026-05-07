import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

const dict = {
  en: {
    navBtn: "Schedule a Showing",
    concierge: "Concierge",
    title1: "Experience",
    title2: "Exclusivity",
    desc: "Fill out the form below to schedule a private showing at Coral Rock Village, or to connect directly with real estate broker Kelly Belem.",
    address: "1301 MILAN AVENUE, CORAL GABLES",
    rights: "Coral Rock Village. All rights reserved.",
    privacy: "Privacy Policy"
  },
  pt: {
    navBtn: "Agendar Visita",
    concierge: "Concierge",
    title1: "Vivencie a",
    title2: "Exclusividade",
    desc: "Preencha o formulário abaixo para agendar uma visita privativa na Coral Rock Village ou para falar diretamente com a corretora Kelly Belem.",
    address: "1301 MILAN AVENUE, CORAL GABLES",
    rights: "Coral Rock Village. Todos os direitos reservados.",
    privacy: "Política de Privacidade"
  },
  es: {
    navBtn: "Programar Visita",
    concierge: "Conserje",
    title1: "Experimente la",
    title2: "Exclusividad",
    desc: "Complete el formulario a continuación para programar una visita privada en Coral Rock Village, o para conectarse directamente con la agente inmobiliaria Kelly Belem.",
    address: "1301 MILAN AVENUE, CORAL GABLES",
    rights: "Coral Rock Village. Todos los derechos reservados.",
    privacy: "Política de Privacidad"
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const t = dict[language];

  return (
    <div className="bg-coral-dark text-coral-sand font-sans min-h-screen selection:bg-coral-gold/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-lg border-b border-coral-stone/20 transition-all duration-300">
        <div className="pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20 py-5 flex justify-between items-center w-full">
          <div className="font-serif text-lg md:text-2xl tracking-[0.2em] text-white">CORAL ROCK</div>
          
          <div className="flex items-center gap-6 md:gap-8">
            {/* Language Selector */}
            <div className="flex items-center gap-4 text-xs tracking-widest font-light text-coral-stone">
              <button 
                type="button"
                onClick={() => setLanguage('en')}
                className={`transition-all duration-300 cursor-pointer hover:text-coral-gold ${language === 'en' ? 'text-coral-gold border-b border-coral-gold' : ''}`} 
              >
                EN
              </button>
              <button 
                type="button"
                onClick={() => setLanguage('pt')}
                className={`transition-all duration-300 cursor-pointer hover:text-coral-gold ${language === 'pt' ? 'text-coral-gold border-b border-coral-gold' : ''}`} 
              >
                PT
              </button>
              <button 
                type="button"
                onClick={() => setLanguage('es')}
                className={`transition-all duration-300 cursor-pointer hover:text-coral-gold ${language === 'es' ? 'text-coral-gold border-b border-coral-gold' : ''}`} 
              >
                ES
              </button>
            </div>

            <a 
              href="#contact" 
              className="hidden md:inline-block text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] border border-coral-gold text-coral-gold px-6 py-2 md:py-3 hover:bg-coral-gold hover:text-[#0f0f0f] transition duration-500 ease-out whitespace-nowrap"
            >
              {t.navBtn}
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full">
        <Hero language={language} />
        <About language={language} />
        <Gallery language={language} />
        
        {/* Contact Section */}
        <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-[#0a0a0a] relative border-t border-coral-stone/10 pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />

          <div className="w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
              
              <div className="pt-2 lg:pt-8 w-full">
                <span className="text-coral-gold text-xs uppercase tracking-[0.3em] block mb-6">{t.concierge}</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 text-white font-light leading-tight">
                  {t.title1} <br/>
                  <span className="italic text-coral-gold font-normal">{t.title2}</span>
                </h2>
                <div className="w-16 h-[1px] bg-coral-gold/50 mb-10" />
                <p className="text-coral-stone font-light leading-loose text-base md:text-lg w-full mb-16">
                  {t.desc}
                </p>
                
                <div className="space-y-6 text-coral-stone/80 text-xs md:text-sm tracking-widest font-light w-full">
                  <div className="flex items-center gap-6">
                    <span className="w-8 h-[1px] bg-coral-stone/30" />
                    <p>{t.address}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="w-8 h-[1px] bg-coral-stone/30" />
                    <p>+1 (786) 919-8370</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="w-8 h-[1px] bg-coral-stone/30" />
                    <p>KELLY BELEM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#111111] p-8 md:p-12 lg:p-16 border border-coral-stone/10 shadow-2xl relative w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-gold/30 to-transparent" />
                <ContactForm language={language} />
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-[#050505] border-t border-coral-stone/10 text-xs md:text-sm text-coral-stone uppercase tracking-[0.2em] font-light pl-8 md:pl-20 lg:pl-44 pr-6 md:pr-14 lg:pr-20">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
            <p>&copy; {new Date().getFullYear()} {t.rights}</p>
            <div className="flex flex-wrap gap-8">
              <a href="https://www.instagram.com/kellybelem.miami/" target="_blank" rel="noopener noreferrer" aria-label="Visit Kelly Belem Instagram" className="hover:text-coral-gold transition-colors duration-300">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61578532545271" target="_blank" rel="noopener noreferrer" aria-label="Visit Kelly Belem Facebook" className="hover:text-coral-gold transition-colors duration-300">Facebook</a>
              <a href="#" aria-label="Privacy Policy" className="hover:text-coral-gold transition-colors duration-300">{t.privacy}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
