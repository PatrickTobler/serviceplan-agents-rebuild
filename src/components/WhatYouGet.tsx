"use client";

import { useState } from "react";

const accordionItems = [
  {
    title: "Competitive Analyses",
    titleTag: "h3" as const,
    text: "Who are your real competitors – and where do you stand? Market positions, digital presence, and competitive gaps. Based on Statista, GWI, and social media data. No extra contracts needed. ",
    delivery: "~15 minutes ",
    cost: "< 20 EUR ",
    output: "GEO & AI Visibility Analysis",
    extraClass: "",
  },
  {
    title: "GEO & AI Visibility Analysis ",
    titleTag: "h4" as const,
    text: "How visible is your company on Google, ChatGPT, and other AI search engines? Local rankings, AI mentions, and visibility gaps vs. competitors. So you know where your customers find you – and where they don't. ",
    delivery: "~15 minutes ",
    cost: "< 20 EUR ",
    output: "PDF or PowerPoint",
    extraClass: "",
  },
  {
    title: "Content & Social Media Audit ",
    titleTag: "h4" as const,
    text: "How does your content stack up against the competition? Social media presence, content strategy, and engagement rates – across all relevant competitors. ",
    delivery: "~15 minutes ",
    cost: "approx. 12 EUR ",
    output: "PDF or PowerPoint",
    extraClass: "",
  },
  {
    title: "Market Overview & Trends ",
    titleTag: "h4" as const,
    text: "How big is your market and where is it headed? Market volume, growth forecasts, and trend analysis. Every estimate documented and traceable. ",
    delivery: "~15 minutes ",
    cost: "< 20 EUR ",
    output: "PDF or PowerPoint",
    extraClass: "bottom",
  },
  {
    title: "Audience Insights ",
    titleTag: "h4" as const,
    text: "Who buys your products – and why? Demographics, attitudes, and purchasing behavior based on global consumer data from GWI and Statista. ",
    delivery: "~15 minutes ",
    cost: "approx. 15 EUR ",
    output: "PDF or PowerPoint",
    extraClass: "bottom",
  },
];

const ToggleArrowSvg = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M54.5003 27.5C54.5003 42.4116 42.412 54.4999 27.5003 54.5C12.5886 54.5 0.500336 42.4117 0.500337 27.5C0.500338 12.5883 12.5886 0.500001 27.5003 0.500001C42.412 0.500093 54.5003 12.5884 54.5003 27.5Z"
      fill="white"
      stroke="#222222"
    />
    <path
      d="M28.2503 22.7109C28.2503 22.2967 27.9146 21.9609 27.5003 21.9609C27.0861 21.9609 26.7503 22.2967 26.7503 22.7109L27.5003 22.7109L28.2503 22.7109ZM26.97 32.8185C27.2629 33.1114 27.7378 33.1114 28.0307 32.8185L32.8036 28.0456C33.0965 27.7527 33.0965 27.2778 32.8036 26.9849C32.5107 26.692 32.0359 26.692 31.743 26.9849L27.5003 31.2276L23.2577 26.9849C22.9648 26.692 22.4899 26.692 22.197 26.9849C21.9041 27.2778 21.9041 27.7527 22.197 28.0456L26.97 32.8185ZM27.5003 22.7109L26.7503 22.7109L26.7503 32.2882L27.5003 32.2882L28.2503 32.2882L28.2503 22.7109L27.5003 22.7109Z"
      fill="black"
    />
  </svg>
);

export default function WhatYouGet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="section-what-you-get">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="div-block-13">
              <div className="header-wrapper">
                <h2>What You Get. In Minutes.</h2>
                <div className="sub-text-heading">
                  Serviceplan Agents deliver ready-to-use results – not raw data,
                  not chat logs. Documents you can walk into your next meeting
                  with.
                </div>
              </div>
              <div className="grid-container-2x1">
                <div className="elena-wrap-with-text">
                  <img
                    src="/images/hannah.webp"
                    loading="lazy"
                    sizes="(max-width: 2142px) 100vw, 2142px, 100vw"
                    alt=""
                    className="elena-bg-image"
                  />
                  <div className="glass-wrapper">
                    <div className="text-size-regular text-align-center">
                      &ldquo;I get excited when high-quality data starts to
                      reveal something true. I get less excited when someone asks
                      me to make weak findings look convincing.&rdquo;
                    </div>
                  </div>
                </div>
                <div className="faq-item-wrap">
                  {accordionItems.map((item, index) => {
                    const isActive = activeIndex === index;
                    const accItemClass = [
                      "acc-item",
                      isActive ? "active" : "",
                      item.extraClass,
                    ]
                      .filter(Boolean)
                      .join(" ");

                    const TitleTag = item.titleTag;

                    return (
                      <div key={item.title} className={accItemClass}>
                        <div
                          className={`acc-head${isActive ? " active" : ""}`}
                          onClick={() => handleToggle(index)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleToggle(index);
                            }
                          }}
                        >
                          <div className="q-wrapper">
                            <TitleTag className="faq-question">
                              {item.title}
                            </TitleTag>
                          </div>
                          <div
                            className={`toggle-arrow${isActive ? " rotate" : ""} w-embed`}
                          >
                            <ToggleArrowSvg />
                          </div>
                        </div>
                        <div
                          className={`acc-body${isActive ? " active" : ""}`}
                        >
                          <div>
                            <p className="acc-text">{item.text}</p>
                            <div className="div-block-48"></div>
                            <div className="spacer-medium"></div>
                            <div className="faq-grid">
                              <div>
                                <div className="text-size-regular is-gray">
                                  Delivery
                                </div>
                                <div className="spacer-small"></div>
                                <div className="text-size-regular text-weight-medium">
                                  {item.delivery}
                                </div>
                              </div>
                              <div>
                                <div className="text-size-regular is-gray">
                                  Cost
                                </div>
                                <div className="spacer-small"></div>
                                <div className="text-size-regular text-weight-medium">
                                  {item.cost}
                                </div>
                              </div>
                              <div>
                                <div className="text-size-regular is-gray">
                                  Output
                                </div>
                                <div className="spacer-small"></div>
                                <div className="text-size-regular text-weight-medium">
                                  {item.output}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="spacer-large"></div>
              <div className="elena-content-wrap hide">
                <div className="div-block-14">
                  <div className="w-embed">
                    <svg
                      width="141"
                      height="56"
                      viewBox="0 0 141 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-8.77008e-05 55.02V0.420017H34.1599V4.20002H4.19991V16.31H34.1599V20.09H4.19991V51.24H34.1599V55.02H-8.77008e-05ZM39.1726 55.02V0.420017H43.3726V51.24H49.8826V55.02H39.1726ZM52.9839 55.02V0.420017H87.1439V4.20002H57.1839V16.31H87.1439V20.09H57.1839V51.24H87.1439V55.02H52.9839ZM118.267 14.77C118.267 8.68002 113.367 3.78002 107.277 3.78002C101.257 3.78002 96.3566 8.68002 96.3566 14.77V55.02H92.1566V0.420017H96.3566V5.32002C98.9466 2.03002 102.937 1.85966e-05 107.557 1.85966e-05C115.957 1.85966e-05 122.467 6.51002 122.467 14.49V55.02H118.267V14.77ZM128.321 55.02V0.420017H140.781V55.02H136.581V39.48C135.951 39.69 135.251 39.83 134.551 39.83C133.851 39.83 133.151 39.69 132.521 39.48V55.02H128.321ZM132.521 34.02C132.521 35.14 133.361 36.05 134.551 36.05C135.671 36.05 136.581 35.14 136.581 34.02C136.581 32.9 135.671 31.99 134.551 31.99C133.361 31.99 132.521 32.9 132.521 34.02ZM132.521 28.56C133.151 28.35 133.851 28.21 134.551 28.21C135.251 28.21 135.951 28.35 136.581 28.56V4.20002H132.521V28.56Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="spacer-medium"></div>
                  <h3 className="heading-style-h3">
                    Project Planning &amp; Operations
                  </h3>
                  <div className="spacer-small"></div>
                  <div className="text-size-regular is-white">
                    Elena breaks down complex initiatives into executable
                    workstreams. She defines scope, sequence, and dependencies —
                    and identifies risks before they become problems.
                  </div>
                  <div className="spacer-medium"></div>
                  <a href="#" className="button is-red w-button">
                    Get your free analysis
                  </a>
                </div>
                <img
                  src="/images/elena.png"
                  loading="lazy"
                  sizes="100vw"
                  alt=""
                  className="elena-mid-img"
                />
              </div>
              <div className="elena-content">
                <div className="div-block-14">
                  <div className="text-icon w-embed">
                    <svg
                      width="141"
                      height="56"
                      viewBox="0 0 141 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-8.77008e-05 55.02V0.420017H34.1599V4.20002H4.19991V16.31H34.1599V20.09H4.19991V51.24H34.1599V55.02H-8.77008e-05ZM39.1726 55.02V0.420017H43.3726V51.24H49.8826V55.02H39.1726ZM52.9839 55.02V0.420017H87.1439V4.20002H57.1839V16.31H87.1439V20.09H57.1839V51.24H87.1439V55.02H52.9839ZM118.267 14.77C118.267 8.68002 113.367 3.78002 107.277 3.78002C101.257 3.78002 96.3566 8.68002 96.3566 14.77V55.02H92.1566V0.420017H96.3566V5.32002C98.9466 2.03002 102.937 1.85966e-05 107.557 1.85966e-05C115.957 1.85966e-05 122.467 6.51002 122.467 14.49V55.02H118.267V14.77ZM128.321 55.02V0.420017H140.781V55.02H136.581V39.48C135.951 39.69 135.251 39.83 134.551 39.83C133.851 39.83 133.151 39.69 132.521 39.48V55.02H128.321ZM132.521 34.02C132.521 35.14 133.361 36.05 134.551 36.05C135.671 36.05 136.581 35.14 136.581 34.02C136.581 32.9 135.671 31.99 134.551 31.99C133.361 31.99 132.521 32.9 132.521 34.02ZM132.521 28.56C133.151 28.35 133.851 28.21 134.551 28.21C135.251 28.21 135.951 28.35 136.581 28.56V4.20002H132.521V28.56Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="spacer-medium"></div>
                  <h3 className="heading-style-h3">
                    Project Planning &amp; Operations
                  </h3>
                  <div className="spacer-small"></div>
                  <div className="text-size-regular is-white">
                    Elena turns complex initiatives into actionable work
                    packages. She defines scope, sequence, and dependencies – and
                    spots risks before they become problems.
                  </div>
                  <div className="spacer-medium"></div>
                  <a href="#free-analysis" className="button is-red w-button">
                    Get your free analysis &gt; Where should things go?
                  </a>
                </div>
                <div className="div-block-50">
                  <img
                    src="/images/elena.png"
                    loading="lazy"
                    sizes="(max-width: 720px) 100vw, 720px, 100vw"
                    alt=""
                    className="elena-mid-img"
                  />
                  <div className="div-block-51-copy"></div>
                  <div className="div-block-51"></div>
                </div>
                <div className="glass-chip teams">
                  <div className="icon w-embed">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1279)">
                        <g clipPath="url(#clip1_1_1279)">
                          <path
                            d="M18.9999 15.9861H30.9999C34.3136 15.9861 36.9999 18.6724 36.9999 21.9861V31.9861C36.9999 35.2998 34.3136 37.9861 30.9999 37.9861C27.6862 37.9861 24.9999 35.2998 24.9999 31.9861V21.9861C24.9999 18.6724 22.3136 15.9861 18.9999 15.9861Z"
                            fill="url(#paint0_radial_1_1279)"
                          />
                          <path
                            d="M4.99988 19.9861C4.99988 16.6724 7.6862 13.9861 10.9999 13.9861H18.9999C22.3136 13.9861 24.9999 16.6724 24.9999 19.9861V31.9861C24.9999 35.2998 27.6862 37.9861 30.9999 37.9861L14.9998 37.986C9.477 37.986 4.99988 33.5089 4.99988 27.986V19.9861Z"
                            fill="url(#paint1_radial_1_1279)"
                          />
                          <path
                            d="M4.99988 19.9861C4.99988 16.6724 7.6862 13.9861 10.9999 13.9861H18.9999C22.3136 13.9861 24.9999 16.6724 24.9999 19.9861V31.9861C24.9999 35.2998 27.6862 37.9861 30.9999 37.9861L14.9998 37.986C9.477 37.986 4.99988 33.5089 4.99988 27.986V19.9861Z"
                            fill="url(#paint2_linear_1_1279)"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M4.99988 19.9861C4.99988 16.6724 7.6862 13.9861 10.9999 13.9861H18.9999C22.3136 13.9861 24.9999 16.6724 24.9999 19.9861V31.9861C24.9999 35.2998 27.6862 37.9861 30.9999 37.9861L14.9998 37.986C9.477 37.986 4.99988 33.5089 4.99988 27.986V19.9861Z"
                            fill="url(#paint3_radial_1_1279)"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M29.9999 13.9861C32.7613 13.9861 34.9999 11.7475 34.9999 8.98608C34.9999 6.22468 32.7613 3.98608 29.9999 3.98608C27.2385 3.98608 24.9999 6.22468 24.9999 8.98608C24.9999 11.7475 27.2385 13.9861 29.9999 13.9861Z"
                            fill="url(#paint4_radial_1_1279)"
                          />
                          <path
                            d="M29.9999 13.9861C32.7613 13.9861 34.9999 11.7475 34.9999 8.98608C34.9999 6.22468 32.7613 3.98608 29.9999 3.98608C27.2385 3.98608 24.9999 6.22468 24.9999 8.98608C24.9999 11.7475 27.2385 13.9861 29.9999 13.9861Z"
                            fill="url(#paint5_radial_1_1279)"
                            fillOpacity="0.46"
                          />
                          <path
                            d="M29.9999 13.9861C32.7613 13.9861 34.9999 11.7475 34.9999 8.98608C34.9999 6.22468 32.7613 3.98608 29.9999 3.98608C27.2385 3.98608 24.9999 6.22468 24.9999 8.98608C24.9999 11.7475 27.2385 13.9861 29.9999 13.9861Z"
                            fill="url(#paint6_radial_1_1279)"
                            fillOpacity="0.4"
                          />
                          <path
                            d="M14.9999 11.9861C18.3136 11.9861 20.9999 9.29978 20.9999 5.98608C20.9999 2.67237 18.3136 -0.013916 14.9999 -0.013916C11.6862 -0.013916 8.99988 2.67237 8.99988 5.98608C8.99988 9.29978 11.6862 11.9861 14.9999 11.9861Z"
                            fill="url(#paint7_radial_1_1279)"
                          />
                          <path
                            d="M14.9999 11.9861C18.3136 11.9861 20.9999 9.29978 20.9999 5.98608C20.9999 2.67237 18.3136 -0.013916 14.9999 -0.013916C11.6862 -0.013916 8.99988 2.67237 8.99988 5.98608C8.99988 9.29978 11.6862 11.9861 14.9999 11.9861Z"
                            fill="url(#paint8_radial_1_1279)"
                            fillOpacity="0.6"
                          />
                          <path
                            d="M14.9999 11.9861C18.3136 11.9861 20.9999 9.29978 20.9999 5.98608C20.9999 2.67237 18.3136 -0.013916 14.9999 -0.013916C11.6862 -0.013916 8.99988 2.67237 8.99988 5.98608C8.99988 9.29978 11.6862 11.9861 14.9999 11.9861Z"
                            fill="url(#paint9_radial_1_1279)"
                            fillOpacity="0.5"
                          />
                          <path
                            d="M13.75 18.9861H4.25C2.45507 18.9861 1 20.4412 1 22.2361V31.7361C1 33.531 2.45507 34.9861 4.25 34.9861H13.75C15.5449 34.9861 17 33.531 17 31.7361V22.2361C17 20.4412 15.5449 18.9861 13.75 18.9861Z"
                            fill="url(#paint10_radial_1_1279)"
                          />
                          <path
                            d="M13.75 18.9861H4.25C2.45507 18.9861 1 20.4412 1 22.2361V31.7361C1 33.531 2.45507 34.9861 4.25 34.9861H13.75C15.5449 34.9861 17 33.531 17 31.7361V22.2361C17 20.4412 15.5449 18.9861 13.75 18.9861Z"
                            fill="url(#paint11_radial_1_1279)"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M12.4792 24.0916H10.0321V31.5576H7.9673V24.0916H5.52014V22.4148H12.4792V24.0916Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(36.7967 18.16) scale(13.4784 33.2694)"
                        >
                          <stop stopColor="#A98AFF" />
                          <stop offset="0.14" stopColor="#8C75FF" />
                          <stop offset="0.565" stopColor="#5F50E2" />
                          <stop offset="0.9" stopColor="#3C2CB8" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(5.81238 12.3861) rotate(68.1539) scale(32.752 33.1231)"
                        >
                          <stop stopColor="#85C2FF" />
                          <stop offset="0.69" stopColor="#7588FF" />
                          <stop offset="1" stopColor="#6459FE" />
                        </radialGradient>
                        <linearGradient
                          id="paint2_linear_1_1279"
                          x1="17.5936"
                          y1="13.9861"
                          x2="17.5936"
                          y2="37.9861"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.801159"
                            stopColor="#6864F6"
                            stopOpacity="0"
                          />
                          <stop offset="1" stopColor="#5149DE" />
                        </linearGradient>
                        <radialGradient
                          id="paint3_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(24.4999 13.1861) rotate(113.326) scale(19.2186 15.4273)"
                        >
                          <stop stopColor="#BD96FF" />
                          <stop
                            offset="0.686685"
                            stopColor="#BD96FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint4_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(29.9999 7.55748) rotate(-90) scale(10 12.6216)"
                        >
                          <stop offset="0.268201" stopColor="#6868F7" />
                          <stop offset="1" stopColor="#3923B1" />
                        </radialGradient>
                        <radialGradient
                          id="paint5_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(25.8675 6.53008) rotate(40.0516) scale(7.14629 10.3363)"
                        >
                          <stop offset="0.270711" stopColor="#A1D3FF" />
                          <stop
                            offset="0.813393"
                            stopColor="#A1D3FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint6_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(33.9821 6.35468) rotate(-41.6581) scale(8.51275 20.8824)"
                        >
                          <stop stopColor="#E3ACFD" />
                          <stop
                            offset="0.816041"
                            stopColor="#9FA2FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint7_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(14.9999 4.27179) rotate(-90) scale(12 15.146)"
                        >
                          <stop offset="0.268201" stopColor="#8282FF" />
                          <stop offset="1" stopColor="#3923B1" />
                        </radialGradient>
                        <radialGradient
                          id="paint8_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(10.0411 3.03892) rotate(40.0516) scale(8.57554 12.4035)"
                        >
                          <stop offset="0.270711" stopColor="#A1D3FF" />
                          <stop
                            offset="0.813393"
                            stopColor="#A1D3FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint9_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(19.7786 2.82838) rotate(-41.6581) scale(10.2153 25.0589)"
                        >
                          <stop stopColor="#E3ACFD" />
                          <stop
                            offset="0.816041"
                            stopColor="#9FA2FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <radialGradient
                          id="paint10_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(1 18.9861) rotate(45) scale(22.6274)"
                        >
                          <stop offset="0.046875" stopColor="#688EFF" />
                          <stop offset="0.946875" stopColor="#230F94" />
                        </radialGradient>
                        <radialGradient
                          id="paint11_radial_1_1279"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(9 28.5861) rotate(90) scale(11.2 13.0702)"
                        >
                          <stop
                            offset="0.570647"
                            stopColor="#6965F6"
                            stopOpacity="0"
                          />
                          <stop offset="1" stopColor="#8F8FFF" />
                        </radialGradient>
                        <clipPath id="clip0_1_1279">
                          <rect width="38" height="38" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_1_1279">
                          <rect
                            width="36"
                            height="38"
                            fill="white"
                            transform="translate(1 -0.013916)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-size-small text-weight-medium is-white">
                    Is my competitor changing their pricing?
                  </div>
                </div>
                <div className="glass-chip whatsapp">
                  <div className="icon w-embed">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1274)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32.4632 5.51792C28.8915 1.96141 24.1412 0.00180442 19.0798 0C8.65038 0 0.162393 8.4402 0.158764 18.8147C0.15695 22.1312 1.02879 25.3684 2.68448 28.2212L0 37.9723L10.0303 35.3559C12.7936 36.8554 15.9054 37.6448 19.0717 37.6457H19.0798C29.5074 37.6457 37.9964 29.2046 38 18.83C38.0018 13.8021 36.0358 9.07535 32.4632 5.51883V5.51792Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32.4632 5.51793C28.8915 1.96141 24.1412 0.00180442 19.0798 0C8.65038 0 0.162393 8.4402 0.158764 18.8147C0.15695 22.1312 1.02879 25.3684 2.68448 28.2212L0 37.9723L10.0303 35.3559C12.7936 36.8554 15.9054 37.6448 19.0717 37.6457H19.0798C29.5074 37.6457 37.9964 29.2046 38 18.83C38.0018 13.8021 36.0358 9.07535 32.4632 5.51883V5.51793ZM19.0798 34.4681H19.0735C16.252 34.4673 13.4841 33.7129 11.0691 32.2883L10.4948 31.9492L4.54248 33.5018L6.13103 27.7303L5.75724 27.1385C4.18321 24.6485 3.35128 21.7703 3.3531 18.8157C3.35673 10.1932 10.4113 3.17759 19.0862 3.17759C23.2866 3.17939 27.2349 4.80789 30.2042 7.76444C33.1736 10.7201 34.8075 14.6502 34.8057 18.8283C34.802 27.4516 27.7475 34.4673 19.0798 34.4673V34.4681ZM27.7057 22.7556C27.233 22.5201 24.9088 21.3833 24.4751 21.2264C24.0414 21.0693 23.7267 20.9909 23.4118 21.4618C23.097 21.9328 22.1907 22.992 21.9149 23.305C21.6391 23.619 21.3633 23.6578 20.8906 23.4223C20.418 23.1868 18.8948 22.6906 17.0885 21.0892C15.6832 19.8423 14.7342 18.3032 14.4585 17.8322C14.1827 17.3613 14.4294 17.1068 14.6653 16.8732C14.8775 16.6621 15.1379 16.3237 15.3747 16.0494C15.6116 15.7751 15.6896 15.5785 15.8474 15.2654C16.0053 14.9514 15.9263 14.6772 15.8084 14.4417C15.6904 14.2062 14.7452 11.892 14.3505 10.951C13.9667 10.0344 13.5767 10.1589 13.2872 10.1436C13.0114 10.13 12.6966 10.1273 12.3809 10.1273C12.0652 10.1273 11.5535 10.2446 11.1199 10.7156C10.6862 11.1865 9.46507 12.3242 9.46507 14.6375C9.46507 16.9507 11.1589 19.1874 11.3957 19.5013C11.6324 19.8153 14.7296 24.5636 19.4717 26.6008C20.5995 27.0853 21.4803 27.3749 22.1671 27.5915C23.2994 27.9496 24.3299 27.8991 25.1446 27.7782C26.0528 27.6429 27.9416 26.6405 28.3353 25.5425C28.7291 24.4445 28.7291 23.5026 28.6111 23.3068C28.4932 23.111 28.1775 22.9928 27.7048 22.7574L27.7057 22.7556Z"
                          fill="#25D366"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1274">
                          <rect width="38" height="38" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-size-small text-weight-medium is-white">
                    How can I improve my Google ranking?
                  </div>
                </div>
                <div className="glass-chip email">
                  <div className="icon w-embed">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.61914 8.79688C6.16992 8.79688 4.99414 9.97266 4.99414 11.4219C4.99414 12.2477 5.38242 13.0242 6.04414 13.5219L17.4191 22.0531C18.3543 22.7531 19.634 22.7531 20.5691 22.0531L31.9441 13.5219C32.6059 13.0242 32.9941 12.2477 32.9941 11.4219C32.9941 9.97266 31.8184 8.79688 30.3691 8.79688H7.61914ZM4.99414 16.0156V26.2969C4.99414 28.2273 6.56367 29.7969 8.49414 29.7969H29.4941C31.4246 29.7969 32.9941 28.2273 32.9941 26.2969V16.0156L22.1441 24.1531C20.2793 25.5531 17.709 25.5531 15.8441 24.1531L4.99414 16.0156Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-size-small text-weight-medium is-white">
                    Are my competitors running paid ads?
                  </div>
                </div>
                <div className="bg-text-wrapper">
                  <div className="bg-main-text-wrap _1">
                    <div className="header-bg-text">
                      <div className="sub-header-text">Priority</div>
                      <div className="bottom-liner"></div>
                    </div>
                    <div className="bg-text-wrap">
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          SEO audit
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Instagram review
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Keyword gaps
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-main-text-wrap">
                    <div className="header-bg-text">
                      <div className="sub-header-text">In Progress</div>
                      <div className="bottom-liner"></div>
                    </div>
                    <div className="bg-text-wrap">
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Homepage SEO audit
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Competitor pricing review
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Q2 keyword research
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Backlink gap analysis
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Social sentiment report
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-main-text-wrap">
                    <div className="header-bg-text">
                      <div className="sub-header-text">Done</div>
                      <div className="bottom-liner"></div>
                    </div>
                    <div className="bg-text-wrap">
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Brand mention tracking
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Customer review analysis
                        </div>
                      </div>
                      <div className="feature-wrap">
                        <div className="text-size-regular is-white">
                          Sustainability messaging
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-xlarge"></div>
              <h2 className="text-weight-semibold">
                50+ Years of Serviceplan Marketing Expertise. <br />
                Built into Every Agent.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
