export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  avatarText: string;
  rating: number;
  productGroup: string;
  content: string;
  highlight: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Karadeniz Isı & Dayanıklı Tüketim',
    role: 'Trabzon • Bölge Bayii',
    avatarText: 'Kİ',
    rating: 5,
    productGroup: 'Marifetli Kuzine (TR201001761)',
    content:
      'Yıllardır Kestek Soba’nın patentli Marifetli Kuzine ve majolik modellerini satıyoruz. Üstten yanmalı ve pik tuğlalı yapısı sayesinde hem yakıt tasarrufu çok yüksek hem de fırın pişirme performansı müşterilerimizden tam not alıyor.',
    highlight: 'Patentli Yüksek Verim',
  },
  {
    id: 2,
    author: 'Anadolu Züccaciye & Soba Pazarı',
    role: 'Erzurum • Toptan & Perakende Bayi',
    avatarText: 'AZ',
    rating: 5,
    productGroup: '1003-A Majolik & Turbo Döküm',
    content:
      'Doğu Anadolu’nun sert kış şartlarında Kestek Soba’nın 1034-A Turbo Döküm Tuğlalı ve 1003-A Majolik Geniş Fırınlı modelleri en çok aranan ürünler. Döküm ve emaye kalitesi yıllarca ilk günkü gibi dayanıyor.',
    highlight: 'Dayanıklı Döküm & Emaye',
  },
  {
    id: 3,
    author: 'Yılmazlar Ticaret',
    role: 'Amasya • Yetkili Satıcı',
    avatarText: 'YT',
    rating: 5,
    productGroup: 'Yeni Şömineli & Dik Camlı Soba',
    content:
      'Yeni nesil şömineli ve dik camlı sobaları hem görsel olarak çok şık hem de ısıtma gücü mükemmel. Samsun OSB fabrikadan sevkiyatlar her zaman düzenli ve tam zamanında yapılıyor.',
    highlight: 'Zamanında Fabrika Sevkiyatı',
  },
  {
    id: 4,
    author: 'Öztürk Hırdavat & Yapı Market',
    role: 'Ordu • Kurumsal Bayi',
    avatarText: 'ÖH',
    rating: 5,
    productGroup: 'Pik Tuğlalı & Emaye Kuzineler',
    content:
      '1015 Emaye Kuzine ve 1001 Pik Tuğlalı Kuzine modellerinde işçilik ve sac kalınlığı piyasadaki sıradan sobalarla kıyaslanamaz. Müşteriye gönül rahatlığıyla tavsiye ettiğimiz tek yerli üretici.',
    highlight: 'Birinci Sınıf İşçilik',
  },
  {
    id: 5,
    author: 'Çelikler Ev Gereçleri',
    role: 'Sivas • Soba & Kuzine Bayii',
    avatarText: 'ÇE',
    rating: 5,
    productGroup: '2012 Marifetli Dört Köşe Soba',
    content:
      'Alttan ve önden havalı 2012 Marifetli Dört Köşe ve 1005 Lüx Kovalı sobalar az yakıtla maksimum ısı veriyor. Yedek parça, ızgara ve kova desteğinde Kestek Soba her zaman yanımızda.',
    highlight: 'Yüksek Isı & Yakıt Tasarrufu',
  },
  {
    id: 6,
    author: 'Kuzey Tedarik & Mağazacılık',
    role: 'Samsun • Perakende Zinciri',
    avatarText: 'KT',
    rating: 5,
    productGroup: 'Tüm Kuzine & Soba Grupları',
    content:
      'Hem Kirazlık Organize Sanayi Bölgesi fabrikaları hem de Gülsan Sanayi merkez şubeleriyle Samsun’un en köklü sanayi kuruluşlarından biri. Kalite, güven ve dürüstlük ilkelerini her üründe hissediyorsunuz.',
    highlight: 'Samsun OSB Yerli Üretici',
  },
];
