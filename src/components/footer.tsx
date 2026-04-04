// * Footer — final CTA + company info + legal (IČO required by Czech law for business sites)
export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-black mb-6">
            Pojďme spolu vytvořit něco{" "}
            <span className="text-gradient-warm">výjimečného.</span>
          </h3>
          <a
            href="#audit"
            className="inline-block px-8 py-4 rounded-xl warm-gradient text-white font-bold shadow-lg shadow-[#FF9A9E]/20 hover:shadow-[#FF9A9E]/40 transition-all hover:-translate-y-0.5"
          >
            Začít bezplatným auditem →
          </a>
        </div>

        <div className="beam w-full mb-12" />

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-black mb-2">
              man<span className="text-[#FF6B6B]">G</span>oweb
            </h3>
            <p className="text-xs text-stone-400 font-mono">Weby, co prodávají. Od 2010.</p>
            <p className="text-xs text-stone-400 font-mono mt-2">
              K Rovinám 538, 158 00 Praha 5
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-3">
                Kontakt
              </p>
              <p className="text-sm text-stone-300">info@mangoweb.cz</p>
              <p className="text-sm text-stone-300">+420 737 763 307</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-3">
                Odkazy
              </p>
              <a href="https://mangoweb.cz" className="text-sm text-stone-300 hover:text-[#FF6B6B] transition-colors block">
                mangoweb.cz
              </a>
              <a href="https://contember.com" className="text-sm text-stone-300 hover:text-[#FF6B6B] transition-colors block">
                contember.com
              </a>
              <a href="https://github.com/contember" className="text-sm text-stone-300 hover:text-[#FF6B6B] transition-colors block">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="beam w-full my-8" />
        <p className="text-[10px] font-mono text-stone-600 text-center">
          manGoweb, s.r.o. | IČO 24694401 | 2010–2026
        </p>
      </div>
    </footer>
  );
}
