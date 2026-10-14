import React from 'react';

const AboutWorkshop: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'ODIS Bilgisayarlı Teşhis',
      desc: 'Volkswagen grubu orijinal diyagnostik sistemi ile elektronik ve mekanik arızaları deneme-yanılma yapmadan tespit ediyoruz.',
    },
    {
      num: '02',
      title: 'DSG & Motor Mekanik',
      desc: 'TSI ve TDI motor revizyonları, triger seti değişimi, DSG kavrama ve mekatronik onarımlarında uzman kadroyla çalışıyoruz.',
    },
    {
      num: '03',
      title: 'Orijinal & OEM Yedek Parça',
      desc: 'Bakım ve onarımlarda aracınızın fabrika değerlerini koruyan logolu orijinal ve birinci sınıf Alman OEM parçalar kullanıyoruz.',
    },
    {
      num: '04',
      title: 'Şeffaf Servis Süreci',
      desc: 'Aracınıza yapılacak işlemleri ve parça maliyetini işlem öncesinde net olarak paylaşıyor, onayınız olmadan parça değişimi yapmıyoruz.',
    },
  ];

  return (
    <section id="kurumsal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
              HAKKIMIZDA
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-5">
              Samsun’da Volkswagen Grubu Araçlar İçin Güvenilir Özel Servis
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              Tekkeköy 19 Mayıs Sanayi Sitesi 59. Sokak’ta yer alan servisimizde; Volkswagen Binek,
              Volkswagen Ticari (Caddy, Transporter, Crafter), Audi, Seat ve Škoda marka araçların
              periyodik bakım, mekanik onarım ve yedek parça ihtiyaçlarını karşılıyoruz.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-6">
              Yetkili servis standartlarındaki ekipman altyapımız ve sadece VAG grubu araçlar
              üzerine odaklanmış ustalarımızla aracınızın değerini koruyan çözümler üretiyoruz.
            </p>

            <div className="border-t border-zinc-200 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="block font-bold text-zinc-900">Volkswagen</span>
                <span className="text-zinc-500 text-xs">Binek & Ticari</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Audi</span>
                <span className="text-zinc-500 text-xs">TFSI & TDI Serisi</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Seat</span>
                <span className="text-zinc-500 text-xs">Leon, Ibiza, Ateca</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Škoda</span>
                <span className="text-zinc-500 text-xs">Octavia, Superb, Kamiq</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
              <img
                src="/vw/vw-service.jpg"
                alt="Samsun Volkswagen Özel Servis Atölyesi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Numbered Architectural Columns (No AI Icon Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-200">
          {pillars.map((item) => (
            <div key={item.num}>
              <span className="block text-xs font-mono font-bold text-zinc-400 mb-2">
                {item.num}
              </span>
              <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;
