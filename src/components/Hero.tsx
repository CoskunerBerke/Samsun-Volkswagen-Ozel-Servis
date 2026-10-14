import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import VwLogo from './VwLogo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/vw/vw-service.jpg"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/vw/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <VwLogo className="w-4 h-4 text-sky-400" />
            <span>Samsun 19 Mayıs Sanayi Sitesi • VAG Grubu Uzmanlığı</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Samsun Volkswagen{' '}
            <span className="text-sky-400">Özel Servis</span> & Yedek Parça
          </h1>

          {/* Short Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Volkswagen, Audi, Seat ve Škoda araçlarınız için ODIS bilgisayarlı arıza tespiti,
            DSG şanzıman onarımı, garantili periyodik bakım ve orijinal yedek parça hizmeti sunuyoruz.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="tel:+905444775657"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-sky-500/25"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Ara: 0544 477 56 57</span>
            </a>

            <a
              href="https://wa.me/905444775657?text=Merhaba,%20Samsun%20Volkswagen%20%C3%96zel%20Servis%20i%C3%A7in%20fiyat%20ve%20randevu%20bilgisi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Servis Hattı</span>
            </a>

            <a
              href="https://maps.app.goo.gl/kLAzCUYKyzsqo8X88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-base border border-white/10 backdrop-blur-md transition-all"
            >
              <MapPin className="w-5 h-5 text-sky-400" />
              <span>Yol Tarifi Al</span>
            </a>
          </div>

          {/* 1-Line Trust Note */}
          <div className="flex items-center gap-2.5 text-sm text-slate-300 border-t border-white/10 pt-5">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              Şabanoğlu Mah. 19 Mayıs Sanayi Sitesi 59. Sokak No:38 Tekkeköy / Samsun • Orijinal OEM Parça & Garantili İşçilik
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
