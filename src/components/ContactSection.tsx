import React, { useState } from 'react';
import { Phone, MapPin, Mail, Navigation, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Üretim & İhracat Teklifi');
  const [note, setNote] = useState('');

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = `${subject} — ${fullName || 'Web İletişim Formu'}`;
    const mailBody = `Ad Soyad / Firma: ${fullName}\nTelefon: ${phone}\nKonu: ${subject}\nMesaj: ${note}`;
    window.location.href = `mailto:info@yilrogiyim.com.tr?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="iletisim" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
            İLETİŞİM, İ.K. &amp; FABRİKA KONUMU
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Bize Ulaşın veya Fabrikamızı Ziyaret Edin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Clean Direct Contact Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika Telefon &amp; Faks Hatlarımız
                  </div>
                  <a
                    href="tel:+903622667170"
                    className="block text-xl font-display font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    +90 362 266 71 70
                  </a>
                  <a
                    href="tel:+903622667171"
                    className="block text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors mt-0.5"
                  >
                    Santral 2: +90 362 266 71 71 • 71 72
                  </a>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Fax: +90 362 266 99 93
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika Adresimiz
                  </div>
                  <p className="text-slate-900 text-sm font-bold leading-relaxed">
                    Organize Sanayi Bölgesi, Vali M. Erdoğan Cebeci Bulvarı No: 47
                  </p>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Tekkeköy / SAMSUN
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Kurumsal E-Posta &amp; İ.K.
                  </div>
                  <a
                    href="mailto:info@yilrogiyim.com.tr"
                    className="block text-slate-900 text-sm font-bold hover:text-blue-700"
                  >
                    info@yilrogiyim.com.tr
                  </a>
                  <a
                    href="mailto:muhasebe@yilrogiyim.com.tr"
                    className="block text-slate-600 text-xs font-semibold hover:text-blue-700 mt-1"
                  >
                    muhasebe@yilrogiyim.com.tr
                  </a>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samsun+Organize+Sanayi+B%C3%B6lgesi+Vali+Erdo%C4%9Fan+Cebeci+Bulvar%C4%B1+No+47+Tekkek%C3%B6y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  Haritada Yol Tarifi
                </a>
                <a
                  href="tel:+903622667170"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold py-3 px-4 rounded-lg text-sm transition-colors border border-slate-300"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean Form + Universal Cross-Browser Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Hızlı İletişim, Sipariş &amp; İ.K. Başvuru Formu
              </h3>
              <p className="text-slate-600 text-xs mb-5">
                Üretim talepleriniz veya İnsan Kaynakları (personel) başvurularınız için bilgilerinizi iletebilirsiniz.
              </p>

              <form onSubmit={handleMailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Adınız Soyadınız veya Firma Adı
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Adınız Soyadınız / Firma"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Konu Seçimi
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="Üretim & İhracat Teklifi">Üretim &amp; İhracat Teklifi</option>
                      <option value="Bayan Konfeksiyon Siparişi">Bayan Konfeksiyon Siparişi</option>
                      <option value="İ.K. Personel İş Başvurusu">İ.K. Personel İş Başvurusu</option>
                      <option value="Muhasebe & Tedarik">Muhasebe &amp; Tedarik</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Kısa Mesajınız
                    </label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  Mesajı Gönder
                </button>
              </form>
            </div>

            {/* Universal Cross-Browser Google Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-[280px] shadow-xs">
              <iframe
                title="Yılro İnternasyonal Giyim Samsun OSB Harita Konumu"
                src="https://maps.google.com/maps?q=Samsun%20Organize%20Sanayi%20B%C3%B6lgesi%20Vali%20Erdo%C4%9Fan%20Cebeci%20Bulvar%C4%B1%20No%2047%20Tekkek%C3%B6y%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
