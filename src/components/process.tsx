// * 4-step process timeline — reduces buyer anxiety by showing clear next steps
"use client";

import { motion } from "motion/react";

// * Each step has a unique color to visually separate phases (audit=red, design=purple, dev=amber, launch=green)
const STEPS = [
  {
    num: "01",
    title: "Audit",
    desc: "Audit vašeho webu, konkurence a trhu. Lighthouse, tech stack, UX. Za 48h víte přesně, kde jste.",
    detail: "Bezplatně · 48 hodin",
    color: "#FF6B6B",
  },
  {
    num: "02",
    title: "Design",
    desc: "UX wireframy a vizuální design. Iterativní proces — prototyp za 2 týdny, váš feedback průběžně.",
    detail: "2–4 týdny · Figma prototypy",
    color: "#7C3AED",
  },
  {
    num: "03",
    title: "Vývoj",
    desc: "React, TypeScript, Contember CMS. Moderní stack, testovatelný kód, Lighthouse 95+.",
    detail: "4–8 týdnů · Týdenní demo",
    color: "#F59E0B",
  },
  {
    num: "04",
    title: "Launch & Růst",
    desc: "Deploy na Vercel, SEO, analytika. Retainer pro kontinuální vylepšování — váš web roste s vámi.",
    detail: "SEO ready · Retainer podpora",
    color: "#22C55E",
  },
];

export function Process() {
  return (
    <section id="proces" className="py-24 md:py-32 px-6 section-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#FF6B6B] uppercase tracking-[0.2em] mb-4">Proces</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Od auditu po{" "}<span className="text-gradient">launch.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 card-warm relative overflow-hidden"
            >
              <span
                className="absolute -top-4 -right-2 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: `${s.color}08` }}
              >
                {s.num}
              </span>
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5"
                  style={{ backgroundColor: s.color }}
                >
                  {s.num}
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-3">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: s.color }}>
                  {s.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
