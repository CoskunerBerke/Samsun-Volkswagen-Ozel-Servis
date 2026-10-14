import React from 'react';

const photos = [
  {
    src: '/kestek/banner1.jpg',
    title: 'Camlı Üstten Yanmalı Pik Tuğlalı Kuzine',
    subtitle: 'Yüksek ısı verimli, seramik camlı ve geniş fırınlı pik tuğlalı kuzine',
  },
  {
    src: '/kestek/banner2.jpg',
    title: '1003-A Majolik Geniş Fırın Döküm Tuğlalı',
    subtitle: 'Dayanıklı döküm ızgara ve ateş tuğlası sistemiyle uzun ömürlü kullanım',
  },
  {
    src: '/kestek/banner3.jpg',
    title: 'Yeni Dik Camlı Döküm Tuğlalı Soba',
    subtitle: 'Özel iç döküm ızgara haznesi ve ısıya dayanıklı ön izleme camı',
  },
  {
    src: '/kestek/banner4.jpg',
    title: 'Yeni Şömineli Soba Modelimiz',
    subtitle: 'Geniş şömine camı, sağlam döküm ızgara ve yüksek ısıtma performansı',
  },
];

export const WorkshopGallery: React.FC = () => {
  return (
    <section id="tesis" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
              ÖNE ÇIKAN MODELLERİMİZ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Kuzine, Şömineli ve Döküm Tuğlalı Soba Modellerimiz
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Samsun OSB fabrikamızda üretilen yüksek verimli soba ve kuzine serilerimizden örnekler.
          </p>
        </div>

        {/* Clean 2x2 Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-red-400 transition-colors"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-white p-3 flex items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 border-t border-slate-100">
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
