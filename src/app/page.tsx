import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoBar } from "@/components/logo-bar";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Features } from "@/components/features";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";
import { EAA } from "@/components/eaa";
import { Pricing } from "@/components/pricing";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <CaseStudies />
      <Process />
      <Features />
      <Metrics />
      <Testimonials />
      <EAA />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </>
  );
}
