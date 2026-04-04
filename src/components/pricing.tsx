// * Pricing section — 3 tiers: free audit (lead gen), one-time build, WaaS retainer (recurring revenue)
"use client";

import { motion } from "motion/react";

// * Middle tier marked as accent=true gets the "Nejoblíbenější" badge — anchoring effect
const TIERS = [
  {
    name: "Audit webu",
    price: "Zdarma",
    period: "",
    desc: "Zjistíte kde jste a kam se posunout.",
    features: ["Lighthouse analýza", "Tech stack review", "UX doporučení", "Konkurenční srovnání", "Akční plán", "Hotovo za 48h"],
    cta: "Chci audit",
    accent: false,
    color: "#22C55E",
  },
  {
    name: "Web na míru",
    price: "od 250.000",
    period: "CZK",
    desc: "Kompletní web od analýzy po launch.",
    features: ["Contember CMS", "React + TypeScript", "Responsive design", "SEO základ", "Lighthouse 95+", "3 měsíce podpora"],
    cta: "Chci nabídku",
    accent: true,
    color: "#FF6B6B",
  },
  {
    name: "WaaS Retainer",
    price: "od 15.000",
    period: "CZK / měsíc",
    desc: "Váš web roste s vámi. Každý měsíc lepší.",
    features: ["Vše z Web na míru", "Měsíční optimalizace", "A/B testování", "Nové funkce", "Prioritní podpora", "Analytika a reporty"],
    cta: "Chci retainer",
    accent: false,
    color: "#7C3AED",
  },
];

export function Pricing() {
  return (
    <section id="cenik" className="py-24 md:py-32 px-6 section-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#FF6B6B] uppercase tracking-[0.2em] mb-4">Ceník</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Transparentní{" "}<span className="text-gradient">ceny.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-7 card-warm relative ${
                t.accent
                  ? "bg-white border-2 shadow-xl shadow-[#FF6B6B]/10"
                  : "bg-white border border-stone-200"
              }`}
              style={t.accent ? { borderColor: `${t.color}40` } : undefined}
            >
              {t.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider warm-gradient">
                  Nejoblíbenější
                </div>
              )}
              <h3 className="text-xl font-black text-stone-900 mb-1">{t.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-black" style={{ color: t.color }}>{t.price}</span>
                {t.period && <span className="text-sm text-stone-400 ml-1">{t.period}</span>}
              </div>
              <p className="text-stone-500 text-sm mb-6">{t.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-stone-600">
                    <span style={{ color: t.color }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                  t.accent
                    ? "warm-gradient text-white shadow-lg shadow-[#FF9A9E]/20 hover:shadow-[#FF9A9E]/40 hover:-translate-y-0.5"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {t.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
