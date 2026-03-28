"use client";

import { motion } from "motion/react";

export function CTASection() {
  return (
    <section id="audit" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Ziskejte <span className="text-gradient">bezplatny audit</span> vaseho webu.
          </h2>
          <p className="text-zinc-400 text-lg">
            Za 48 hodin vite presne, kde vas web ztraci zakazniky. Bez zavazku.
          </p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 md:p-10 max-w-lg mx-auto"
          action="https://formspree.io/f/placeholder" method="POST">
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">Jmeno</label>
              <input type="text" name="name" required placeholder="Jan Novak"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus:border-cyan-500/50 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">Email</label>
              <input type="email" name="email" required placeholder="jan@firma.cz"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus:border-cyan-500/50 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">URL vaseho webu</label>
              <input type="url" name="website" required placeholder="https://firma.cz"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus:border-cyan-500/50 focus:outline-none transition-colors" />
            </div>
          </div>
          <button type="submit"
            className="w-full mt-6 py-4 rounded-xl aurora text-white font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-[0.98]">
            Chci bezplatny audit →
          </button>
          <p className="text-[10px] text-zinc-600 text-center mt-3 font-mono">Odpovime do 48 hodin. Zadne zavazky.</p>
        </motion.form>
      </div>
    </section>
  );
}
