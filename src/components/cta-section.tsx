"use client";

import { motion } from "motion/react";

export function CTASection() {
  return (
    <section id="audit" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 warm-gradient opacity-[0.07]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF9A9E]/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#A18CD1]/10 blur-[100px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Získejte{" "}<span className="text-gradient">bezplatný audit</span>{" "}vašeho webu.
          </h2>
          <p className="text-stone-500 text-lg">
            Za 48 hodin víte přesně, kde váš web ztrácí zákazníky. Bez závazků.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 max-w-lg mx-auto border border-stone-200 shadow-xl shadow-stone-200/30"
          action="https://formspree.io/f/placeholder"
          method="POST"
        >
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 block">Jméno</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jan Novák"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-300 focus:border-[#FF6B6B]/50 focus:ring-2 focus:ring-[#FF6B6B]/10 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="jan@firma.cz"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-300 focus:border-[#FF6B6B]/50 focus:ring-2 focus:ring-[#FF6B6B]/10 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 block">URL vašeho webu</label>
              <input
                type="url"
                name="website"
                required
                placeholder="https://firma.cz"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-300 focus:border-[#FF6B6B]/50 focus:ring-2 focus:ring-[#FF6B6B]/10 focus:outline-none transition-all"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-xl warm-gradient text-white font-bold text-base shadow-lg shadow-[#FF9A9E]/20 hover:shadow-[#FF9A9E]/40 transition-all active:scale-[0.98] hover:-translate-y-0.5"
          >
            Chci bezplatný audit →
          </button>
          <p className="text-[10px] text-stone-400 text-center mt-3 font-mono">
            Odpovíme do 48 hodin. Žádné závazky.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
