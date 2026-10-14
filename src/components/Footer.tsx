import React from 'react';
import { Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pb-24 lg:pb-10 pt-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="bg-white px-3 py-1.5 rounded-lg shrink-0">
              <img
                src="/yilro/logo.png"
                alt="Yılro İnternasyonal Giyim Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                YILRO İNTERNASYONAL GİYİM SAN. VE TİC. LTD. ŞTİ.
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                1980 Hollanda • 1989 Samsun OSB • Bayan Konfeksiyon &amp; İhracat (Etek, Ceket, Yelek, Bluz, Elbise, Pantolon)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
            <a
              href="tel:+903622667170"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              +90 362 266 71 70
            </a>
            <a
              href="mailto:info@yilrogiyim.com.tr"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              info@yilrogiyim.com.tr
            </a>
            <a
              href="https://www.facebook.com/yilrogiyim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              Facebook
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>
              Organize Sanayi Bölgesi, Vali M. Erdoğan Cebeci Bulvarı No: 47, Tekkeköy / SAMSUN
            </span>
          </div>
          <p className="font-medium">
            © 2008–{new Date().getFullYear()} Yılro İnternasyonal Giyim San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
