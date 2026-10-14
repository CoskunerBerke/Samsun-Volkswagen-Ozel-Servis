import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Flame, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Kurumsal & Misyonumuz', href: '#kurumsal' },
    { name: 'Bayi & Müşteri Yorumları', href: '#referanslar' },
    { name: 'Ürün Gruplarımız', href: '#urunler' },
    { name: 'Modellerimizden Kareler', href: '#tesis' },
    { name: 'İletişim & Sipariş', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Official KESTEK Logo + Nav Links */}
          <div className="flex items-center gap-7">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div className="bg-white px-2.5 py-1.5 rounded-md shadow-xs">
                <img
                  src="/kestek/logo.png"
                  alt="Kestek Soba Sanayii Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block border-l border-white/15 pl-3">
                <div className="font-display font-bold text-base text-white tracking-wide leading-tight">
                  KESTEK SOBA SANAYİİ
                </div>
                <div className="text-[11px] text-amber-400 font-medium">
                  Yüksek Verimli Soba &amp; Kuzine • Samsun OSB
                </div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Direct Factory Phone + Order CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+903622667670"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Fabrika: 0362 266 76 70</span>
            </a>

            <a
              href="#iletisim"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Flame className="w-4 h-4" />
              <span>Sipariş &amp; Bayilik Başvurusu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-white/15"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Organize Sanayi Bölgesi Erdoğan Cebeci Bulv. No:44 Kirazlık / Samsun</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+903622667670"
                className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Fabrikayı Ara
              </a>
              <a
                href="tel:+903622380777"
                className="flex items-center justify-center gap-2 bg-slate-800 text-white font-bold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Merkez: 238 07 77
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
