"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-black tracking-tight">manGoweb</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-zinc-400 hover:text-white transition-colors">Služby</a>
          <a href="#proces" className="text-sm text-zinc-400 hover:text-white transition-colors">Proces</a>
          <a href="#cenik" className="text-sm text-zinc-400 hover:text-white transition-colors">Ceník</a>
          <a href="#reference" className="text-sm text-zinc-400 hover:text-white transition-colors">Reference</a>
        </div>
        <a href="#audit" className="px-4 py-2 rounded-lg aurora text-white text-sm font-bold shadow-lg shadow-cyan-500/20">
          Audit zdarma
        </a>
      </div>
    </nav>
  );
}
