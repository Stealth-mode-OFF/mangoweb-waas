"use client";

import { motion } from "motion/react";

export function EAA() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#F59E0B]/20 bg-gradient-to-br from-[#F59E0B]/10 via-[#FECDA6]/10 to-transparent p-8 md:p-12 text-center"
        >
          <span className="text-4xl mb-4 block">⚖️</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
            Od června 2025 váš web{" "}
            <span className="text-[#F59E0B]">musí</span> splňovat zákon.
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            European Accessibility Act (EAA) vyžaduje WCAG 2.1 AA pro všechny
            firmy s 10+ zaměstnanci. Nesplnění = pokuta. Splňujete?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#audit"
              className="px-6 py-3 rounded-xl bg-[#F59E0B] text-white font-bold hover:bg-[#D97706] transition-colors shadow-lg shadow-[#F59E0B]/20"
            >
              Zkontrolovat zdarma
            </a>
            <a
              href="https://eur-lex.europa.eu/eli/dir/2019/882/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white border border-stone-200 text-stone-600 font-semibold hover:border-stone-300 transition-colors"
            >
              Více o EAA →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
