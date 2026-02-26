import { FiAward, FiCpu, FiBookOpen, FiHeart } from "react-icons/fi";
import { whyChooseUs } from "@/data/services";

const icons = [FiAward, FiCpu, FiBookOpen, FiHeart];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Neden Biz?
          </span>
          <h2 className="section-title">Neden Doç. Dr. Erkan Elçi?</h2>
          <p className="section-subtitle">
            Sağlığınız için doğru tercihi yapmanızda size yardımcı oluyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
