import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-zinc-950 border-t border-white/15 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+905444775657"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Hemen Ara</span>
        </a>
        <a
          href="https://wa.me/905444775657?text=Merhaba,%20servis%20randevusu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-800 text-white font-semibold text-xs border border-white/15"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://maps.app.goo.gl/kLAzCUYKyzsqo8X88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-900 text-zinc-200 font-medium text-xs border border-white/10"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Konum</span>
        </a>
      </div>
    </div>
  );
};

export default MobileQuickBar;
