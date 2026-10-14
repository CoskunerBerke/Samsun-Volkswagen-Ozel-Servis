import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Periyodik Bakım & Yağ Değişimi',
      desc: 'VW 504.00 / 507.00 normlarına uygun motor yağları ve orijinal filtre setleri ile periyodik bakım, sıvı kontrolleri ve servis aralığı sıfırlama.',
      detail: 'Motor Yağı • Hava, Polen, Yakıt Filtresi • Genel Kontrol',
    },
    {
      num: '02',
      title: 'DSG Şanzıman, Kavrama & Mekatronik',
      desc: '7 ileri kuru tip (DQ200) ve ıslak tip DSG şanzımanlarda kavrama-volan değişimi, mekatronik basınç tüpü/kart onarımı ve bilgisayarlı temel ayar.',
      detail: 'LUK Kavrama Seti • Mekatronik Onarımı • DSG Kalibrasyon',
    },
    {
      num: '03',
      title: 'ODIS Bilgisayarlı Arıza Tespiti',
      desc: 'Orijinal VAG diyagnostik cihazı ile arıza kodu analizi, DPF partikül filtresi rejenerasyonu, EGR, enjektör ve sensör ölçümleri.',
      detail: 'ODIS Teşhis • DPF / EGR Çözümleri • Elektronik Kodlama',
    },
    {
      num: '04',
      title: 'TSI / TDI Motor & Triger Bakımı',
      desc: 'Triger kayışı ve zincir seti değişimi, devirdaim su pompası, yağ soğutucu, turbo revizyonu ve komple motor mekanik yenileme işlemleri.',
      detail: 'Triger & Devirdaim • Turbo & Enjektör • Motor Revizyon',
    },
    {
      num: '05',
      title: 'Fren, Süspansiyon & Ön Takım',
      desc: 'Fren diski ve balata değişimi, amortisör, salıncak burçları, Z-rot, aks kafası ve direksiyon kutusu boşluk/ses arızalarının giderilmesi.',
      detail: 'Fren Disk & Balata • Amortisör • Ön Takım Aksamı',
    },
    {
      num: '06',
      title: 'Ticari Araç (Caddy, Transporter, Crafter)',
      desc: 'Volkswagen Ticari araçların ağır hizmet periyodik bakımları, baskı-balata, çift kütleli volan ve yürür aksam onarımları.',
      detail: 'VW Caddy • Transporter T5 / T6 • Crafter Servisi',
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
            SERVİS HİZMETLERİMİZ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Atölyemizde Yapılan Başlıca İşlemler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-white rounded-lg p-7 border border-zinc-200 flex flex-col justify-between"
            >
              <div>
                <span className="block text-xs font-mono font-bold text-zinc-400 mb-4">
                  {service.num}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-500">
                {service.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
