"use client";

import { motion } from "motion/react";

const CASE_STUDIES = [
  {
    client: "Pilsner Urquell",
    type: "Brand Website",
    desc: "Kompletní redesign brandového webu pro ikonickou českou značku. React + Contember CMS s animacemi na úrovni luxury brandů.",
    metrics: ["Lighthouse 97", "+45% engagement", "0.8s load"],
    gradient: "from-amber-200 via-yellow-300 to-amber-400",
    span: "md:col-span-2 md:row-span-2",
    imgH: "h-64",
  },
  {
    client: "Economia",
    type: "Mediální platforma",
    desc: "Modernizace digitální platformy pro HN a Aktuálně.cz. 3M+ čtenářů měsíčně.",
    metrics: ["3M+ čtenářů", "-60% load time"],
    gradient: "from-sky-200 via-cyan-300 to-blue-400",
    span: "",
    imgH: "h-44",
  },
  {
    client: "Alma Career",
    type: "Job Portal UX",
    desc: "Redesign kariérního portálu s důrazem na konverzi. Moderní React stack.",
    metrics: ["+35% aplikací", "Lighthouse 92"],
    gradient: "from-emerald-200 via-green-300 to-teal-400",
    span: "",
    imgH: "h-44",
  },
  {
    client: "Respekt",
    type: "Digitální magazín",
    desc: "Premium čtenářský zážitek pro nejrespektovanější český týdeník. Předplatné roste o 50%.",
    metrics: ["+50% předplatitelů", "Lighthouse 96"],
    gradient: "from-red-200 via-rose-300 to-pink-400",
    span: "md:col-span-2",
    imgH: "h-48",
  },
  {
    client: "Rekola",
    type: "Bikesharing Web",
    desc: "Web a registrační flow pro pražský bikesharing. Konverze na prvním místě.",
    metrics: ["+28% registrací"],
    gradient: "from-lime-200 via-green-300 to-emerald-400",
    span: "",
    imgH: "h-44",
  },
];

export function CaseStudies() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900">
            Projekty, co{" "}<span className="text-gradient">mluví za nás.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl bg-white border border-stone-200 overflow-hidden card-warm ${cs.span}`}
            >
              <div className={`bg-gradient-to-br ${cs.gradient} ${cs.imgH} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white/60 text-3xl font-black group-hover:scale-105 transition-transform duration-500">
                  {cs.client}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-[#7C3AED] uppercase tracking-wider bg-[#7C3AED]/10 px-2 py-0.5 rounded-full">
                  {cs.type}
                </span>
                <h3 className="text-xl font-black text-stone-900 mt-3 mb-2">{cs.client}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.metrics.map((m, j) => (
                    <span key={j} className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
