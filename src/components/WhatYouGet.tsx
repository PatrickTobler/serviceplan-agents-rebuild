"use client";

import { useState } from "react";
import Image from "next/image";

const deliverables = [
  {
    title: "Competitive Analyses",
    description:
      "Who are your real competitors – and where do you stand? Market positions, digital presence, and competitive gaps. Based on Statista, GWI, and social media data. No extra contracts needed.",
    delivery: "~15 minutes",
    cost: "< 20 EUR",
    output: "PDF or PowerPoint",
  },
  {
    title: "GEO & AI Visibility Analysis",
    description:
      "How visible is your company on Google, ChatGPT, and other AI search engines? Local rankings, AI mentions, and visibility gaps vs. competitors. So you know where your customers find you – and where they don't.",
    delivery: "~15 minutes",
    cost: "< 20 EUR",
    output: "PDF or PowerPoint",
  },
  {
    title: "Content & Social Media Audit",
    description:
      "How does your content stack up against the competition? Social media presence, content strategy, and engagement rates – across all relevant competitors.",
    delivery: "~15 minutes",
    cost: "approx. 12 EUR",
    output: "PDF or PowerPoint",
  },
  {
    title: "Market Overview & Trends",
    description:
      "How big is your market and where is it headed? Market volume, growth forecasts, and trend analysis. Every estimate documented and traceable.",
    delivery: "~15 minutes",
    cost: "< 20 EUR",
    output: "PDF or PowerPoint",
  },
  {
    title: "Audience Insights",
    description:
      "Who buys your products – and why? Demographics, attitudes, and purchasing behavior based on global consumer data from GWI and Statista.",
    delivery: "~15 minutes",
    cost: "approx. 15 EUR",
    output: "PDF or PowerPoint",
  },
];

export default function WhatYouGet() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You Get. In Minutes.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Serviceplan Agents deliver ready-to-use results – not raw data, not
            chat logs. Documents you can walk into your next meeting with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Hannah quote + image */}
          <div>
            <div className="glass-card-strong p-6 mb-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/hannah-transp.webp"
                  alt="Hannah"
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <p className="text-sm font-medium mb-1">Hannah</p>
                  <p className="text-sm text-muted italic">
                    &ldquo;I get excited when high-quality data starts to reveal
                    something true. I get less excited when someone asks me to
                    make weak findings look convincing.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <Image
                src="/images/mask-group.webp"
                alt="Analysis preview"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="flex flex-col gap-2">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card overflow-hidden transition-all ${
                  activeIndex === index ? "border-white/20" : ""
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                >
                  <span
                    className={`text-base font-medium ${activeIndex === index ? "text-foreground" : "text-muted"}`}
                  >
                    {item.title}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`transition-transform ${activeIndex === index ? "rotate-45" : ""}`}
                  >
                    <path
                      d="M10 4V16M4 10H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className={`acc-body ${activeIndex === index ? "open" : ""}`}
                  style={{
                    maxHeight: activeIndex === index ? "300px" : "0",
                  }}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted bg-white/5 rounded-full px-3 py-1.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="6"
                            cy="6"
                            r="5"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                          <path
                            d="M6 3V6L8 8"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                        {item.delivery}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted bg-white/5 rounded-full px-3 py-1.5">
                        {item.cost}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted bg-white/5 rounded-full px-3 py-1.5">
                        {item.output}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
