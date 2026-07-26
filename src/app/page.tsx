import { AboutFounder } from "@/components/sections/AboutFounder";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { UseCases } from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <AboutFounder />
      <Contact />
    </>
  );
}
