"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PROJECTS = [
  { name: "Pilsner Urquell", gradient: "from-amber-200 via-yellow-300 to-amber-400", url: "pilsner-urquell.cz" },
  { name: "Economia", gradient: "from-sky-200 via-cyan-300 to-blue-400", url: "economia.cz" },
  { name: "Alma Career", gradient: "from-emerald-200 via-green-300 to-teal-400", url: "almacareer.cz" },
  { name: "Respekt", gradient: "from-red-200 via-rose-300 to-pink-400", url: "respekt.cz" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % PROJECTS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-[#FECDA6]/30 blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF9A9E]/20 blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A18CD1]/15 blur-[150px] animate-float-slow" />

      <div className="relative z-10 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-16">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-stone-200/60 text-xs font-mono text-stone-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
            15+ let · React + TypeScript + Contember
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-stone-900">
            Weby, co{" "}<span className="text-gradient">prodávají.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-stone-500 max-w-lg mb-10 leading-relaxed">
            Pomáháme úspěšným firmám růst díky webům na míru. React, TypeScript, vlastní CMS. Žádný WordPress.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4">
            <a href="#audit"
              className="px-8 py-4 rounded-xl warm-gradient text-white font-bold text-base shadow-lg shadow-[#FF9A9E]/25 hover:shadow-[#FF9A9E]/40 transition-all hover:-translate-y-0.5">
              Chci bezplatný audit webu
            </a>
            <a href="#portfolio"
              className="px-8 py-4 rounded-xl bg-white border border-stone-200 text-stone-700 font-semibold text-base hover:border-stone-300 hover:shadow-md transition-all">
              Podívejte se na reference
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }} className="hidden lg:block">
          <div className="rounded-2xl bg-white shadow-2xl shadow-stone-200/60 border border-stone-200/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-100 bg-stone-50/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-3 py-1.5 text-xs text-stone-400 font-mono text-center border border-stone-100">
                  {PROJECTS[active].url}
                </div>
              </div>
            </div>
            <div className="relative h-80">
              {PROJECTS.map((project, i) => (
                <motion.div key={i} initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <span className="text-white/90 text-3xl font-black">{project.name}</span>
                    <p className="text-white/50 text-sm font-mono mt-2">by manGoweb</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {PROJECTS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${active === i ? "bg-[#FF6B6B] w-6" : "bg-stone-300 w-2"}`} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-stone-300 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
