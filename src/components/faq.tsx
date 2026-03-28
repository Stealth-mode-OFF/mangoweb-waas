"use client";

import { motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  { q: "Jak dlouho trvá vytvoření webu?", a: "Typicky 6-12 týdnů od schválení návrhu. Složitější projekty (e-commerce, intranet) 3-6 měsíců. První prototyp vidíte za 2 týdny." },
  { q: "Proč ne WordPress?", a: "WordPress je skvělý pro blogy. Pro firmu co chce růst je ale pomalý, nebezpečný a těžko škálovatelný. Náš stack (React + Contember) je rychlejší, bezpečnější a snadněji se přizpůsobí vašim potřebám." },
  { q: "Co je Contember?", a: "Náš vlastní open-source CMS framework. TypeScript, GraphQL API, auto-generated admin. Žádný vendor lock-in — kód je váš navždy (Apache 2.0 licence)." },
  { q: "Kolik to stojí?", a: "Weby na míru od 250.000 CZK. Retainer (kontinuální vylepšování) od 15.000 CZK/měsíc. Audit webu je zdarma." },
  { q: "Musíme použít Contember?", a: "Ne. Pracujeme i s Strapi, Sanity, Contentful nebo čistě headless API. Contember doporučujeme protože ho známe nejlíp a je zdarma." },
  { q: "Co když už máme web a chceme ho jen vylepšit?", a: "To je přesně naše WaaS nabídka. Retainer od 15.000 CZK/měsíc — pravidelné optimalizace, nové funkce, A/B testy. Váš web roste s vámi." },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="beam w-full mb-16" />
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Časté <span className="text-gradient">dotazy.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
      <button onClick={() => setOpen(!open)}
        className="w-full rounded-xl p-5 text-left flex items-center justify-between gap-4 hover:border-zinc-600 transition-colors bg-[#111118] border border-[#2a2a3a]">
        <span className="text-sm font-bold text-zinc-100">{q}</span>
        <span className={`text-zinc-500 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden">
        <p className="text-sm text-zinc-300 leading-relaxed px-5 py-3">{a}</p>
      </motion.div>
    </motion.div>
  );
}
