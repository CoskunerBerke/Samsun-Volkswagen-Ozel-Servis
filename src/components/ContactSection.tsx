import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Samsun Volkswagen Özel Servis, ben ${name || 'Müşteriniz'}. Aracım: ${
      carModel || 'Belirtilmedi'
    }. Talebim: ${note || 'Servis randevusu almak istiyorum.'}`;
    window.open(
      `https://wa.me/905444775657?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full mb-3">
            İLETİŞİM & KONUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servis Randevusu & Yol Tarifi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Aracınızın bakım ve onarım işlemleri için bize doğrudan telefonla veya WhatsApp üzerinden ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Contact Info Card */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    TELEFON & WHATSAPP
                  </span>
                  <a
                    href="tel:+905444775657"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-sky-600 transition-colors mt-1 block"
                  >
                    0544 477 56 57
                  </a>
                  <span className="text-sm text-slate-500">Hızlı servis danışma ve randevu hattı</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    SERVİS ADRESİMİZ
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    Şabanoğlu Mah., 19 Mayıs Sanayi Sitesi, 59. Sokak No: 38, Tekkeköy / Samsun
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    ÇALIŞMA SAATLERİMİZ
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    Pazartesi – Cumartesi: 08:00 – 19:00
                  </p>
                  <span className="text-sm text-slate-500">Pazar günü kapalıdır</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/kLAzCUYKyzsqo8X88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-all"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Google Haritalar’da Yol Tarifi Aç</span>
              </a>
            </div>
          </div>

          {/* Right: 3-Field Quick Form */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Hızlı Servis & Fiyat Talebi</h3>
            <p className="text-sm text-slate-600 mb-6">
              Bilgilerinizi girin, doğrudan WhatsApp üzerinden usta ekibimize iletilsin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Örn: Ahmet Yılmaz"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Araç Marka & Modeli
                </label>
                <input
                  type="text"
                  required
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="Örn: Volkswagen Passat 1.6 TDI DSG / Golf / Caddy"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Yapılacak İşlem veya Şikayetiniz
                </label>
                <textarea
                  rows={3}
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Örn: Periyodik bakım, DSG kavrama kontrolü, triger değişimi..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ile Hemen Gönder</span>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white h-[360px]">
          <iframe
            title="Samsun Volkswagen Özel Servis Konumu"
            src="https://maps.google.com/maps?q=41.237462,36.419101&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
