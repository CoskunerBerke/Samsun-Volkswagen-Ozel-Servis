import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:+903622667670"
          className="flex items-center justify-center gap-1.5 bg-red-600 active:bg-red-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Fabrikayı Ara</span>
        </a>

        <a
          href="mailto:kestek@kesteksoba.com"
          className="flex items-center justify-center gap-1.5 bg-slate-900 active:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs border border-white/20 shadow-xs"
        >
          <Mail className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span>E-Posta</span>
        </a>

        <a
          href="#iletisim"
          className="flex items-center justify-center gap-1.5 bg-slate-900 active:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs border border-white/20"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span>OSB Konum</span>
        </a>
      </div>
    </div>
  );
};
