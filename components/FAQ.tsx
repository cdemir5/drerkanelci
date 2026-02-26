"use client";

import { faqs } from "@/data/services";

export default function FAQ() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            SSS
          </span>
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-subtitle">
            En çok merak edilen sorular ve cevapları
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
