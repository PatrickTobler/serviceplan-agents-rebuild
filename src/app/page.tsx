import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import AgentTeam from "@/components/AgentTeam";
import Sokosumi from "@/components/Sokosumi";
import Companies from "@/components/Companies";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import HouseOfAI from "@/components/HouseOfAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="global-styles w-embed"></div>
      <div className="main-wrapper">
        <Navbar />
        <Hero />
        <TrustIndicators />
        <HowItWorks />
        <WhatYouGet />
        <AgentTeam />
        <Sokosumi />
        <Companies />
        <Pricing />
        <Comparison />
        <FAQ />
        <HouseOfAI />
        <Footer />
      </div>
    </div>
  );
}
