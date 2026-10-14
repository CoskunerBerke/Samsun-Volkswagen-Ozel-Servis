import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Full-Screen Continuous Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/yilro/slide1.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none"
      >
        <source src="/yilro/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Clean High-Contrast Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

      {/* Clean Uncluttered Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Avrupa ve dünya pazarlarına{' '}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              bayan konfeksiyon ve hazır giyim imalatı
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            1980 yılında Hollanda&apos;da kurulan ve 1989&apos;dan bugüne Samsun Organize Sanayi Bölgesi&apos;ndeki <strong className="text-white">4.000 m²</strong> fabrikasında <strong className="text-white">200 personeliyle</strong> üretim yapan <strong className="text-white">Yılro İnternasyonal Giyim</strong>; günlük 2.500 adet kapasiteyle etek, ceket, yelek, bluz, elbise ve pantolon üretmektedir.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <span>İletişim &amp; Üretim Teklifi Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 bg-slate-900/75 hover:bg-slate-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <span>Ürün Gruplarımızı İncele</span>
            </a>

            <a
              href="tel:+903622667170"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>0362 266 71 70</span>
            </a>
          </div>

          {/* Single-Line Trust Footnote */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              4.000 m² Kapalı Fabrika • 200 Uzman Personel • 2.500 Adet/Gün Kapasite • TSE &amp; BVQİ ISO 9001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
