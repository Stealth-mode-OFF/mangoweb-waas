"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Analyza",
    desc: "Audit vaseho webu, konkurence a trhu. Lighthouse, tech stack, UX. Za 48h vite presne, kde jste a kam se posunout.",
    detail: "Bezplatne | 48 hodin | Konkretni doporuceni",
  },
  {
    num: "02",
    title: "Design + vyvoj",
    desc: "Navrhneme a postavime web na miru. React, TypeScript, nas vlastni CMS Contember. Zadny sablonovity WordPress.",
    detail: "6-12 tydnu | Iterativni proces | Vas feedback kazdy tyden",
  },
  {
    num: "03",
    title: "Launch + podpora",
    desc: "Nasadime na Vercel, optimalizujeme rychlost, napojime analytiku. A pak vas nenestime — retainer pro kontinualni rust.",
    detail: "Lighthouse 95+ | SEO ready | Retainer od 15.000 CZK/mesic",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="beam w-full absolute top-0" />
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Proces</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Jak <span className="text-gradient">pracujeme.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.2 }}
              className="relative">
              <span className="text-6xl font-black text-zinc-800 absolute -top-8 -left-2 select-none">{s.num}</span>
              <div className="relative pt-6">
                <h3 className="text-2xl font-black mb-3">{s.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-wider">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
