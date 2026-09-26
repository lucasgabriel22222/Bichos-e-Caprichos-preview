import React, { useState, useEffect } from 'react';
import { Scissors, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Zone: Clean Wordmark with subtle Lucide icon */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 text-white group outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
              aria-label="Lisboa Bichos e Caprichos - Início"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                <Scissors className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors uppercase whitespace-nowrap">
                {siteData.company.name}
              </span>
            </a>

            {/* Nav Links: Clean text links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative py-1 hover:border-b-2 hover:border-emerald-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={siteData.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-md shadow-emerald-950/40 hover:shadow-emerald-600/25 transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Marcar no WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={siteData.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20"
                aria-label="Contactar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <div className="text-xs text-slate-400 px-3 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteData.company.phoneFormatted}</span>
              </div>
              <a
                href={siteData.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Marcar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
