"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Hannah deliver results?",
    answer:
      "Hannah delivers results directly to your email inbox as a structured, professional report. You can also receive results via Microsoft Teams or through the Sokosumi dashboard. Each delivery includes sources, data visualizations, and actionable recommendations.",
  },
  {
    question: "What data sources does Hannah use?",
    answer:
      "Hannah accesses premium data sources including Statista, GWI (Global Web Index), DataForSEO, press databases, social media APIs, and proprietary Serviceplan research. All data sources are bundled in your subscription \u2013 no separate contracts needed.",
  },
  {
    question: "How long does a competitive analysis take?",
    answer:
      "A standard competitive analysis takes approximately 15-20 minutes. More complex research requests with multiple competitors or deeper analysis may take up to 30 minutes. You\u2019ll always receive a time estimate before Hannah starts working.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All Serviceplan Agents run entirely in a German Microsoft Azure data center. Your data is processed and stored exclusively in Europe, fully GDPR compliant and EU AI Act ready. We never use your data to train models.",
  },
  {
    question: "Can I try Hannah before committing?",
    answer:
      "Yes! Start with our free tier \u2013 200 credits, no credit card required. That\u2019s enough for one full competitive analysis to see exactly what Hannah can do for your team.",
  },
  {
    question:
      "What\u2019s the difference between Hannah, Elena, and Alex?",
    answer:
      "Each agent specializes in a different area. Hannah handles marketing research and competitive analysis. Elena (coming Q3 2026) manages project planning and task breakdown. Alex (coming Q4 2026) focuses on coding, data visualization, and dashboards. They\u2019re designed to work together as your AI marketing team.",
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
                  <div key={index} className="what-i-do">
                    <div
                      className={`acc-item${openIndex === index ? " active" : ""}`}
                    >
                      <div
                        className="acc-head"
                        onClick={() => toggle(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="heading-style-h5">{faq.question}</div>
                        <div className="toggle-arrow">
                          <img
                            src="/images/Plus.svg"
                            loading="lazy"
                            alt=""
                            className="plus-icon"
                          />
                        </div>
                      </div>
                      <div
                        className="acc-body"
                        style={{
                          display: openIndex === index ? "block" : "none",
                        }}
                      >
                        <div className="acc-body-2">
                          <div className="spacer-small"></div>
                          <div className="text-size-regular">{faq.answer}</div>
                        </div>
                      </div>
                    </div>
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
