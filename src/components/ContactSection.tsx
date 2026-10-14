import React, { useState } from 'react';
import { Phone, MapPin, Mail, Navigation, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Ürün Sipariş & Fiyat Talebi');
  const [note, setNote] = useState('');

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = `${subject} — ${fullName || 'Web İletişim Formu'}`;
    const mailBody = `Ad Soyad / Firma: ${fullName}\nTelefon: ${phone}\nKonu: ${subject}\nMesaj: ${note}`;
    window.location.href = `mailto:kestek@kesteksoba.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="iletisim" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
            İLETİŞİM, ÜRÜN SİPARİŞ &amp; BAYİLİK BAŞVURUSU
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Fabrika ve Merkez İletişim Bilgilerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Clean Direct Contact Card (Fabrika & Merkez) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-xs">
              {/* Factory Phones */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika &amp; Merkez Telefonlarımız
                  </div>
                  <a
                    href="tel:+903622667670"
                    className="block text-lg font-display font-bold text-slate-900 hover:text-red-600 transition-colors"
                  >
                    Fabrika: 0362 266 76 70 • 266 76 71
                  </a>
                  <a
                    href="tel:+903622668699"
                    className="block text-sm font-bold text-slate-700 hover:text-red-600 transition-colors mt-0.5"
                  >
                    Fabrika Hat 3: 0362 266 86 99 (Fax: 266 73 13)
                  </a>
                  <a
                    href="tel:+903622380777"
                    className="block text-sm font-bold text-slate-700 hover:text-red-600 transition-colors mt-1"
                  >
                    Merkez (Gülsan): 0362 238 07 77 (Fax: 238 07 78)
                  </a>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Factory & HQ Addresses */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Fabrika Adresimiz (Samsun OSB)
                    </div>
                    <p className="text-slate-900 text-sm font-bold leading-snug">
                      Organize Sanayi Bölgesi, Erdoğan Cebeci Bulv. No: 44 Kirazlık / SAMSUN
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Merkez Adresimiz (Gülsan Sanayi)
                    </div>
                    <p className="text-slate-700 text-xs font-semibold leading-snug">
                      Gülsan Sanayi Sitesi 44. Sokak No: 19 PK 55080 Canik / SAMSUN
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Official Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-red-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Resmi E-Posta Adresimiz
                  </div>
                  <a
                    href="mailto:kestek@kesteksoba.com"
                    className="block text-slate-900 text-sm font-bold hover:text-red-600"
                  >
                    kestek@kesteksoba.com
                  </a>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samsun+Organize+Sanayi+B%C3%B6lgesi+Erdo%C4%9Fan+Cebeci+Bulvar%C4%B1+No+44+Kirazl%C4%B1k+Samsun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  Fabrika Yol Tarifi
                </a>
                <a
                  href="tel:+903622667670"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold py-3 px-4 rounded-lg text-sm transition-colors border border-slate-300"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean Form + Universal Cross-Browser Google Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Ürün Sipariş, Bayilik &amp; İletişim Formu
              </h3>
              <p className="text-slate-600 text-xs mb-5">
                Toptan soba/kuzine siparişi, bayilik başvurusu veya insan kaynakları için bize doğrudan yazabilirsiniz.
              </p>

              <form onSubmit={handleMailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Adınız Soyadınız / Firma Adı
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Adınız Soyadınız / Firma"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
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
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
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
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Ürün Sipariş & Fiyat Talebi">Ürün Sipariş &amp; Fiyat Talebi</option>
                      <option value="Bayilik Başvurusu">Yetkili Bayilik Başvurusu</option>
                      <option value="Kuzine & Döküm Soba Toptan Alım">Kuzine &amp; Döküm Soba Toptan Alım</option>
                      <option value="İnsan Kaynakları (Kariyer)">İnsan Kaynakları (Kariyer)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mesajınız
                    </label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="İlgilendiğiniz modeller veya mesajınız..."
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  Formu Gönder
                </button>
              </form>
            </div>

            {/* Universal Cross-Browser Google Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-[280px] shadow-xs">
              <iframe
                title="Kestek Soba Sanayii Samsun OSB Fabrika Konumu"
                src="https://maps.google.com/maps?q=Samsun%20Organize%20Sanayi%20B%C3%B6lgesi%20Erdo%C4%9Fan%20Cebeci%20Bulvar%C4%B1%20No%2044%20Kirazl%C4%B1k%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
