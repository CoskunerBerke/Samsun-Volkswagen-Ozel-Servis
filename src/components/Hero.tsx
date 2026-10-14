import React from 'react';
import { Phone, ArrowRight, CheckCircle2, Play, Building2, Users, Layers, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: '4.000 m²',
      label: 'Kapalı Entegre Fabrika Alanı (Samsun OSB)',
    },
    {
      icon: Users,
      value: '200+ Personel',
      label: 'Uzman Modelhane, Kesim & Dikim Kadrosu',
    },
    {
      icon: Layers,
      value: '2.500 Adet/Gün',
      label: 'Günlük Bayan Konfeksiyon Üretim Kapasitesi',
    },
    {
      icon: ShieldCheck,
      value: 'ISO 9001',
      label: 'TSE & BVQİ Uluslararası Kalite Güvencesi',
    },
  ];

  return (
    <section className="relative min-h-[86vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Full-Screen Continuous Garment & Textile Manufacturing Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/yilro/slide1.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-[1.03] pointer-events-none"
      >
        <source src="/yilro/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* High-Contrast Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/45" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Heritage Pill */}
          <div className="inline-flex items-center gap-2.5 bg-sky-500/15 backdrop-blur-md border border-sky-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              1980 Hollanda • 1989 Samsun • Uluslararası Bayan Konfeksiyon İmalatı
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Avrupa ve dünya pazarlarına{' '}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
              günlük 2.500 adet kapasiteli
            </span>{' '}
            bayan konfeksiyon üretimi
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            1980 yılında Hollanda&apos;da kurulan ve 1989&apos;dan bu yana Samsun Tekkeköy Organize Sanayi Bölgesi&apos;ndeki <strong className="text-white">4.000 m²</strong> kapalı fabrikasında <strong className="text-white">200 personeliyle</strong> faaliyet gösteren <strong className="text-white">Yılro İnternasyonal Giyim San. ve Tic. Ltd. Şti.</strong>; etek, ceket, yelek, bluz, elbise ve pantolon üretiminde uluslararası markaların çözüm ortağıdır.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-sky-500/20"
            >
              <span>Ürün Grupları &amp; Bant Durumu</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tesis"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/25 backdrop-blur-md"
            >
              <Play className="w-4 h-4 fill-sky-400 text-sky-400" />
              <span>Yılro&apos;da Bir Gün (Video)</span>
            </a>

            <a
              href="tel:+903622667170"
              className="inline-flex items-center gap-2 bg-slate-900/75 hover:bg-slate-900 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>+90 362 266 71 70</span>
            </a>
          </div>

          {/* Trust Footnote Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-12">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Kesim • Dikim • Ütü • Paket Entegre Tesis • TSE ISO 9001:2000 &amp; BVQİ Kalite Güvence Sistemi
            </span>
          </div>
        </div>

        {/* Live Factory Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/15">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.value}
                className="bg-slate-900/75 backdrop-blur-md border border-white/15 rounded-xl p-4 flex items-start gap-3.5 hover:border-sky-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
