import React from 'react';

const WorkshopGallery: React.FC = () => {
  const photos = [
    {
      src: '/vw/vw-service.jpg',
      title: 'Bilgisayarlı Arıza Tespiti & Mekanik Atölye',
      subtitle: 'Modern lift ve ODIS diyagnostik ekipmanlarımız',
    },
    {
      src: '/vw/spare-parts.jpg',
      title: 'Orijinal & OEM Yedek Parça Deposu',
      subtitle: 'Volkswagen, Audi, Seat ve Škoda orijinal yedek parçaları',
    },
    {
      src: '/vw/office-lounge.png',
      title: 'Servis Kabul & Müşteri Danışma',
      subtitle: 'Şeffaf servis planlaması ve detaylı bilgilendirme',
    },
    {
      src: '/vw/waiting-room.png',
      title: 'Konforlu Müşteri Bekleme Alanımız',
      subtitle: 'Aracınızın bakımı yapılırken dinlenebileceğiniz ferah salonumuz',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            SERVİSİMİZDEN KARELER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Donanımlı Atölyemiz & Yedek Parça Merkezimiz
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            19 Mayıs Sanayi Sitesi’nde düzenli, temiz ve tam donanımlı servis alanımız.
          </p>
        </div>

        {/* 2x2 Aspect-[16/10] Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white border-t border-slate-100">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{photo.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
