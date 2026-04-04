// * Tech stack showcase — Contember CMS is the USP, gets col-span-2 to stand out
"use client";

import { motion } from "motion/react";

// * Contember and Retainer both span 2 cols — they're the key differentiators vs WordPress shops
const FEATURES = [
  {
    title: "Contember CMS",
    desc: "Náš vlastní open-source headless CMS. TypeScript, GraphQL API, auto-generated admin. Žádný vendor lock-in — kód je váš navždy.",
    icon: "🧩",
    span: "md:col-span-2",
    gradient: "from-[#7C3AED]/5 to-transparent",
  },
  {
    title: "React + TypeScript",
    desc: "Moderní stack, ne zastaralý PHP. Komponenty, type safety, testovatelnost.",
    icon: "⚛️",
    span: "",
    gradient: "from-[#FF6B6B]/5 to-transparent",
  },
  {
    title: "Lighthouse 95+",
    desc: "Každý web optimalizujeme na rychlost. Core Web Vitals v zelené zóně.",
    icon: "🚀",
    span: "",
    gradient: "from-[#22C55E]/5 to-transparent",
  },
  {
    title: "SEO na míru",
    desc: "Strukturovaná data, meta tagy, sitemap, rychlost. Organický traffic od dne 1.",
    icon: "📈",
    span: "",
    gradient: "from-[#F59E0B]/5 to-transparent",
  },
  {
    title: "Retainer podpora",
    desc: "Nestavíme a neodcházíme. Kontinuální vylepšování, A/B testy, nové funkce. Váš web roste s vámi.",
    icon: "🤝",
    span: "md:col-span-2",
    gradient: "from-[#FF9A9E]/5 to-transparent",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#F59E0B] uppercase tracking-[0.2em] mb-4">Technologie</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Stack, co{" "}<span className="text-gradient">funguje.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl bg-gradient-to-b ${f.gradient} bg-white border border-stone-200 p-7 card-warm ${f.span}`}
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-black text-stone-900 mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
