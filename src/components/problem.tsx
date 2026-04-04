// * Problem agitation section — three pain points with stats to make visitors feel the urgency
"use client";

import { motion } from "motion/react";

// * Stats are from real industry research (Google, Stanford) — builds credibility
const PROBLEMS = [
  {
    icon: "⚡",
    title: "Váš web je pomalý",
    desc: "Lighthouse pod 50. Každá sekunda navíc = -7% konverzí. Vaše konkurence je rychlejší.",
    stat: "53%",
    statLabel: "uživatelů odejde při načítání > 3s",
  },
  {
    icon: "🎨",
    title: "Váš web nevypadá profesionálně",
    desc: "Zastaralý design = ztráta důvěry. První dojem trvá 50ms. U vás už je pozdě.",
    stat: "75%",
    statLabel: "lidí soudí firmu podle webu",
  },
  {
    icon: "📉",
    title: "Váš web nekonvertuje",
    desc: "Návštěvníci přicházejí a odcházejí. Žádné leady, žádné poptávky. Web je náklad, ne investice.",
    stat: "2.35%",
    statLabel: "průměrná konverze webu v ČR",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Problém</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Váš web vás <span className="text-gradient">brzdí.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="card-solid rounded-2xl p-6 md:p-8 bento-card">
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-xl font-black mb-3">{p.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-2xl font-black text-gradient">{p.stat}</span>
                <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">{p.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
