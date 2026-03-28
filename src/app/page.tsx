import { Hero } from "@/components/hero";
import { LogoBar } from "@/components/logo-bar";
import { Problem } from "@/components/problem";
import { Process } from "@/components/process";
import { Features } from "@/components/features";
import { Metrics } from "@/components/metrics";
import { EAA } from "@/components/eaa";
import { Pricing } from "@/components/pricing";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Problem />
      <Process />
      <Features />
      <Metrics />
      <EAA />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </>
  );
}
