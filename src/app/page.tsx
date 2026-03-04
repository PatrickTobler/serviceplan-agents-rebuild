import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import ProjectPlanning from "@/components/ProjectPlanning";
import Expertise from "@/components/Expertise";
import AgentTeam from "@/components/AgentTeam";
import Sokosumi from "@/components/Sokosumi";
import Companies from "@/components/Companies";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FreeAnalysis from "@/components/FreeAnalysis";
import FAQ from "@/components/FAQ";
import HouseOfAI from "@/components/HouseOfAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <HowItWorks />
        <WhatYouGet />
        <ProjectPlanning />
        <Expertise />
        <AgentTeam />
        <Sokosumi />
        <Companies />
        <Pricing />
        <Comparison />
        <FreeAnalysis />
        <FAQ />
        <HouseOfAI />
      </main>
      <Footer />
    </>
  );
}
