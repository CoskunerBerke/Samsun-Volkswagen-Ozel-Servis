import React from 'react';
import { ShieldCheck, Cpu, Wrench, Award } from 'lucide-react';

const AboutWorkshop: React.FC = () => {
  const summaryCards = [
    {
      icon: Cpu,
      title: 'ODIS Arıza Tespiti',
      desc: 'Volkswagen grubu orijinal test cihazları ile nokta atışı elektronik ve mekanik teşhis.',
    },
    {
      icon: Wrench,
      title: 'DSG & Motor Uzmanlığı',
      desc: 'TSI / TDI motor revizyonu, triger seti değişimi, DSG mekatronik ve kavrama onarımı.',
    },
    {
      icon: ShieldCheck,
      title: 'Orijinal & OEM Parça',
      desc: 'Aracınızın performansını ve değerini koruyan logolu orijinal ve Alman OEM yedek parçalar.',
    },
    {
      icon: Award,
      title: 'Şeffaf & Garantili Hizmet',
      desc: 'İşlem öncesi net bilgilendirme, değişen parça ibrazı ve tüm bakımlarda servis garantisi.',
    },
  ];

  return (
    <section id="kurumsal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Corporate Info */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full mb-4">
              KURUMSAL SERVİS MERKEZİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Alman Mühendisliğine Uygun Profesyonel Özel Servis
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              <strong>Samsun Volkswagen Özel Servis</strong> olarak Tekkeköy 19 Mayıs Sanayi Sitesi’ndeki
              modern servisimizde Volkswagen Binek, Volkswagen Ticari, Audi, Seat ve Škoda marka araçlara
              yetkili servis standartlarında bakım, onarım ve yedek parça hizmeti sunuyoruz.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Periyodik yağ ve filtre bakımından DSG şanzıman revizyonuna, bilgisayarlı kodlamadan ağır
              motor mekanik işlemlerine kadar tüm süreçler uzman teknisyen kadromuz tarafından titizlikle
              yürütülmektedir.
            </p>

            {/* Brand Pills */}
            <div className="flex flex-wrap gap-2.5">
              {['Volkswagen Binek', 'VW Ticari (Caddy / Transporter / Crafter)', 'Audi', 'Seat', 'Škoda'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column: Real Workshop Photo */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src="/vw/vw-service.jpg"
                alt="Samsun Volkswagen Özel Servis Atölyesi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 text-white text-sm">
              <span className="font-semibold">19 Mayıs Sanayi Sitesi • 59. Sokak No:38</span>
              <span className="text-sky-400 font-bold">Tekkeköy / Samsun</span>
            </div>
          </div>
        </div>

        {/* 4 Clean Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {summaryCards.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;
