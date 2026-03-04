"use client";

import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            {tc("faqBadge")}
          </span>
          <h2 className="section-title">{tc("faq")}</h2>
          <p className="section-subtitle">
            {tc("faqSubtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-dark hover:text-primary transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary group-open:bg-primary group-open:text-white transition-colors">
                  <span className="group-open:rotate-45 transition-transform text-lg leading-none">
                    +
                  </span>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
