import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pb-24 lg:pb-10 pt-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="bg-white px-3 py-1.5 rounded-lg shrink-0">
              <img
                src="/kestek/logo.png"
                alt="Kestek Soba Sanayii Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                KESTEK SOBA SANAYİİ
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Yüksek Verimli Kuzine, Döküm Tuğlalı, Kovalı &amp; Izgaralı Soba İmalatı • Samsun
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
            <a
              href="tel:+903622667670"
              className="flex items-center gap-2 text-white hover:text-amber-300 font-bold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              0362 266 76 70
            </a>
            <a
              href="tel:+903622380777"
              className="flex items-center gap-2 text-white hover:text-amber-300 font-bold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Merkez: 0362 238 07 77
            </a>
            <a
              href="mailto:kestek@kesteksoba.com"
              className="flex items-center gap-2 text-white hover:text-amber-300 font-bold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              kestek@kesteksoba.com
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              Fabrika: Organize Sanayi Bölgesi Erdoğan Cebeci Bulv. No: 44 Kirazlık / SAMSUN
            </span>
          </div>
          <p className="font-medium">
            © {new Date().getFullYear()} Kestek Soba Sanayii. Her Hakkı Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
