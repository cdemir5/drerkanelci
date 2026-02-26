"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/services";
import { FiAward, FiBookOpen, FiHeart, FiSmile } from "react-icons/fi";

const icons = [FiAward, FiBookOpen, FiHeart, FiSmile];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  icon: Icon,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count.toLocaleString("tr-TR")}
        {suffix}
      </p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="gradient-primary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={icons[i]}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
