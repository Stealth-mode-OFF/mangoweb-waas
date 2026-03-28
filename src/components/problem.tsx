"use client";

import { motion } from "motion/react";

const PROBLEMS = [
  {
    icon: "⚡",
    title: "Vas web je pomaly",
    desc: "Lighthouse pod 50. Kazda sekunda navic = -7% konverzi. Vase konkurence je rychlejsi.",
    stat: "53%",
    statLabel: "uzivatelu odejde pri nacitani > 3s",
  },
  {
    icon: "🎨",
    title: "Vas web nevypada profesionalne",
    desc: "Zastaraly design = ztrata duvery. Prvni dojem trva 50ms. U vas uz je pozdno.",
    stat: "75%",
    statLabel: "lidi sudi firmu podle webu",
  },
  {
    icon: "📉",
    title: "Vas web nekonvertuje",
    desc: "Navstevnici prichazeji a odchazeji. Zadne leady, zadne poptavky. Web je naklad, ne investice.",
    stat: "2.35%",
    statLabel: "prumerna konverze webu v CR",
  },
];

export function Problem() {
  return (
    <section className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Problem</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Vas web vas <span className="text-gradient">brzdi.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-6 md:p-8 bento-card">
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-xl font-black mb-3">{p.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-2xl font-black text-gradient">{p.stat}</span>
                <p className="text-[10px] font-mono text-zinc-600 mt-1 uppercase tracking-wider">{p.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
