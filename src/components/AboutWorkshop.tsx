import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const productionStages = [
  { name: '1. KESİM', role: 'Modelhane, Kalıp & Otomatik Kesim' },
  { name: '2. DİKİM', role: '200 Kişilik Modern Konfeksiyon Bantları' },
  { name: '3. ÜTÜ & KONTROL', role: 'Ara Ütü, Son Ütü & %100 Kalite Kontrol' },
  { name: '4. PAKET & SEVK', role: 'Askılı / Kolili Uluslararası Sevkiyat' },
];

export const AboutWorkshop: React.FC = () => {
  return (
    <section id="kurumsal" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-1">
              KURUMSAL KİMLİK, ÜRETİM KAPASİTESİ &amp; SERTİFİKALARIMIZ
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              1980&apos;den Bugüne Uluslararası Bayan Konfeksiyon İmalatı
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg self-start md:self-auto">
            Samsun Tekkeköy OSB • 4.000 m² Fabrika
          </span>
        </div>

        {/* 4 Clean Production Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {productionStages.map((stage) => (
            <div
              key={stage.name}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="font-display text-sm font-bold text-slate-900">{stage.name}</div>
              <div className="text-xs font-medium text-slate-600 mt-1">{stage.role}</div>
            </div>
          ))}
        </div>

        {/* Clean 2-Column Corporate Summary + Real Factory & Certificates */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
              <CheckCircle2 className="w-4 h-4" />
              1980 Hollanda Kuruluş • 1989 Samsun OSB Fabrika
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Günlük 2.500 Adet Üretim Kapasitesi ve ISO 9001 Kalite Güvencesi
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              1980 yılında Hollanda&apos;da kurulan <strong className="text-slate-900">Yılro Tekstil</strong>, 1989 yılında Türkiye&apos;deki ilk şubesini Samsun&apos;da açmıştır. Fabrika binamız <strong className="text-slate-900">4.000 m² kapalı alan</strong> üzerine kurulmuş olup bünyesinde <strong className="text-slate-900">200 personele</strong> istihdam sağlamaktadır. Ana faaliyet konumuz bayan konfeksiyonudur; başlıca <strong className="text-slate-900">etek, ceket, yelek, bluz, elbise ve pantolon</strong> üretmekteyiz.
            </p>

            {/* Official Certificates Row */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                <img
                  src="/yilro/cert_tse.jpg"
                  alt="TSE ISO 9001:2000"
                  className="w-14 h-11 object-contain shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-slate-900 text-sm">TSE • ISO 9001:2000</div>
                  <div className="text-xs text-slate-500">2006 Aralık – Bugüne</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                <img
                  src="/yilro/cert_bvqi.jpg"
                  alt="BVQİ ISO 9001"
                  className="w-14 h-11 object-contain shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-slate-900 text-sm">BVQİ • ISO 9001</div>
                  <div className="text-xs text-slate-500">Uluslararası Kalite Belgesi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/yilro/slide1.jpg"
              alt="Yılro İnternasyonal Giyim Samsun OSB Fabrika Binası"
              className="w-full h-56 sm:h-64 object-cover bg-white rounded-xl border border-slate-200 shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
