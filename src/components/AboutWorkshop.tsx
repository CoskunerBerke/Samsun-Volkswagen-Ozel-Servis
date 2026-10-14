import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const mainCategories = [
  { name: '1. KUZİNELER', role: 'Marifetli, Majolik, Emaye & Pik Tuğlalı' },
  { name: '2. DÖKÜM TUĞLALI', role: 'Geniş Fırınlı, Turbo & Şömineli Sobalar' },
  { name: '3. KOVALI SOBALAR', role: 'Dört Köşe, Panelli & Alttan/Önden Havalı' },
  { name: '4. IZGARALI SOBALAR', role: 'Yüksek Verimli 1040-A Izgaralı Serisi' },
];

export const AboutWorkshop: React.FC = () => {
  return (
    <section id="kurumsal" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
              KURUMSAL KİMLİK, MİSYONUMUZ &amp; PATENTLİ TEKNOLOJİMİZ
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Kalite, Güven ve Dürüstlük İlkeleriyle Soba İmalatı
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg self-start md:self-auto">
            Samsun OSB Fabrika • Gülsan Sanayi Merkez
          </span>
        </div>

        {/* 4 Clean Category Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {mainCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="font-display text-sm font-bold text-slate-900">{cat.name}</div>
              <div className="text-xs font-medium text-slate-600 mt-1">{cat.role}</div>
            </div>
          ))}
        </div>

        {/* Clean 2-Column Corporate Summary + Real Patented Product Showcase */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
              <CheckCircle2 className="w-4 h-4" />
              Tescilli &amp; Patentli Üretim (Patent No: TR201001761)
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Misyonumuz ve Üretim Anlayışımız
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Kestek Soba Sanayii</strong> olarak misyonumuz; <strong className="text-slate-900">Kalite, Güven ve Dürüstlük</strong> ilkelerine bağlı en kaliteli sobaları üretmektir. Bu amaçla teknolojiyi yakından takip etmekte ve yenilikleri ürünlerimize yansıtarak tam müşteri memnuniyeti sağlamaktayız.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Samsun Kirazlık Organize Sanayi Bölgesi&apos;ndeki fabrikamız ve Canik Gülsan Sanayi Sitesi&apos;ndeki merkezimizden Türkiye&apos;nin dört bir yanındaki bayilerimize; <strong className="text-slate-900">kuzineler, ızgaralı sobalar, kovalı sobalar ve döküm tuğlalı şömineli sobalar</strong> sevk ediyoruz.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/kestek/slide1.jpg"
              alt="Kestek Soba Patentli Marifetli Kuzine TR201001761"
              className="w-full h-56 sm:h-64 object-contain bg-white rounded-xl border border-slate-200 p-3 shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
