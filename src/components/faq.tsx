"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "Jak dlouho trvá vytvoření webu?", a: "Typicky 6-12 týdnů od schválení návrhu. Složitější projekty (e-commerce, intranet) 3-6 měsíců. První prototyp vidíte za 2 týdny." },
  { q: "Proč ne WordPress?", a: "WordPress je skvělý pro blogy. Pro firmu co chce růst je ale pomalý, nebezpečný a těžko škálovatelný. Náš stack (React + Contember) je rychlejší, bezpečnější a snadněji se přizpůsobí." },
  { q: "Co je Contember?", a: "Náš vlastní open-source CMS framework. TypeScript, GraphQL API, auto-generated admin. Žádný vendor lock-in — kód je váš navždy (Apache 2.0 licence)." },
  { q: "Kolik to stojí?", a: "Weby na míru od 250.000 CZK. Retainer (kontinuální vylepšování) od 15.000 CZK/měsíc. Audit webu je zdarma." },
  { q: "Musíme použít Contember?", a: "Ne. Pracujeme i s Strapi, Sanity, Contentful nebo čistě headless API. Contember doporučujeme protože ho známe nejlíp a je zdarma." },
  { q: "Co když už máme web a chceme ho jen vylepšit?", a: "To je přesně naše WaaS nabídka. Retainer od 15.000 CZK/měsíc — pravidelné optimalizace, nové funkce, A/B testy." },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-[#F59E0B] uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900">
            Časté{" "}<span className="text-gradient">dotazy.</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-stone-200 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm font-bold text-stone-900 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-stone-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
