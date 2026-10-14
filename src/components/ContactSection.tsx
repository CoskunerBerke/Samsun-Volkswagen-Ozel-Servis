import React, { useState } from 'react';
import { Phone, MapPin, Mail, Printer, Briefcase, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'hr'>('contact');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Koleksiyon Üretim & İhracat Teklifi');
  const [message, setMessage] = useState('');
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetEmail = 'info@yilrogiyim.com.tr';
    const mailSubject =
      activeTab === 'hr'
        ? `İ.K. Personel Başvurusu - ${fullName}`
        : `İletişim & Üretim Talebi: ${subject} - ${fullName}`;
    const mailBody = `Ad Soyad: ${fullName}\nTelefon: ${phone}\nE-posta: ${email}\nKonu / Departman: ${subject}\n\nMesaj:\n${message}`;
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="iletisim" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-sky-700 text-xs font-bold uppercase tracking-widest mb-2">
            İLETİŞİM, İNSAN KAYNAKLARI (İ.K.) &amp; FABRİKA KONUMU
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Samsun Organize Sanayi Bölgesi Merkez Fabrikamız
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Official Contact Details + HR Notice */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-2xs">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika Açık Adresimiz
                  </div>
                  <p className="text-slate-900 text-sm font-bold leading-relaxed">
                    Organize Sanayi Bölgesi, Vali M. Erdoğan Cebeci Bulvarı No: 47
                  </p>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Tekkeköy, SAMSUN / TÜRKİYE
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Phones & Fax */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Fabrika Santral &amp; Faks Hatlarımız
                  </div>
                  <a
                    href="tel:+903622667170"
                    className="block text-base font-display font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    +90 362 266 71 70
                  </a>
                  <a
                    href="tel:+903622667171"
                    className="block text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    +90 362 266 71 71
                  </a>
                  <a
                    href="tel:+903622667172"
                    className="block text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    +90 362 266 71 72
                  </a>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 pt-1">
                    <Printer className="w-3.5 h-3.5" />
                    <span>Fax: +90 362 266 99 93</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Official Emails */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Kurumsal E-Posta Adreslerimiz
                  </div>
                  <a
                    href="mailto:info@yilrogiyim.com.tr"
                    className="block text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    info@yilrogiyim.com.tr
                  </a>
                  <a
                    href="mailto:muhasebe@yilrogiyim.com.tr"
                    className="block text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    muhasebe@yilrogiyim.com.tr
                  </a>
                </div>
              </div>
            </div>

            {/* Human Resources (İ.K.) Card from Original Website */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/yilro/img2.png"
                  alt="İnsan Kaynakları"
                  className="w-11 h-11 object-contain bg-white/10 p-2 rounded-xl"
                />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    İNSAN KAYNAKLARI (İ.K.)
                  </div>
                  <div className="font-display font-bold text-lg text-white">
                    200 Kişilik Ailemize Katılın
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Şirketimiz bünyesinde pozisyon açığı olduğu takdirde veritabanına kaydedilen başvurular değerlendirilerek uygun adaylarla irtibata geçilir.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('hr');
                  setSubject('İ.K. Personel İş Başvurusu (Kesim / Dikim / Ütü / Kalite)');
                }}
                className="inline-flex items-center gap-2 text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>İ.K. Başvuru Formunu Aç</span>
              </button>
            </div>
          </div>

          {/* Right: Contact & HR Form + Official Google Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    {activeTab === 'contact'
                      ? 'Üretim, İhracat & İletişim Formu'
                      : 'İnsan Kaynakları (İ.K.) İş Başvuru Formu'}
                  </h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Formu doldurarak doğrudan fabrika yönetimimize veya İ.K. birimimize mesaj gönderebilirsiniz.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('contact');
                      setSubject('Koleksiyon Üretim & İhracat Teklifi');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'contact'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Kurumsal İletişim
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('hr');
                      setSubject('İ.K. Personel İş Başvurusu');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'hr'
                        ? 'bg-sky-500 text-slate-950'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    İ.K. Başvuru
                  </button>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Adınız Soyadınız / Firma Adı (*)
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Adınız Soyadınız"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      E-Posta Adresiniz (*)
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@firma.com"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Telefon Numaranız (*)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {activeTab === 'contact' ? 'İlgilendiğiniz Konu' : 'Başvurulan Departman'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
                    >
                      {activeTab === 'contact' ? (
                        <>
                          <option value="Koleksiyon Üretim & İhracat Teklifi">
                            Koleksiyon Üretim &amp; İhracat Teklifi
                          </option>
                          <option value="Bayan Ceket / Elbise / Pantolon Siparişi">
                            Bayan Ceket / Elbise / Pantolon Siparişi
                          </option>
                          <option value="Etek / Bluz / Yelek Fason & Paket Üretim">
                            Etek / Bluz / Yelek Üretim Talebi
                          </option>
                          <option value="Muhasebe & Tedarik İletişimi">
                            Muhasebe &amp; Tedarik İletişimi
                          </option>
                        </>
                      ) : (
                        <>
                          <option value="İ.K. Başvurusu - Dikim / Makine Operatörü">
                            Dikim &amp; Bant Makine Operatörü
                          </option>
                          <option value="İ.K. Başvurusu - Modelhane & Kesimhane">
                            Modelhane &amp; Kesimhane Uzmanı
                          </option>
                          <option value="İ.K. Başvurusu - Ütü, Paket & Kalite Kontrol">
                            Ütü, Paket &amp; Kalite Kontrol Personeli
                          </option>
                          <option value="İ.K. Başvurusu - İdari & Muhasebe">
                            İdari Kadro &amp; Muhasebe
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mesajınız (*)
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      activeTab === 'contact'
                        ? 'Sipariş adetleri, ürün grubu veya üretim talebiniz hakkında bilgi yazabilirsiniz...'
                        : 'Tecrübeniz, uzmanlık alanınız ve iletişim notunuzu yazabilirsiniz...'
                    }
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                  />
                  <span>KVKK Aydınlatma Metnini okudum ve kabul ediyorum. (*)</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            </div>

            {/* Official Embedded Map from yilrogiyim.com.tr */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden h-[290px] shadow-2xs">
              <iframe
                title="Yılro İnternasyonal Giyim Samsun OSB Harita Konumu"
                src="https://www.google.com/maps/d/embed?mid=157zvwowvqcNM5B0GJSk64Eg8JoWHacSt"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
