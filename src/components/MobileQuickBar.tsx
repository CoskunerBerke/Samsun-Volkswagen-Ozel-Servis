import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+905444775657"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs"
        >
          <Phone className="w-4 h-4" />
          <span>Hemen Ara</span>
        </a>
        <a
          href="https://wa.me/905444775657?text=Merhaba,%20Samsun%20Volkswagen%20%C3%96zel%20Servis%20randevu%20ve%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://maps.app.goo.gl/kLAzCUYKyzsqo8X88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/15"
        >
          <MapPin className="w-4 h-4 text-sky-400" />
          <span>Konum</span>
        </a>
      </div>
    </div>
  );
};

export default MobileQuickBar;
