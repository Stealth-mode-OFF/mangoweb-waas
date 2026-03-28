"use client";

import { motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  { q: "Jak dlouho trva vytvoreni webu?", a: "Typicky 6-12 tydnu od schvaleni navrhu. Slozitejsi projekty (e-commerce, intranet) 3-6 mesicu. Prvni prototyp vidite za 2 tydny." },
  { q: "Proc ne WordPress?", a: "WordPress je skvely pro blogy. Pro firmu co chce rust je ale pomaly, nebezpecny a tezko skalovatelny. Nas stack (React + Contember) je rychlejsi, bezpecnejsi a snadneji se prisposbi vasim potrebam." },
  { q: "Co je Contember?", a: "Nas vlastni open-source CMS framework. TypeScript, GraphQL API, auto-generated admin. Zadny vendor lock-in — kod je vas navzdy (Apache 2.0 licence)." },
  { q: "Kolik to stoji?", a: "Weby na miru od 250.000 CZK. Retainer (kontinualni vylepsovani) od 15.000 CZK/mesic. Audit webu je zdarma." },
  { q: "Musime pouzit Contember?", a: "Ne. Pracujeme i s Strapi, Sanity, Contentful nebo ciste headless API. Contember doporucujeme protoze ho zname nejlip a je zdarma." },
  { q: "Co kdyz uz mame web a chceme ho jen vylepsit?", a: "To je presne nase WaaS nabidka. Retainer od 15.000 CZK/mesic — pravidelne optimalizace, nove funkce, A/B testy. Vas web roste s vami." },
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
            Caste <span className="text-gradient">dotazy.</span>
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
        className="w-full glass rounded-xl p-5 text-left flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors">
        <span className="text-sm font-bold text-zinc-200">{q}</span>
        <span className={`text-zinc-500 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden">
        <p className="text-sm text-zinc-400 leading-relaxed px-5 py-3">{a}</p>
      </motion.div>
    </motion.div>
  );
}
