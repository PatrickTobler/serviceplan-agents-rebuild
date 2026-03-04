"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are Serviceplan Agents?",
    answer:
      "Serviceplan Agents are AI partners with real domain expertise \u2013 built by Plan.Net Studios (Serviceplan Group). Each agent has a clear role and works on tasks independently. They communicate via email and Teams, like remote coworkers. Hannah covers marketing research, Elena covers project planning and operations. More agents are in the works.",
  },
  {
    question:
      "What makes Serviceplan Agents different from ChatGPT or other AI tools?",
    answer:
      "Generic AI tools are all-purpose assistants that need constant prompting and forget you between sessions. Serviceplan Agents are specialists with their own point of view. Hannah won\u2019t sugarcoat weak data, and Elena won\u2019t let unrealistic timelines slide. They tap into premium data sources like Statista and GWI, have active memory that learns your business over time, and they send you formatted documents \u2013 not chat responses. 50+ years of Serviceplan marketing expertise are baked into how they think.",
  },
  {
    question: "How does the email workflow work?",
    answer:
      "You send your request in plain language via email. The agent asks follow-up questions if needed, independently researches the relevant data sources, and sends back a formatted document: PDF, PowerPoint, or Excel. Most requests are done within 30 minutes. You can also use Microsoft Teams.",
  },
  {
    question: "What data sources are available?",
    answer:
      "Statista (market data and statistics), GWI (audience insights and consumer behavior), press agencies (news research), social media platforms (engagement and content analysis), and search engine data (SEO and visibility analysis). All sources are included in your plan \u2013 no separate contracts required.",
  },
  {
    question: "Are Serviceplan Agents GDPR-compliant?",
    answer:
      "Yes. All agents run entirely in a German Microsoft Azure data center. Data is processed and stored in Europe. The architecture is EU AI Act-compliant by design, with full traceability of every agent decision via the Masumi protocol.",
  },
  {
    question: "How fast are results delivered?",
    answer:
      "A typical competitive analysis takes 15\u201320 minutes. More complex research involving multiple data sources takes 20\u201330 minutes. Your agent pings you by email as soon as the results are ready.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="section-wrapper-copy">
      <div className="div-block-35">
        <div className="padding-global">
          <div className="padding-section-large">
            <div className="container-large">
              <div className="header-wrapper">
                <h2>
                  <strong>Frequently Asked Questions</strong>
                </h2>
              </div>
              <div className="what-outer">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="what-i-do w-dropdown"
                    data-delay="0"
                    data-hover="false"
                  >
                    <div
                      className={`question-block${index === 0 ? " top" : ""} w-dropdown-toggle`}
                      onClick={() => toggle(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="question-inner">
                        <h5
                          style={{ color: "rgb(0,0,0)" }}
                          className="what-question"
                        >
                          {faq.question}
                        </h5>
                      </div>
                      <img
                        loading="lazy"
                        alt=""
                        src="/images/Icon.svg"
                        className="plus-icon"
                        style={{
                          transform:
                            openIndex === index
                              ? "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(180deg) skew(0, 0)"
                              : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                        }}
                      />
                    </div>
                    <nav
                      className="answer-block w-dropdown-list"
                      style={{
                        height: openIndex === index ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      <div className="what-answer-block">
                        <p className="body-large text-color-light">
                          {faq.answer}
                        </p>
                      </div>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
