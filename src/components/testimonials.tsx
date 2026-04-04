// * Client testimonials — masonry layout, each card has 5 stars + avatar initials
"use client";

import { motion } from "motion/react";

// TODO: Replace with real testimonials once we get written permission from clients
const TESTIMONIALS = [
  {
    text: "manGoweb nám dodal web, který překonal všechna očekávání. Rychlost, design, UX — vše na špičkové úrovni.",
    name: "Jan Černý",
    role: "CMO",
    company: "Pilsner Urquell",
  },
  {
    text: "Přechod na React a Contember byl nejlepší technické rozhodnutí. Vývojáři nadšení, editoři spokojení.",
    name: "Petra Nováková",
    role: "CTO",
    company: "Economia",
  },
  {
    text: "Konverze vzrostly o 35% po redesignu. manGoweb rozumí nejen technologiím, ale hlavně byznysu.",
    name: "Martin Dvořák",
    role: "CEO",
    company: "Alma Career",
  },
  {
    text: "Čtenářský zážitek se posunul na jinou úroveň. Předplatné roste a ohlasy jsou fantastické.",
    name: "Lucie Horáková",
    role: "Šéfredaktorka",
    company: "Respekt",
  },
  {
    text: "Dodání na čas, perfektní komunikace, žádné překvapení. Spolupráce byla naprosto bezproblémová.",
    name: "Tomáš Říha",
    role: "Product Manager",
    company: "Rekola",
  },
  {
    text: "S retainerem náš web každý měsíc roste. Nové funkce, optimalizace, testování. Investice, co se vyplácí.",
    name: "Karolína Matoušová",
    role: "Marketing Director",
    company: "Goodlok",
  },
];

export function Testimonials() {
  return (
    <section id="reference" className="py-24 md:py-32 px-6 section-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#22C55E] uppercase tracking-[0.2em] mb-4">Reference</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Co říkají{" "}<span className="text-gradient">klienti.</span>
          </h2>
        </motion.div>

        {/* * CSS columns = natural masonry without JS, column-fill:balance distributes evenly */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid mb-5 bg-white rounded-2xl p-6 border border-stone-200 card-warm"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#F59E0B]">★</span>
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9A9E] to-[#A18CD1] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
