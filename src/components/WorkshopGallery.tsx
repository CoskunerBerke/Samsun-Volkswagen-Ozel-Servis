import React from 'react';

const photos = [
  {
    src: '/yilro/slide1.jpg',
    title: 'Samsun Tekkeköy OSB Merkez Fabrikamız',
    subtitle: 'Vali M. Erdoğan Cebeci Bulvarı No: 47 • 4.000 m² Kapalı Alan',
  },
  {
    src: '/yilro/slide2.jpg',
    title: 'Zengin Kumaş ve Renk Kartelası',
    subtitle: 'Etek, ceket, yelek, bluz, elbise ve pantolon koleksiyon kumaşları',
  },
  {
    src: '/yilro/parallax_pro.jpg',
    title: 'Yüksek Kaliteli İplik & Dokuma Hammaddeleri',
    subtitle: 'Avrupa ihracat standartlarında hammadde ve aksesuar kullanımı',
  },
  {
    src: '/yilro/slide3.jpg',
    title: 'Hassas Kalıp ve %100 Ölçü Kontrolü',
    subtitle: 'TSE ve BVQİ ISO 9001 Kalite Güvence Sistemi standartlarında denetim',
  },
];

export const WorkshopGallery: React.FC = () => {
  return (
    <section id="tesis" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
              FABRİKA &amp; ÜRETİM GALERİSİ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Tesisimizden ve Üretim Sürecimizden Kareler
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Samsun Organize Sanayi Bölgesi&apos;ndeki 4.000 m² fabrikamız, kumaş hazırlık ve kalite kontrol süreçlerimiz.
          </p>
        </div>

        {/* Clean 2x2 Photo Grid with Cross-Browser aspect-[16/10] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-blue-400 transition-colors"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  {photo.title}
                </h3>
                <p className="text-slate-600 text-sm">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
