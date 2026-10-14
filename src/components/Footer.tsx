import React from 'react';
import VwLogo from './VwLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-white">
              <VwLogo className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block text-white font-bold text-base">
                SAMSUN VOLKSWAGEN ÖZEL SERVİS
              </span>
              <span className="block text-xs text-slate-400">
                Volkswagen • Audi • Seat • Škoda Özel Bakım, Onarım & Yedek Parça
              </span>
            </div>
          </div>

          <div className="text-sm text-slate-300">
            <span className="font-semibold text-white">Adres:</span> Şabanoğlu Mah. 19 Mayıs Sanayi Sitesi 59. Sokak No:38 Tekkeköy / Samsun
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Samsun Volkswagen Özel Servis. Tüm hakları saklıdır.</p>
          <p>Bağımsız özel servis hizmeti sunulmaktadır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
