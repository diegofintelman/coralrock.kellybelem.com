import React, { useState } from 'react';

const dict = {
  en: {
    name: "FULL NAME",
    namePlace: "How would you like to be addressed?",
    email: "E-MAIL",
    emailPlace: "Your best personal or corporate email",
    phone: "PHONE NUMBER",
    phonePlace: "+1 (000) 000-0000",
    button: "SCHEDULE A SHOWING",
    processing: "Processing...",
    whatsappUrl: "https://wa.me/17869198370?text=Hello%20Kelly.%20I%20contacted%20you%20through%20the%20Coral%20Rock%20Village%20website%20and%20would%20like%20to%20discuss%20the%20property."
  },
  pt: {
    name: "NOME COMPLETO",
    namePlace: "Como gostaria de ser chamado?",
    email: "E-MAIL",
    emailPlace: "Seu melhor e-mail corporativo ou pessoal",
    phone: "TELEFONE / WHATSAPP",
    phonePlace: "+55 (00) 00000-0000",
    button: "AGENDAR VISITA",
    processing: "Processando...",
    whatsappUrl: "https://wa.me/17869198370?text=Ol%C3%A1%20Kelly.%20Entrei%20em%20contato%20pelo%20site%20do%20Coral%20Rock%20Village%20e%20gostaria%20de%20conversar%20sobre%20a%20propriedade."
  },
  es: {
    name: "NOMBRE COMPLETO",
    namePlace: "¿Cómo le gustaría que le llamemos?",
    email: "CORREO ELECTRÓNICO",
    emailPlace: "Su mejor correo personal o corporativo",
    phone: "TELÉFONO / WHATSAPP",
    phonePlace: "+1 (000) 000-0000",
    button: "PROGRAMAR UNA VISITA",
    processing: "Procesando...",
    whatsappUrl: "https://wa.me/17869198370?text=Hola%20Kelly.%20Me%20comuniqu%C3%A9%20a%20trav%C3%A9s%20del%20sitio%20web%20de%20Coral%20Rock%20Village%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20la%20propiedad."
  }
};

const ContactForm = ({ language }) => {
  const [status, setStatus] = useState('');
  const t = dict[language] || dict.en;
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUTMkPtYn4GPqAdhAnT-kuC3cnFQD1I1Xn2qRwJ_QHonx-HyY8rDpKuJx__EqM-h8p/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // 1. Preparar os dados (URLSearchParams é necessário para o Google Apps Script entender os campos)
    const formData = new FormData(e.target);
    const data = new URLSearchParams(formData);

    // 2. Abrir o WhatsApp imediatamente (antes do await) para evitar bloqueio de popup de navegadores mobile/desktop
    window.open(t.whatsappUrl, '_blank');
    
    try {
      // 3. Enviar para o Google Sheets ignorando o CORS do localhost
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setStatus('success');
      e.target.reset();
    } catch (error) {
      console.error("Erro ao enviar dados", error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 flex flex-col w-full text-left items-start justify-start">
      <div className="flex flex-col w-full items-start">
        <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-coral-stone mb-2 cursor-pointer">
          {t.name}
        </label>
        <input 
          id="contact-name"
          type="text" 
          name="Nome" 
          required 
          placeholder={t.namePlace} 
          className="w-full bg-transparent border-b border-coral-stone/30 py-3 text-white placeholder-coral-stone/40 focus:outline-none focus:border-coral-gold transition-colors duration-500 font-light text-base"
        />
      </div>
      
      <div className="flex flex-col w-full items-start">
        <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.2em] text-coral-stone mb-2 cursor-pointer">
          {t.email}
        </label>
        <input 
          id="contact-email"
          type="email" 
          name="Email" 
          required 
          placeholder={t.emailPlace} 
          className="w-full bg-transparent border-b border-coral-stone/30 py-3 text-white placeholder-coral-stone/40 focus:outline-none focus:border-coral-gold transition-colors duration-500 font-light text-base"
        />
      </div>
      
      <div className="flex flex-col w-full items-start">
        <label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.2em] text-coral-stone mb-2 cursor-pointer">
          {t.phone}
        </label>
        <input 
          id="contact-phone"
          type="tel" 
          name="Telefone" 
          required 
          placeholder={t.phonePlace} 
          className="w-full bg-transparent border-b border-coral-stone/30 py-3 text-white placeholder-coral-stone/40 focus:outline-none focus:border-coral-gold transition-colors duration-500 font-light text-base"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full bg-coral-gold text-[#0f0f0f] py-4 md:py-5 mt-6 uppercase tracking-[0.25em] text-sm font-semibold hover:bg-white transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t.processing : t.button}
      </button>

      {/* Note: the visual success/error are mostly hidden by the rapid WhatsApp popup and UI reset, 
          but we keep them just in case */}
      {status === 'success' && (
        <div className="bg-[#1a2e1e] border border-[#2d5a36] p-4 text-left mt-6 w-full">
          <p className="text-[#84c896] text-sm font-light tracking-wide leading-relaxed">
            Opening WhatsApp...
          </p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-[#3a1c1c] border border-[#6b2c2c] p-4 text-left mt-6 w-full">
          <p className="text-[#e28484] text-sm font-light tracking-wide leading-relaxed">
            Opening WhatsApp...
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
