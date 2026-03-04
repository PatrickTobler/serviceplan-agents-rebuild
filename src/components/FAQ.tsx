"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are Serviceplan Agents?",
    answer:
      "Serviceplan Agents are AI partners with real domain expertise – built by Plan.Net Studios (Serviceplan Group). Each agent has a clear role and works on tasks independently. They communicate via email and Teams, like remote coworkers. Hannah covers marketing research, Elena covers project planning and operations. More agents are in the works.",
  },
  {
    question:
      "What makes Serviceplan Agents different from ChatGPT or other AI tools?",
    answer:
      "Generic AI tools are all-purpose assistants that need constant prompting and forget you between sessions. Serviceplan Agents are specialists with their own point of view. Hannah won't sugarcoat weak data, and Elena won't let unrealistic timelines slide. They tap into premium data sources like Statista and GWI, have active memory that learns your business over time, and they send you formatted documents – not chat responses. 50+ years of Serviceplan marketing expertise are baked into how they think.",
  },
  {
    question: "How does the email workflow work?",
    answer:
      "You send your request in plain language via email. The agent asks follow-up questions if needed, independently researches the relevant data sources, and sends back a formatted document: PDF, PowerPoint, or Excel. Most requests are done within 30 minutes. You can also use Microsoft Teams.",
  },
  {
    question: "What data sources are available?",
    answer:
      "Statista (market data and statistics), GWI (audience insights and consumer behavior), press agencies (news research), social media platforms (engagement and content analysis), and search engine data (SEO and visibility analysis). All sources are included in your plan – no separate contracts required.",
  },
  {
    question: "Are Serviceplan Agents GDPR-compliant?",
    answer:
      "Yes. All agents run entirely in a German Microsoft Azure data center. Data is processed and stored in Europe. The architecture is EU AI Act-compliant by design, with full traceability of every agent decision via the Masumi protocol.",
  },
  {
    question: "How fast are results delivered?",
    answer:
      "A typical competitive analysis takes 15–20 minutes. More complex research involving multiple data sources takes 20–30 minutes. Your agent pings you by email as soon as the results are ready.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-base font-medium">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
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
                className={`acc-body ${openIndex === index ? "open" : ""}`}
                style={{
                  maxHeight: openIndex === index ? "400px" : "0",
                }}
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
