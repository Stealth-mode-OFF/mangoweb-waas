"use client";

import { motion } from "motion/react";

const FEATURES = [
  { title: "Contember CMS", desc: "Nas vlastni open-source framework. GraphQL API, TypeScript, auto-generated admin. Zadny vendor lock-in.", span: "md:col-span-2", accent: "cyan" },
  { title: "React + TypeScript", desc: "Moderni stack, ne zastaraly PHP. Komponenty, type safety, testovatelnost.", span: "", accent: "violet" },
  { title: "Lighthouse 95+", desc: "Kazdy web optimalizujeme na rychlost. Core Web Vitals v zelene zone.", span: "", accent: "emerald" },
  { title: "SEO na miru", desc: "Strukturovana data, meta tagy, sitemap, rychlost. Organicky traffic od dne 1.", span: "", accent: "amber" },
  { title: "Retainer podpora", desc: "Nestavime a neodchazime. Kontinualni vylepsovani, A/B testy, nove funkce. Vas web roste s vami.", span: "md:col-span-2", accent: "pink" },
];

const ACCENT_COLORS: Record<string, string> = {
  cyan: "from-cyan-500/20 to-transparent border-cyan-500/10",
  violet: "from-violet-500/20 to-transparent border-violet-500/10",
  emerald: "from-emerald-500/20 to-transparent border-emerald-500/10",
  amber: "from-amber-500/20 to-transparent border-amber-500/10",
  pink: "from-pink-500/20 to-transparent border-pink-500/10",
};

export function Features() {
  return (
    <section className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Co delame jinak</p>
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
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
