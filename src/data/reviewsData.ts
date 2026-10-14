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
    author: 'Emre Kılıç',
    role: 'Google Yorumu • Samsun',
    avatarText: 'EK',
    rating: 5,
    productGroup: 'Volkswagen Passat B8 1.6 TDI DSG',
    content:
      'Passat aracımın DSG kavrama ve volan değişimi için Tekkeköy 59. Sokak’taki Samsun Volkswagen Özel Servis’e gittim. Orijinal LUK kavrama seti takıp bilgisayarlı temel ayar ve kalibrasyonunu yaptılar. Vites geçişleri fabrikadan çıktığı günkü gibi pamuk gibi oldu.',
    highlight: 'DSG Kavrama & Kalibrasyon',
  },
  {
    id: 2,
    author: 'Mustafa Çetin',
    role: 'Google Yorumu • Samsun',
    avatarText: 'MÇ',
    rating: 5,
    productGroup: 'Volkswagen Golf 7.5 1.4 TSI',
    content:
      'Periyodik bakım ve triger seti değişimi yaptırdım. Kullanılan tüm filtreler orijinal Mann-Filter, motor yağı ise VW onaylıydı. Gözünüzün önünde şeffaf şekilde çalışıyorlar, fiyatlar da yetkili servise göre çok makul.',
    highlight: 'Orijinal Parça & Triger Bakımı',
  },
  {
    id: 3,
    author: 'Serdar Yılmaz',
    role: 'Google Yorumu • Ordu',
    avatarText: 'SY',
    rating: 5,
    productGroup: 'Volkswagen Tiguan 2.0 TDI',
    content:
      'Ekranda şanzıman ve motor arıza uyarısı yanıyordu. ODIS cihazıyla bağlanıp nokta atışı arızayı tespit ettiler. Gereksiz hiçbir parça değiştirmeden mekatronik basınç tüpü onarımıyla sorunu aynı gün çözdüler.',
    highlight: 'Nokta Atışı ODIS Teşhis',
  },
  {
    id: 4,
    author: 'Gökhan Demir',
    role: 'Google Yorumu • Samsun',
    avatarText: 'GD',
    rating: 5,
    productGroup: 'Volkswagen Transporter T6 & Caddy',
    content:
      'Şirketimizin Volkswagen Caddy ve Transporter ticari araçlarının tüm bakımlarını burada yaptırıyoruz. İşimizi aksatmadan aynı gün içinde hem baskı balata hem de periyodik bakımları tamamlayıp teslim ediyorlar.',
    highlight: 'Hızlı Ticari Filo Servisi',
  },
  {
    id: 5,
    author: 'Onur Aydın',
    role: 'Google Yorumu • Amasya',
    avatarText: 'OA',
    rating: 5,
    productGroup: 'Audi A3 Sedan 35 TFSI',
    content:
      'VAG grubu araçların dilinden gerçekten anlayan ustalar. Ön takım sesini ve devirdaim su kaçağını kısa sürede giderdiler. Temiz işçilik, dürüst esnaflık ve güler yüzlü karşılama için teşekkür ederim.',
    highlight: 'VAG Grubu Uzmanlığı',
  },
  {
    id: 6,
    author: 'Hüseyin Karaca',
    role: 'Google Yorumu • Samsun',
    avatarText: 'HK',
    rating: 5,
    productGroup: 'Škoda Superb & Seat Leon',
    content:
      'Samsun 19 Mayıs Sanayi Sitesi’nde Volkswagen, Seat ve Škoda araçlarınızı gönül rahatlığıyla emanet edebileceğiniz bir servis. Hem arıza tespitinde hem de parça kalitesinde kesinlikle taviz vermiyorlar.',
    highlight: 'Güvenilir & Garantili İşçilik',
  },
];
