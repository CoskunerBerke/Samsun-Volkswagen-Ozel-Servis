import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import VwLogo from './VwLogo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kurumsal', href: '#kurumsal' },
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Servisimiz', href: '#galeri' },
    { name: 'İletişim & Konum', href: '#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-white group-hover:bg-blue-600/30 transition-all">
              <VwLogo className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="block text-white font-bold text-base sm:text-lg tracking-tight leading-none">
                SAMSUN VOLKSWAGEN
              </span>
              <span className="block text-sky-400 text-[11px] font-semibold tracking-widest uppercase mt-1">
                ÖZEL SERVİS & YEDEK PARÇA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+905444775657"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>0544 477 56 57</span>
            </a>
            <a
              href="https://wa.me/905444775657?text=Merhaba,%20Samsun%20Volkswagen%20%C3%96zel%20Servis%20randevu%20ve%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold transition-all shadow-lg shadow-sky-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/10"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-5 border-t border-white/10 bg-slate-950/95 rounded-2xl px-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-medium text-slate-200 hover:text-sky-400 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="tel:+905444775657"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white text-sm font-semibold border border-white/15"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>0544 477 56 57</span>
              </a>
              <a
                href="https://wa.me/905444775657?text=Merhaba,%20Samsun%20Volkswagen%20%C3%96zel%20Servis%20randevu%20ve%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-slate-950 text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
