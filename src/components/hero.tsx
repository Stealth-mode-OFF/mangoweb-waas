"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/8 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-[150px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-cyan-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          15+ let zkusenosti | React + TypeScript + Contember
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6">
          Weby, co{" "}
          <span className="text-gradient">prodavaji.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pomahame uspesnym firmam rust diky webum na miru.
          React, TypeScript, vlastni CMS. Zadny WordPress.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#audit"
            className="px-8 py-4 rounded-xl aurora text-white font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
            Chci bezplatny audit webu
          </a>
          <a href="#reference"
            className="px-8 py-4 rounded-xl glass text-zinc-300 font-semibold text-base hover:text-white hover:border-zinc-600 transition-colors">
            Podivejte se na reference
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-16">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border border-zinc-700 mx-auto flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-zinc-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
