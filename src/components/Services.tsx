import React from 'react';
import { Scissors, Layers, Sparkles, Shirt, CheckCircle2, PackageCheck } from 'lucide-react';

const productItems = [
  {
    icon: Shirt,
    title: 'Bayan Ceket & Blazer Üretimi',
    status: 'BANTTA',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    description:
      'Astarlı kruvaze ceket, klasik ofis blazer ve mevsimlik dokuma bayan ceket modellerinde Avrupa standartlarında seri üretim.',
    tags: ['Astarlı Ceket', 'Blazer Koleksiyon', 'İhracat Kalitesi'],
  },
  {
    icon: Sparkles,
    title: 'Bayan Elbise Grubu',
    status: 'BANTTA',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    description:
      'Viskon, şifon, poplin ve dokuma kumaşlardan günlük, kurumsal ve sezonluk bayan elbise koleksiyonlarının dikimi.',
    tags: ['Sezonluk Elbise', 'Dokuma & Viskon', 'Seri Bant Üretimi'],
  },
  {
    icon: Layers,
    title: 'Bayan Pantolon Üretimi',
    status: 'BANTTA',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    description:
      'Yüksek bel kumaş pantolon, klasik kesim, palazzo ve cigarette pantolon modellerinde hassas kalıp ve ölçü kontrolü.',
    tags: ['Kumaş Pantolon', 'Klasik & Palazzo', 'Hassas Kalıp'],
  },
  {
    icon: Scissors,
    title: 'Bayan Etek Koleksiyonu',
    status: 'SEVK',
    statusColor: 'text-slate-700 bg-slate-100 border-slate-300',
    description:
      'Kalem etek, pliseli, A-kesim ve astarlı bayan etek modellerinde yüksek dikiş kalitesi ve zamanında sevkiyat.',
    tags: ['Kalem & Pliseli Etek', 'Astarlı Dikim', 'Avrupa Sevkiyat'],
  },
  {
    icon: Sparkles,
    title: 'Bayan Bluz & Gömlek Grubu',
    status: 'GELECEK',
    statusColor: 'text-red-700 bg-red-50 border-red-200',
    description:
      'İnce dokuma, şifon, saten ve pamuklu kumaşlardan zarif kesimli bayan bluz ve gömlek koleksiyonu imalatı.',
    tags: ['Dokuma Bluz', 'Bayan Gömlek', 'Özel İşçilik'],
  },
  {
    icon: PackageCheck,
    title: 'Bayan Yelek & Takım Kombinleri',
    status: 'SEVK',
    statusColor: 'text-slate-700 bg-slate-100 border-slate-300',
    description:
      'Ceket, pantolon ve etek gruplarını tamamlayan astarlı kumaş yelekler ve ikili/üçlü bayan takım üretimi.',
    tags: ['Astarlı Yelek', 'İkili & Üçlü Takım', 'Askılı Paketleme'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="urunler" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
              BAYAN KONFEKSİYON ÜRÜNLERİMİZ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              İmal Ettiğimiz Başlıca Ürün Grupları
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Üretim durum ifadeleri: Yeşil <strong className="text-emerald-700">BANTTA</strong>, Kırmızı <strong className="text-red-600">GELECEK</strong>, Gri <strong className="text-slate-600">SEVK</strong> durumunu gösterir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200"
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
