import React, { useState } from 'react';
import { CheckCircle2, Clock, Truck, Activity, ArrowUpRight } from 'lucide-react';

type ProductionStatus = 'ALL' | 'BANTTA' | 'GELECEK' | 'SEVK';

interface ApparelProduct {
  id: string;
  code: string;
  title: string;
  category: string;
  status: 'BANTTA' | 'GELECEK' | 'SEVK';
  dailyOutput: string;
  fabricTypes: string;
  description: string;
  destination: string;
}

const apparelCatalog: ApparelProduct[] = [
  {
    id: 'ceket',
    code: 'YLR-CKT-101',
    title: 'Bayan Ceket & Blazer Koleksiyonu',
    category: 'Ceket Grubu',
    status: 'BANTTA',
    dailyOutput: '450 Adet / Gün',
    fabricTypes: 'Krep, Tüvit, Gabardin, Keten Karışım & Astarlı Dokuma',
    description:
      'Kruvaze ve tek düğmeli blazer ceketler, omuz vatkalı tam astarlı kurumsal bayan ceketleri ve Avrupa sonbahar/kış koleksiyon modelleri.',
    destination: 'Hollanda & Almanya İhracat Hattı',
  },
  {
    id: 'elbise',
    code: 'YLR-ELB-204',
    title: 'Bayan Elbise Koleksiyonu',
    category: 'Elbise Grubu',
    status: 'BANTTA',
    dailyOutput: '500 Adet / Gün',
    fabricTypes: 'Viskon, Şifon, Poplin, Saten & Desenli Dokuma',
    description:
      'Günlük, ofis ve sezonluk bayan elbise modelleri. Kuşaklı, piliseli, düğmeli ve astarlı elbise gruplarında yüksek adetli seri bant üretimi.',
    destination: 'Avrupa Mağaza Zincirleri',
  },
  {
    id: 'pantolon',
    code: 'YLR-PNT-309',
    title: 'Bayan Kumaş Pantolon Grubu',
    category: 'Pantolon Grubu',
    status: 'BANTTA',
    dailyOutput: '550 Adet / Gün',
    fabricTypes: 'Likralı Dokuma, Gabardin, İki İplik Kumaş & Krep',
    description:
      'Yüksek bel palazzo, cigarette, klasik düz kesim ve İspanyol paça bayan pantolon imalatı. Otomatik cep ve kemer aparatlarıyla sıfır hata dikiş.',
    destination: 'Hollanda & Belçika Sevkiyat Planı',
  },
  {
    id: 'etek',
    code: 'YLR-ETK-412',
    title: 'Bayan Etek Üretim Serisi',
    category: 'Etek Grubu',
    status: 'SEVK',
    dailyOutput: '400 Adet / Gün',
    fabricTypes: 'Krep, Pliseli Dokuma, Tüvit & Astarlı Kumaş',
    description:
      'Kalem etek, A-kesim, midi boy pliseli ve kruvaze bayan etek modelleri. Kusursuz fermuar, pens ve etek ucu baskı işçiliği.',
    destination: 'Rotterdam / Amsterdam Sevk Edildi',
  },
  {
    id: 'bluz',
    code: 'YLR-BLZ-518',
    title: 'Bayan Bluz & Gömlek Grubu',
    category: 'Bluz Grubu',
    status: 'GELECEK',
    dailyOutput: '400 Adet / Gün',
    fabricTypes: 'İpek Dokuma, Viskon, Şifon, Poplin & Modal',
    description:
      'Fiyonk yaka, hakim yaka, manşet detaylı ve zarif kesimli bayan bluz ile gömlek koleksiyonları. İnce kumaşlarda özel iğne ve dikiş ayarı.',
    destination: 'Yeni Sezon Kesim & Bant Planında',
  },
  {
    id: 'yelek',
    code: 'YLR-YLK-625',
    title: 'Bayan Yelek & Takım Kombinleri',
    category: 'Yelek Grubu',
    status: 'SEVK',
    dailyOutput: '200 Adet / Gün',
    fabricTypes: 'Astarlı Takımlık Kumaş, Keten & Kaşe Karışım',
    description:
      'Pantolon ve etek takımlarını tamamlayan düğmeli cepken yelekler, uzun kolsuz blazer yelekler ve ikili/üçlü bayan takım üretimi.',
    destination: 'Avrupa & Yurt İçi Kurumsal Sevk',
  },
];

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProductionStatus>('ALL');

  const filteredProducts =
    activeFilter === 'ALL'
      ? apparelCatalog
      : apparelCatalog.filter((item) => item.status === activeFilter);

  const getStatusBadge = (status: 'BANTTA' | 'GELECEK' | 'SEVK') => {
    switch (status) {
      case 'BANTTA':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-[#3eda00]/15 text-emerald-800 border border-[#3eda00]/50">
            <span className="w-2 h-2 rounded-full bg-[#3eda00] animate-ping" />
            BANTTA (ÜRETİMDE)
          </span>
        );
      case 'GELECEK':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-[#ff0208]/10 text-red-700 border border-[#ff0208]/35">
            <Clock className="w-3.5 h-3.5 text-[#ff0208]" />
            GELECEK (PLANLAMADA)
          </span>
        );
      case 'SEVK':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-slate-200 text-slate-700 border border-slate-300">
            <Truck className="w-3.5 h-3.5 text-[#7a7a7a]" />
            SEVK (TESLİM EDİLDİ)
          </span>
        );
    }
  };

  return (
    <section id="urunler" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Yılro Live Production Status Legend */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-widest mb-2">
              <Activity className="w-4 h-4" />
              <span>BAYAN KONFEKSİYON ÜRÜNLERİMİZ &amp; CANLI ÜRETİM DURUMU</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              İmal Ettiğimiz Başlıca Ürün Grupları
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Üretim durum ifadeleri; Yeşil renk{' '}
              <strong className="text-emerald-700">&ldquo;BANTTA&rdquo;</strong>, Kırmızı renk{' '}
              <strong className="text-red-600">&ldquo;GELECEK&rdquo;</strong>, Gri renk{' '}
              <strong className="text-slate-600">&ldquo;SEVK&rdquo;</strong> durumunda olduğunu ifade etmektedir.
            </p>
          </div>

          {/* Filter Tabs (Tümü / Bantta / Gelecek / Sevk) */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs self-start lg:self-auto">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeFilter === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Tümü (6 Grup)
            </button>
            <button
              onClick={() => setActiveFilter('BANTTA')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeFilter === 'BANTTA'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#3eda00]" />
              Bantta
            </button>
            <button
              onClick={() => setActiveFilter('GELECEK')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeFilter === 'GELECEK'
                  ? 'bg-red-600 text-white'
                  : 'text-red-700 hover:bg-red-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff0208]" />
              Gelecek
            </button>
            <button
              onClick={() => setActiveFilter('SEVK')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeFilter === 'SEVK'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#7a7a7a]" />
              Sevk
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    {product.code}
                  </span>
                  {getStatusBadge(product.status)}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  {product.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Bant Kapasitesi:</span>
                  <span className="font-bold text-slate-900">{product.dailyOutput}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-500 font-medium shrink-0">Kumaş Grupları:</span>
                  <span className="font-semibold text-slate-700 text-right">{product.fabricTypes}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-sky-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {product.destination}
                  </span>
                  <a
                    href="#iletisim"
                    className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-sky-600"
                  >
                    <span>Sipariş / Numune</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
