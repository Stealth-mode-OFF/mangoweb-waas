"use client";

import { motion } from "motion/react";

const FEATURES = [
  { title: "Contember CMS", desc: "Náš vlastní open-source framework. GraphQL API, TypeScript, auto-generated admin. Žádný vendor lock-in.", span: "md:col-span-2", accent: "cyan" },
  { title: "React + TypeScript", desc: "Moderní stack, ne zastaralý PHP. Komponenty, type safety, testovatelnost.", span: "", accent: "violet" },
  { title: "Lighthouse 95+", desc: "Každý web optimalizujeme na rychlost. Core Web Vitals v zelené zóně.", span: "", accent: "emerald" },
  { title: "SEO na míru", desc: "Strukturovaná data, meta tagy, sitemap, rychlost. Organický traffic od dne 1.", span: "", accent: "amber" },
  { title: "Retainer podpora", desc: "Nestavíme a neodcházíme. Kontinuální vylepšování, A/B testy, nové funkce. Váš web roste s vámi.", span: "md:col-span-2", accent: "pink" },
];

const ACCENT_COLORS: Record<string, string> = {
  cyan: "from-cyan-500/20 to-transparent border-cyan-500/20",
  violet: "from-violet-500/20 to-transparent border-violet-500/20",
  emerald: "from-emerald-500/20 to-transparent border-emerald-500/20",
  amber: "from-amber-500/20 to-transparent border-amber-500/20",
  pink: "from-pink-500/20 to-transparent border-pink-500/20",
};

export function Features() {
  return (
    <section className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Co děláme jinak</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Technologie, co <span className="text-gradient">funguje.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border bg-gradient-to-b p-6 md:p-8 bento-card ${ACCENT_COLORS[f.accent]} ${f.span}`}>
              <h3 className="text-lg font-black mb-2">{f.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
