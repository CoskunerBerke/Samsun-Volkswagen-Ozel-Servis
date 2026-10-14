import React from 'react';
import { Award, CheckCircle2, Scissors, Layers, Sparkles, PackageCheck, Globe2 } from 'lucide-react';

const productionDepartments = [
  {
    step: '01',
    title: 'Modelhane & Otomatik Kesim',
    desc: 'Avrupa ve yurt içi koleksiyon kalıplarının CAD/CAM sistemlerinde pastal planlaması, kumaş serimi ve yüksek hassasiyetli kesim süreci.',
    icon: Scissors,
  },
  {
    step: '02',
    title: 'Bant & Konfeksiyon Dikim Hatları',
    desc: '200 kişilik uzman üretim kadromuz ve modern makine parkurumuzla etek, ceket, yelek, bluz, elbise ve pantolon bantlarında seri üretim.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Ara Ütü, Son Ütü & Kalite Kontrol',
    desc: 'ISO 9001 Kalite Güvence Sistemi kapsamında her ürünün ölçü, dikiş ve form standartlarına uygunluğunun %100 kontrol edilmesi.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Paketleme & Uluslararası Sevkiyat',
    desc: 'Müşteri talebine göre askılı veya kolili ihracat paketlemesi, barkodlama ve Hollanda başta olmak üzere dünya pazarlarına zamanında sevkiyat.',
    icon: PackageCheck,
  },
];

export const AboutWorkshop: React.FC = () => {
  return (
    <section id="kurumsal" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Corporate Story & Real Samsun OSB Factory Building */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-4 h-4" />
              <span>1980 Hollanda • 1989 Samsun Organize Sanayi Bölgesi</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Yılro İnternasyonal Giyim San. ve Tic. Ltd. Şti. Hakkında
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900">1980 yılında Hollanda&apos;da</strong> kurulan <strong className="text-slate-900">Yılro Tekstil</strong>, uluslararası hazır giyim tecrübesini Türkiye&apos;ye taşıyarak <strong className="text-slate-900">1989 yılında Türkiye&apos;deki ilk şubesini Samsun&apos;da</strong> açmıştır.
              </p>
              <p>
                Samsun Tekkeköy Organize Sanayi Bölgesi&apos;nde yer alan fabrika binamız <strong className="text-slate-900">4.000 m² kapalı alan</strong> üzerine kurulmuş olup bünyesinde <strong className="text-slate-900">200 personele</strong> istihdam sağlamaktadır. Firmamızın ana faaliyet konusu <strong className="text-slate-900">bayan konfeksiyonudur</strong>. İmal ettiğimiz ürünler başlıca; <strong className="text-slate-900">etek, ceket, yelek, bluz, elbise ve pantolondur</strong>.
              </p>
              <p>
                Üretim kapasitemiz <strong className="text-slate-900">2.500 adet / gün</strong>&apos;dür. Üretimimiz başlıca <strong className="text-slate-900">kesim, dikim, ütü ve paket</strong> ana kategorilerinden oluşmaktadır. Müşteri memnuniyetini esas alan kaliteli üretim ve hizmeti zamanında sunmak ana politikamızdır. Uluslararası standartların belirlediği şartlarda üretim yapmak ve dünya piyasalarında rekabet etmek temel ilkemizdir.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>4.000 m² Kapalı Fabrika</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>200 Uzman Çalışan</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2.500 Adet / Gün Kapasite</span>
              </div>
            </div>
          </div>

          {/* Right: Real Factory Exterior & Textile Visuals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/yilro/slide1.jpg"
                alt="Yılro İnternasyonal Giyim Samsun OSB Fabrika Binası"
                className="w-full h-60 sm:h-68 object-cover"
              />
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-slate-900 text-sm">
                    Samsun Tekkeköy OSB Merkez Fabrikamız
                  </div>
                  <div className="text-xs text-slate-500">
                    Vali M. Erdoğan Cebeci Bulvarı No: 47 • 4.000 m² Kapalı Alan
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-md">
                  1989&apos;dan Beri
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-28 relative">
                <img
                  src="/yilro/slide2.jpg"
                  alt="Zengin Kumaş ve Renk Kartelası"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white">Kumaş &amp; Koleksiyon Çeşitliliği</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-28 relative">
                <img
                  src="/yilro/slide3.jpg"
                  alt="Hassas Kalıp ve Ölçü Standartları"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white">Avrupa Kalıp Standartları</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: 4 Core Production Stages (Kesim, Dikim, Ütü, Paket) */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700 mb-1">
              ENTEGRE KONFEKSİYON SÜRECİMİZ
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Kesim, Dikim, Ütü ve Paketleme Ana Kategorilerimiz
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {productionDepartments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.step}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-sky-400 transition-colors relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-2xl font-extrabold text-slate-300">
                      {dept.step}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 mb-2">
                    {dept.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 3: Official Certificates (TSE & BVQİ ISO 9001) */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>ULUSLARARASI KALİTE GÜVENCE SİSTEMİ</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                TSE &amp; BVQİ ISO 9001 Kalite Sertifikalarımız
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                &ldquo;Dürüstlük, doğruluk ve disiplinli çalışma ışığında üretim ve hizmetin kalitesinden tüm çalışanlar sorumludur&rdquo; ilkesinden hareketle fabrikamızda uluslararası onaylı Kalite Güvence Sistemi uygulanmaktadır.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* TSE Certificate Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4">
                <div className="w-20 h-16 bg-white rounded-lg p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/yilro/cert_tse.jpg"
                    alt="TSE ISO 9001:2000"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">TSE</div>
                  <div className="text-xs font-semibold text-sky-400">ISO 9001:2000</div>
                  <div className="text-xs text-slate-400 mt-0.5">2006 Aralık – Bugüne</div>
                </div>
              </div>

              {/* BVQI Certificate Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4">
                <div className="w-20 h-16 bg-white rounded-lg p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/yilro/cert_bvqi.jpg"
                    alt="BVQİ ISO 9001"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">BVQİ</div>
                  <div className="text-xs font-semibold text-sky-400">ISO 9001 (94 Revizyonu)</div>
                  <div className="text-xs text-slate-400 mt-0.5">Uluslararası Kalite Belgesi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
