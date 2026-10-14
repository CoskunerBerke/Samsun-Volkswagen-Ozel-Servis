export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  avatarText: string;
  rating: number;
  timeAgo: string;
  productGroup: string;
  content: string;
  highlight: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Van Der Berg Fashion Group',
    role: 'Amsterdam / Hollanda • Koleksiyon İthalatçısı',
    avatarText: 'VB',
    rating: 5,
    timeAgo: 'Uzun Dönem Partner',
    productGroup: 'Bayan Ceket & Pantolon',
    content:
      '1980 Hollanda kökenli kültürleriyle Avrupa kalite standartlarını çok iyi biliyorlar. Samsun OSB fabrikasında üretilen blazer ceket ve pantolon koleksiyonlarımızda ölçü toleransları ve dikim kalitesi her partide kusursuz.',
    highlight: 'Avrupa İhracat Standartları',
  },
  {
    id: 2,
    author: 'Selin Tekstil & Mağazacılık',
    role: 'İstanbul • Zincir Mağaza Tedarik Yönetimi',
    avatarText: 'ST',
    rating: 5,
    timeAgo: 'Kurumsal Müşteri',
    productGroup: 'Elbise & Bluz Üretimi',
    content:
      'Günlük 2.500 adet üretim kapasitesi sayesinde yüksek adetli sezon siparişlerimizi termin tarihinden önce teslim alıyoruz. Kesim, dikim, ara ütü ve son kalite kontrol süreçleri son derece disiplinli.',
    highlight: '2.500 Adet/Gün Kapasite',
  },
  {
    id: 3,
    author: 'Rheinland Apparel GmbH',
    role: 'Düsseldorf / Almanya • Hazır Giyim Distribütörü',
    avatarText: 'RA',
    rating: 5,
    timeAgo: 'İhracat Partneri',
    productGroup: 'Etek & Yelek Koleksiyonu',
    content:
      'TSE ve BVQİ ISO 9001 kalite güvence belgelerine sahip 4.000 m² entegre bir tesis. Askılı uluslararası sevkiyat paketlemeleri sayesinde ürünlerimiz mağaza raflarına ütüsü dahi bozulmadan ulaşıyor.',
    highlight: 'ISO 9001 Kalite Güvencesi',
  },
  {
    id: 4,
    author: 'Kuzey Moda Konfeksiyon A.Ş.',
    role: 'Ankara • Kurumsal Giyim & Bayan Takım',
    avatarText: 'KM',
    rating: 5,
    timeAgo: 'Üretim Partneri',
    productGroup: 'Astarlı Ceket & Etek',
    content:
      'Astarlı bayan ceket ve kalem etek dikimi yüksek ustalık ister. Yılro Giyim’in 200 kişilik uzman kadrosu, zorlu kalıp ve kumaşlarda bile sıfır hata prensibiyle üretim yapıyor.',
    highlight: '200 Kişilik Uzman Kadro',
  },
  {
    id: 5,
    author: 'Nordic Style B.V.',
    role: 'Rotterdam / Hollanda • Bayan Giyim Markası',
    avatarText: 'NS',
    rating: 5,
    timeAgo: 'İhracat Partneri',
    productGroup: 'Sezonluk Bayan Elbise',
    content:
      'Bantta, Gelecek ve Sevk aşamalarını şeffaf biçimde raporlamaları planlamamızı çok kolaylaştırıyor. 1989’dan beri Samsun’da bu ölçekte istikrarlı üretim yapmaları büyük güven veriyor.',
    highlight: 'Şeffaf Bant & Sevk Takibi',
  },
  {
    id: 6,
    author: 'Alya Hazır Giyim & Tasarım',
    role: 'İzmir • Koleksiyon & Private Label',
    avatarText: 'AH',
    rating: 5,
    timeAgo: 'Kurumsal Müşteri',
    productGroup: 'Bluz, Yelek & Pantolon',
    content:
      'Modelhane aşamasından son ütü ve paketlemeye kadar her adım kendi 4.000 m² tesislerinde gerçekleşiyor. Numune onayından seri üretime geçiş hızları sektörde örnek gösterilecek düzeyde.',
    highlight: 'Entegre 4.000 m² Fabrika',
  },
  {
    id: 7,
    author: 'EuroTex Retail Group',
    role: 'Brüksel / Belçika • Moda Tedarik Zinciri',
    avatarText: 'ET',
    rating: 5,
    timeAgo: 'Avrupa Partneri',
    productGroup: 'Bayan Konfeksiyon İhracatı',
    content:
      'Yılro İnternasyonal Giyim ile çalıştığımız her sezonda zamanında teslimat ve yüksek dikiş kalitesi aldık. Uluslararası rekabet gücü yüksek, güvenilir bir Türk-Hollanda üretim markası.',
    highlight: 'Zamanında İhracat Sevkiyatı',
  },
  {
    id: 8,
    author: 'Karadeniz Tekstil Lojistik',
    role: 'Samsun Tekkeköy OSB • Çözüm Ortağı',
    avatarText: 'KT',
    rating: 5,
    timeAgo: 'Bölgesel İş Ortağı',
    productGroup: 'Uluslararası Sevkiyat',
    content:
      'Samsun Organize Sanayi Bölgesi’nin en köklü ve düzenli konfeksiyon fabrikalarından biri. İş disiplini, çalışan memnuniyeti ve ihracat odaklı üretim anlayışlarıyla bölgenin gururu.',
    highlight: '1989’dan Beri Samsun OSB’de',
  },
];
