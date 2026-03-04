"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("contact");
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
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: t("title") }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address with Map */}
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-[200px] relative">
                  <iframe
                    src={contactInfo.mapEmbed}
                    width="100%"
                    height="100%"
                    className="border-0 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("locationMap")}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-primary px-3 py-1.5 rounded-lg transition-opacity">
                      {t("openInGoogleMaps")}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-3">
                    <FiMapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{t("phone")}</h3>
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
                    <h3 className="font-bold text-dark mb-1">{t("email")}</h3>
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
                      {t("workingHours")}
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
                <h3 className="font-bold text-dark mb-4">{t("socialMedia")}</h3>
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
                  {t("writeToUs")}
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <FiSend className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {t("messageSent")}
                    </h3>
                    <p className="text-gray-600">
                      {t("messageSuccess")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("fullName")} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={t("fullNamePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("email")} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={t("emailPlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("phone")}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={t("phonePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("subject")}
                        </label>
                        <select
                          title={t("subject")}
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">{t("selectSubject")}</option>
                          <option value="randevu">{t("appointmentRequest")}</option>
                          <option value="bilgi">{t("infoRequest")}</option>
                          <option value="online">{t("onlineConsultation")}</option>
                          <option value="diger">{t("other")}</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("message")} *
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
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>
                    <button type="submit" className="btn-primary gap-2">
                      <FiSend className="w-4 h-4" />
                      {t("send")}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
