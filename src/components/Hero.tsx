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
        poster="/kestek/banner1.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none"
      >
        <source src="/kestek/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Clean High-Contrast Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

      {/* Clean Uncluttered Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Kalite, güven ve dürüstlük ilkeleriyle{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-red-400 bg-clip-text text-transparent">
              yüksek verimli soba ve kuzine imalatı
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            <strong className="text-white">Kestek Soba Sanayii</strong> güvencesiyle Samsun Organize Sanayi Bölgesi fabrikamızda; patentli <strong className="text-white">Marifetli Kuzine</strong>, majolik ve emaye kuzineler, döküm tuğlalı şömineli sobalar, kovalı ve ızgaralı soba modelleri üretiyoruz.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <span>Ürün Gruplarımızı İncele</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 bg-slate-900/75 hover:bg-slate-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <span>Sipariş &amp; Bayilik Başvurusu</span>
            </a>

            <a
              href="tel:+903622667670"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>0362 266 76 70</span>
            </a>
          </div>

          {/* Single-Line Trust Footnote */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Patentli Üretim (TR201001761) • Samsun OSB Fabrika &amp; Gülsan Sanayi Merkez • Türkiye Geneli Toptan Sevkiyat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
