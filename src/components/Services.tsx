import React from 'react';
import { Wrench, Cog, Cpu, Gauge, Disc, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      badge: 'Periyodik Bakım',
      title: 'Periyodik Bakım & Filtre Değişimi',
      desc: 'VW 504.00 / 507.00 onaylı motor yağları ve orijinal filtre setleri ile garantili periyodik bakım işlemleri.',
      tags: ['Yağ & Filtre', 'Sıvı Kontrolü', 'Servis Sıfırlama'],
    },
    {
      icon: Cog,
      badge: 'Şanzıman Uzmanlığı',
      title: 'DSG Şanzıman, Kavrama & Mekatronik',
      desc: 'DQ200 7 ileri kuru ve ıslak tip DSG şanzımanlarda kavrama değişimi, mekatronik kart onarımı ve temel ayar.',
      tags: ['Kavrama Seti', 'Mekatronik', 'DSG Adaptasyon'],
    },
    {
      icon: Cpu,
      badge: 'Elektronik Teşhis',
      title: 'ODIS Bilgisayarlı Arıza Tespiti',
      desc: 'VAG grubu orijinal diyagnostik cihazı ile arıza kodu okuma, DPF rejenerasyonu, enjektör ve sensör testleri.',
      tags: ['ODIS Diyagnostik', 'DPF & EGR', 'Gizli Özellik & Kodlama'],
    },
    {
      icon: Gauge,
      badge: 'Motor Mekanik',
      title: 'TSI / TDI Motor & Triger Bakımı',
      desc: 'Triger kayışı ve zincir seti değişimi, devirdaim pompası, turbo revizyonu ve komple motor yenileme.',
      tags: ['Triger & Devirdaim', 'TSI / TDI Motor', 'Turbo & Soğutma'],
    },
    {
      icon: Disc,
      badge: 'Alt Takım & Güvenlik',
      title: 'Fren, Süspansiyon & Ön Takım',
      desc: 'Fren diski ve balata değişimi, amortisör, salıncak burçları, aks ve direksiyon kutusu onarım işlemleri.',
      tags: ['Fren Disk & Balata', 'Amortisör', 'Ön Takım'],
    },
    {
      icon: Truck,
      badge: 'Ticari Araç Servisi',
      title: 'Caddy, Transporter & Crafter Bakımı',
      desc: 'Volkswagen Ticari araçlarınızın ağır hizmet periyodik bakımları, debriyaj, volant ve yürür aksam onarımı.',
      tags: ['VW Caddy', 'Transporter T5/T6', 'Crafter'],
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full mb-3">
            SERVİS HİZMETLERİMİZ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Volkswagen & VAG Grubu Uzman Çözümlerimiz
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Aracınızın mekanik, elektronik ve periyodik tüm ihtiyaçları için tek noktada profesyonel servis.
          </p>
        </div>

        {/* 3-Column Clean Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-sky-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
