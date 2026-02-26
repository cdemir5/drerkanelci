"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { contactInfo, workingHours } from "@/data/contact";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to an API
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "İletişim" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Randevu almak veya sorularınız için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Adres</h3>
                    <p className="text-sm text-gray-600">
                      {contactInfo.address}
                    </p>
                    <p className="text-sm text-gray-600">{contactInfo.city}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {contactInfo.hospital}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Telefon</h3>
                    <a
                      href={`tel:${contactInfo.phoneClean}`}
                      className="text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">E-posta</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary font-medium hover:text-primary-dark transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">
                      Çalışma Saatleri
                    </h3>
                    {workingHours.map((wh, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        <span className="font-medium">{wh.day}:</span>{" "}
                        {wh.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h3 className="font-bold text-dark mb-4">Sosyal Medya</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FaInstagram, href: contactInfo.social.instagram, label: "Instagram" },
                    { icon: FaFacebookF, href: contactInfo.social.facebook, label: "Facebook" },
                    { icon: FaLinkedinIn, href: contactInfo.social.linkedin, label: "LinkedIn" },
                    { icon: FaYoutube, href: contactInfo.social.youtube, label: "YouTube" },
                    { icon: FaWhatsapp, href: contactInfo.whatsapp, label: "WhatsApp" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border p-8">
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Bize Yazın
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <FiSend className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      Mesajınız Alındı!
                    </h3>
                    <p className="text-gray-600">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Konu
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Konu Seçiniz</option>
                          <option value="randevu">Randevu Talebi</option>
                          <option value="bilgi">Bilgi Talebi</option>
                          <option value="online">Online Görüşme</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mesajınız *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Mesajınızı yazınız..."
                      />
                    </div>
                    <button type="submit" className="btn-primary gap-2">
                      <FiSend className="w-4 h-4" />
                      Gönder
                    </button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border h-[400px]">
                <iframe
                  src={contactInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Konum Haritası"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
