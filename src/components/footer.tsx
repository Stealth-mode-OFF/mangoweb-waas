export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-black mb-2">manGoweb</h3>
            <p className="text-xs text-zinc-500 font-mono">Weby, co prodavaji. Od 2010.</p>
            <p className="text-xs text-zinc-600 font-mono mt-2">K Rovinam 538, 158 00 Praha 5</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">Kontakt</p>
              <p className="text-sm text-zinc-400">info@mangoweb.cz</p>
              <p className="text-sm text-zinc-400">+420 737 763 307</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">Odkazy</p>
              <a href="https://mangoweb.cz" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors block">mangoweb.cz</a>
              <a href="https://contember.com" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors block">contember.com</a>
              <a href="https://github.com/contember" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors block">GitHub</a>
            </div>
          </div>
        </div>
        <div className="beam w-full my-8" />
        <p className="text-[10px] font-mono text-zinc-700 text-center">
          manGoweb, s.r.o. | ICO 24694401 | 2010-2026
        </p>
      </div>
    </footer>
  );
}
