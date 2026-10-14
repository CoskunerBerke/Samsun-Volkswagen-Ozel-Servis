import React from 'react';
import { Flame, ShieldCheck, Sparkles, Layers, Box, CheckCircle2 } from 'lucide-react';

const productGroups = [
  {
    icon: Flame,
    title: 'Marifetli & Majolik Kuzineler',
    badge: 'PATENTLİ SERİ',
    description:
      'Patentli 2011 Marifetli Kuzine (TR201001761), 1036 / 1036-A / 1036-B Majolik Kovalı Kuzine ve 1003-C Majolik Döküm Tuğlalı Kuzine modelleri.',
    tags: ['2011 Marifetli Kuzine', '1036 Majolik Serisi', 'Geniş Fırınlı'],
  },
  {
    icon: ShieldCheck,
    title: 'Pik Tuğlalı & Emaye Kuzineler',
    badge: 'KUZİNELER',
    description:
      'Camlı Üstten Yanmalı Pik Tuğlalı Kuzine, 1001 Pik Tuğlalı, 1002 Kovalı, 1004 & 1015 Emaye, 1016 Beyaz ve Nikelaj Kayaklı Pikli Kuzine.',
    tags: ['Üstten Yanmalı', '1015 Emaye & 1016 Beyaz', 'Pik Tuğlalı'],
  },
  {
    icon: Sparkles,
    title: 'Döküm Tuğlalı & Turbo Sobalar',
    badge: 'DÖKÜM TUĞLALI',
    description:
      'Yüksek ısı verimli 1003-A Majolik Geniş Fırın, 1034-A Turbo Döküm Tuğlalı ve 1034-B Turbo Döküm Sobalı uzun ömürlü ısıtma modelleri.',
    tags: ['1003-A Majolik', '1034-A / 1034-B Turbo', 'Döküm Tuğla'],
  },
  {
    icon: Flame,
    title: 'Yeni Şömineli & Dik Camlı Sobalar',
    badge: 'ŞÖMİNELİ SERİ',
    description:
      'Isıya dayanıklı seramik camlı Yeni Şömineli Soba ve 2013 Yeni Dik Camlı Soba modelleriyle salonlarda şömine keyfi ve yüksek ısı gücü.',
    tags: ['Yeni Şömineli Soba', 'Yeni Dik Camlı Soba', 'Isıya Dayanıklı Cam'],
  },
  {
    icon: Box,
    title: 'Kovalı & Dört Köşe Sobalar',
    badge: 'KOVALI SOBA',
    description:
      '2012 Marifetli Dört Köşe Alttan ve Önden Havalı Soba, 1005 Lüx Dört Köşe, 1007 / 1007-A Panelli, 1040 Kovalı Odun Sobası ve 1052 Kovalı Soba.',
    tags: ['2012 Marifetli Dört Köşe', '1005 Lüx & 1007 Panelli', '1040 & 1052 Kovalı'],
  },
  {
    icon: Layers,
    title: 'Izgaralı Sobalar & Yedek Parça',
    badge: 'IZGARALI SOBA',
    description:
      '1040-A Yüksek Verimli Izgaralı Soba serisi ve tüm Kestek Soba modelleri için orijinal döküm ızgara, ateş tuğlası, kova ve tepsi ekipmanları.',
    tags: ['1040-A Izgaralı Soba', 'Döküm Izgara', 'Orijinal Ekipman'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="urunler" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
              ÜRÜN GRUPLARIMIZ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Kuzineler, Döküm Tuğlalı, Kovalı ve Izgaralı Sobalar
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Yüksek ısı verimliliği, yakıt tasarrufu ve uzun ömürlü döküm/emaye kalitesiyle üretilen başlıca soba ve kuzine modellerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productGroups.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-red-400 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-600 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200">
                      {item.badge}
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
