"use client";

import { motion } from "motion/react";

const CLIENTS = [
  "Pilsner Urquell", "Economia", "Alma Career", "Respekt",
  "Skoda Auto", "Rekola", "Goodlok",
];

export function LogoBar() {
  return (
    <section className="py-12 border-y border-zinc-900">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-6">
          Duveruje nam 150+ firem
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {CLIENTS.map((name, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-zinc-600 font-bold text-sm md:text-base tracking-wide hover:text-zinc-400 transition-colors cursor-default">
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
