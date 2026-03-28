"use client";

import { motion } from "motion/react";

const TIERS = [
  {
    name: "Web na miru",
    price: "od 250.000 CZK",
    desc: "Kompletni web od analyzy po launch.",
    features: ["Contember CMS", "React + TypeScript", "Responsive design", "SEO zaklad", "Lighthouse 90+", "3 mesice podpora"],
    cta: "Chci nabidku",
    accent: false,
  },
  {
    name: "WaaS Retainer",
    price: "od 15.000 CZK/mesic",
    desc: "Kontinualni vylepsovani. Vas web roste s vami.",
    features: ["Vsechno z Web na miru", "Mesicni optimalizace", "A/B testovani", "Nove funkce", "Prioritni podpora", "Analytika a reporty"],
    cta: "Chci retainer",
    accent: true,
  },
  {
    name: "Audit webu",
    price: "Zdarma",
    desc: "Zjistete kde jste a kam se posunout.",
    features: ["Lighthouse analyza", "Tech stack review", "UX doporuceni", "Konkurencni srovnani", "Akcni plan", "Hotovo za 48h"],
    cta: "Chci audit",
    accent: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Cenik</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Transparentni <span className="text-gradient">ceny.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-6 md:p-8 bento-card relative ${
                t.accent
                  ? "border-2 border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-[#141419] shadow-lg shadow-cyan-500/5"
                  : "card-solid"
              }`}>
              {t.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full aurora text-[10px] font-bold text-white uppercase tracking-wider">
                  Doporucujeme
                </div>
              )}
              <h3 className="text-xl font-black mb-1">{t.name}</h3>
              <p className="text-2xl font-black text-gradient mb-3">{t.price}</p>
              <p className="text-zinc-400 text-sm mb-6">{t.desc}</p>
              <ul className="space-y-2 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-cyan-400 text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#audit"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  t.accent
                    ? "aurora text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                    : "glass text-zinc-300 hover:text-white hover:border-zinc-600"
                }`}>
                {t.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
