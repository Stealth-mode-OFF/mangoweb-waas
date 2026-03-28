"use client";

const CLIENTS = [
  "Pilsner Urquell", "Economia", "Alma Career", "Respekt",
  "Škoda Auto", "Rekola", "Goodlok",
];

export function LogoBar() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 border-y border-stone-200/60 overflow-hidden">
      <p className="text-center text-xs font-mono text-stone-400 uppercase tracking-[0.2em] mb-8">
        Důvěřuje nám 150+ firem
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10" />
        <div className="flex animate-marquee">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="shrink-0 mx-8 md:mx-12 text-stone-300 font-bold text-lg md:text-xl tracking-wide hover:text-stone-500 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
