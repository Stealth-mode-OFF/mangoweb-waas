// * Animated metrics section — numbers count up on scroll for visual impact
"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// * Eased counter animation — cubic ease-out makes numbers feel natural, not robotic
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 2000;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // * Cubic ease-out: fast start, gentle end — more satisfying than linear
    const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const METRICS = [
  { value: 95, suffix: "+", label: "Lighthouse score", desc: "Každý náš web" },
  { value: 15, suffix: "+", label: "Let zkušeností", desc: "Od 2010" },
  { value: 150, suffix: "+", label: "Dodaných projektů", desc: "České i zahraniční firmy" },
  { value: 40, suffix: "%", label: "Nárůst konverzí", desc: "Průměr u klientů" },
];

export function Metrics() {
  return (
    <section className="py-24 md:py-32 px-6 section-warm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.2em] mb-4">Výsledky</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Čísla, co{" "}<span className="text-gradient">mluví.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-black text-gradient mb-2">
                <AnimatedNumber target={m.value} suffix={m.suffix} />
              </p>
              <p className="text-sm font-bold text-stone-700 mb-1">{m.label}</p>
              <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
