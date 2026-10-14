import React from 'react';
import VwLogo from './VwLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <VwLogo className="w-8 h-8 shrink-0" />
            <div>
              <span className="block text-white font-bold text-sm">
                SAMSUN VOLKSWAGEN ÖZEL SERVİS
              </span>
              <span className="block text-xs text-zinc-400">
                Volkswagen • Audi • Seat • Škoda Özel Bakım, Onarım & Yedek Parça
              </span>
            </div>
          </div>

          <div className="text-sm text-zinc-300">
            Şabanoğlu Mah. 19 Mayıs Sanayi Sitesi 59. Sokak No:38 Tekkeköy / Samsun • 0544 477 56 57
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Samsun Volkswagen Özel Servis. Tüm hakları saklıdır.</p>
          <p>Bağımsız özel servis hizmeti sunulmaktadır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
