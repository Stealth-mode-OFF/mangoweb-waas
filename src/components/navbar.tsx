// * Floating navbar — shrinks on scroll, glassmorphism effect, animated CTA border
"use client";

import { useState, useEffect } from "react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const NAV_LINKS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proces", label: "Proces" },
  { href: "#cenik", label: "Ceník" },
  { href: "#reference", label: "Reference" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // * 50px threshold before nav shrinks — keeps it full-width until user clearly scrolls
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[90%] max-w-4xl" : "w-[95%] max-w-5xl"
      }`}
    >
      <div
        className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "nav-glass shadow-lg shadow-black/[0.03]"
            : "bg-white/60 backdrop-blur-md border border-white/40"
        }`}
      >
        <a href="#" className="text-lg font-black tracking-tight text-stone-900">
          man<span className="text-[#FF6B6B]">G</span>oweb
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:block">
          {/* * Animated gradient border draws eye to CTA — auto-rotates so it moves even without hover */}
          <BorderRotate
            animationMode="auto-rotate"
            animationSpeed={3}
            gradientColors={{ primary: "#FF9A9E", secondary: "#A18CD1", accent: "#FECDA6" }}
            borderWidth={2}
            borderRadius={12}
            backgroundColor={scrolled ? "#FAFAF9" : "#ffffff"}
          >
            <a
              href="#audit"
              className="block px-5 py-2 text-sm font-bold text-stone-900 hover:text-[#FF6B6B] transition-colors"
            >
              Bezplatný audit
            </a>
          </BorderRotate>
        </div>

        <button
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`w-full h-0.5 bg-stone-700 transition-all origin-center ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`w-full h-0.5 bg-stone-700 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-stone-700 transition-all origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-2 p-4 nav-glass rounded-2xl md:hidden shadow-lg">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm text-stone-600 hover:text-stone-900 font-medium">
              {link.label}
            </a>
          ))}
          <a href="#audit" onClick={() => setMobileOpen(false)}
            className="block mt-2 py-3 text-center rounded-xl warm-gradient text-white font-bold text-sm">
            Bezplatný audit
          </a>
        </div>
      )}
    </nav>
  );
}
