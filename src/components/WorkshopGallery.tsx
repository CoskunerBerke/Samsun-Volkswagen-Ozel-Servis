import React, { useState } from 'react';
import { Film, Play, X, Sparkles } from 'lucide-react';

const galleryPhotos = [
  {
    src: '/yilro/slide1.jpg',
    title: 'Samsun Tekkeköy OSB 4.000 m² Merkez Fabrikamız',
    subtitle: 'Vali M. Erdoğan Cebeci Bulvarı No: 47 • 200 Kişilik İstihdam',
  },
  {
    src: '/yilro/slide2.jpg',
    title: 'Zengin Dokuma Kumaş & Koleksiyon Kartelası',
    subtitle: 'Avrupa moda standartlarına uygun tekstil ve hammadde seçimi',
  },
  {
    src: '/yilro/parallax_pro.jpg',
    title: 'Yüksek Kaliteli İplik & Kumaş Tedarik Zinciri',
    subtitle: 'Etek, ceket, yelek, bluz, elbise ve pantolon gruplarında birinci sınıf dokuma',
  },
  {
    src: '/yilro/slide3.jpg',
    title: 'Modelhane, Kalıp & %100 Ölçü Kontrolü',
    subtitle: 'ISO 9001:2000 standartlarında hassas kalıp ve dikim denetimi',
  },
];

export const WorkshopGallery: React.FC = () => {
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);

  return (
    <section id="tesis" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-widest mb-2">
              <Film className="w-4 h-4" />
              <span>YILRO&apos;DA BİR GÜN • VİDEO &amp; RESİM GALERİSİ</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Şirketimizde Bir Gün Nasıl Geçiyor?
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            4.000 m² entegre tesisimizde kesimden son ütü ve ihracat paketlemeye kadar günlük 2.500 adet üretim temposu.
          </p>
        </div>

        {/* Dual Video Showcase Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left: Continuous Local Production Video Reel */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg min-h-[320px] sm:min-h-[380px] flex items-end">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/yilro/slide1.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/yilro/factory-reel.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
            <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-sky-500 text-slate-950 px-2.5 py-1 rounded-md mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  CANLI BANT &amp; MODELHANE AKIŞI
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  200 Kişilik Uzman Kadro ile Kesintisiz Konfeksiyon
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Kesim, dikim, ütü ve paketleme hatlarımızda uluslararası kalite standartları.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Official "Yılro'da Bir Gün" Corporate Documentary Card */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/yilro/img5.png"
                  alt="Yılro'da Bir Gün İkon"
                  className="w-12 h-12 object-contain bg-white/10 p-2 rounded-xl"
                />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    KURUMSAL TANITIM FİLMİ
                  </div>
                  <div className="font-display text-xl font-bold text-white">
                    YILRO&apos;DA BİR GÜN
                  </div>
                </div>
              </div>

              <h4 className="font-display text-lg font-bold text-slate-100 mb-2">
                Şirketimizde Bir Gün Nasıl Geçiyor?
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Samsun Organize Sanayi Bölgesi&apos;ndeki fabrikamızın çalışma ortamını, üretim bantlarımızı, sosyal etkinliklerimizi ve kalite kontrol süreçlerimizi kurumsal tanıtım videomuzdan izleyebilirsiniz.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowYoutubeModal(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-4 px-5 rounded-xl text-sm transition-colors cursor-pointer shadow-md"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>&ldquo;Yılro&apos;da Bir Gün&rdquo; Tanıtım Filmini İzle</span>
              </button>
              <div className="text-[11px] text-slate-400 text-center">
                Sürekli güncellenen üretim ve etkinlik galerimizi aşağıdan inceleyebilirsiniz.
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.title}
              className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:border-sky-400 transition-colors"
            >
              <div className="aspect-16/9 w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  {photo.title}
                </h3>
                <p className="text-slate-600 text-sm">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Official "Yılro'da Bir Gün" Video (YouTube ID BYo9QyYD9wI) */}
      {showYoutubeModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowYoutubeModal(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <div className="font-display font-bold text-white text-base">
                Yılro&apos;da Bir Gün — Şirketimizde Bir Gün Nasıl Geçiyor
              </div>
              <button
                onClick={() => setShowYoutubeModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                title="Yılro'da Bir Gün"
                src="https://www.youtube.com/embed/BYo9QyYD9wI?autoplay=1"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
