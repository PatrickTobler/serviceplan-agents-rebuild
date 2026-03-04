"use client";

import { useState, FormEvent } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section_demo-hero">
      <div className="hero-section-wrapper">
        {/* Hero Navbar */}
        <div className="navbar_component jhn w-nav" role="banner">
          <div className="nabvar-header">
            <a href="/?r=0" className="logo_sokosumi w-nav-brand">
              <div className="logo-component">
                <div className="code-embed-4 w-embed">
                  <img src="/images/sp-logo.png" alt="Serviceplan Group Communications" style={{ height: '38px', width: 'auto' }} />
                </div>
              </div>
            </a>
            <nav role="navigation" className="navbar-menu-content-wrap w-nav-menu">
              <div className="navigation-link-wrap">
                <div className="uui-navbar08_menu-dropdown-2 w-dropdown">
                  <div className="uui-navbar08_dropdown-toggle-2 w-dropdown-toggle">
                    <div className="uui-dropdown-icon-2 w-embed">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="CurrentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>Agents</div>
                  </div>
                  <nav className="uui-navbar08_dropdown-list-2 is-resources w-dropdown-list">
                    <div className="uui-navbar08_dropdown-link-list-2 is-resources">
                      <a href="#hannah" className="uui-navbar08_dropdown-link-2 w-inline-block">
                        <div className="uui-navbar08_icon-wrapper-2 hide">
                          <img loading="lazy" src="/images/group-9664.svg" alt="" className="nav-icon-1x1-xsmall" />
                        </div>
                        <div className="uui-navbar08_item-right-2">
                          <div className="uui-navbar08_text-wrapper-2">
                            <img src="/images/user-image.png" loading="lazy" alt="" />
                            <div className="uui-navbar08_item-heading-2">Hannah</div>
                            <div className="navbar_heading-arrow w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <div className="uui-text-size-small-4 hide">Find information to grow your business.</div>
                        </div>
                      </a>
                      <a href="#elena" className="uui-navbar08_dropdown-link-2 w-inline-block">
                        <div className="uui-navbar08_icon-wrapper-2 hide">
                          <img loading="lazy" src="/images/group-9664.svg" alt="" className="nav-icon-1x1-xsmall" />
                        </div>
                        <div className="uui-navbar08_item-right-2">
                          <div className="uui-navbar08_text-wrapper-2">
                            <img src="/images/elena.png" loading="lazy" alt="" />
                            <div className="uui-navbar08_item-heading-2">Elena</div>
                            <div className="navbar_heading-arrow w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <div className="uui-text-size-small-4 hide">Find information to grow your business.</div>
                        </div>
                      </a>
                      <a href="#alex" className="uui-navbar08_dropdown-link-2 w-inline-block">
                        <div className="uui-navbar08_icon-wrapper-2 hide">
                          <img loading="lazy" src="/images/group-9664.svg" alt="" className="nav-icon-1x1-xsmall" />
                        </div>
                        <div className="uui-navbar08_item-right-2">
                          <div className="uui-navbar08_text-wrapper-2">
                            <img src="/images/alex-2.png" loading="lazy" width="34" alt="" />
                            <div className="uui-navbar08_item-heading-2">Alex</div>
                            <div className="navbar_heading-arrow w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <div className="uui-text-size-small-4 hide">Find information to grow your business.</div>
                        </div>
                      </a>
                    </div>
                  </nav>
                </div>
                <a href="#pricing" className="nav-menu is-white w-nav-link">Pricing</a>
                <a href="#" className="nav-menu is-white w-nav-link">Contact</a>
              </div>
              <div className="nav-cta-links">
                <div className="button-group nav-button">
                  <a href="/request-a-demo" className="button navigation w-inline-block">
                    <div>Request a Demo</div>
                    <div className="arrow-icon w-embed">
                      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="22.5" fill="white" />
                        <path d="M17.0161 18.1188L18.0536 17.0813C18.3733 17.0914 18.5094 17.048 18.8047 17.0314C19.5267 16.9908 20.2406 16.9114 20.9611 16.8464L26.0857 16.4123L27.6002 16.286C27.7662 16.2728 28.0385 16.2248 28.1915 16.249C28.3582 16.4057 28.6132 16.6207 28.7365 16.8045C28.7458 16.8185 28.7547 16.8313 28.7597 16.8474C28.7846 16.9296 28.5661 19.1708 28.5422 19.4465L28.0473 25.0788C28.0146 25.4404 28.001 25.8053 27.9667 26.1663C27.9563 26.2755 27.9097 26.8805 27.8789 26.934C27.8625 26.9625 27.8463 26.9905 27.8272 27.0173C27.7388 27.1412 26.9701 27.9043 26.8704 27.9214L26.8542 27.9095C26.9352 27.3589 26.9526 26.7569 27.0122 26.199L27.4765 21.4242C27.4875 21.3002 27.4863 21.1763 27.4967 21.054C27.5797 19.9997 27.6873 18.9475 27.8194 17.8983C27.8246 17.8587 27.817 17.8153 27.7922 17.7832C27.7441 17.8122 27.3648 18.1956 27.3001 18.2601L26.0284 19.5295L20.7127 24.845L18.0323 27.5251L17.2723 28.285C17.1426 28.4149 16.9178 28.6277 16.815 28.7685C16.6139 28.581 16.426 28.3748 16.2312 28.1959C16.5431 27.9104 16.911 27.5218 17.2138 27.219L19.0694 25.3634L24.7142 19.7182L26.4694 17.9621L26.9237 17.504C27.0175 17.4092 27.1511 17.2614 27.2578 17.1923C27.0057 17.1792 26.7842 17.239 26.5372 17.2554C26.1008 17.2845 25.6629 17.3409 25.228 17.3762L19.1671 17.9296L17.9339 18.048C17.7746 18.0645 17.1569 18.1339 17.0161 18.1188Z" fill="black" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
            <div className="menu-icon-wrap w-nav-button">
              <div id="menu-button" className="menu-icon">
                <div className="menu-line-top"></div>
                <div className="menu-line-middle"><div className="menu-inner-line"></div></div>
                <div className="menu-line-bottom"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="margin-top margin-xlarge">
          <div className="padding-global">
            <div>
              <div className="hero-content">
                <div className="hero-text-wrap">
                  <div className="margin-bottom margin-large">
                    <h1>AI Coworkers for <br />Your Marketing. <br />By Serviceplan.</h1>
                  </div>
                  <div className="hero-description">
                    <div className="text-size-regular is-white">
                      Europe&apos;s leading agency &ndash; now in your inbox. Serviceplan Agents are AI coworkers for market research, project management, and strategy &ndash; built for companies, start-ups, and solopreneurs. They work via email, WhatsApp, or Teams, get to know your business, and tap into a network of specialized agents.
                    </div>
                  </div>

                  {/* Mobile hero image */}
                  <div className="mobile-only">
                    <div className="heroimage-wrapper mobile">
                      <div className="color-bg w-embed">
                        <svg width="1273" height="1086" viewBox="0 0 1273 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_f_16_634)">
                            <circle cx="915.243" cy="638.243" r="238.301" transform="rotate(57.6859 915.243 638.243)" fill="#8FC49F" />
                          </g>
                          <g filter="url(#filter1_f_16_634)">
                            <circle cx="500.467" cy="500.467" r="252.234" transform="rotate(57.6859 500.467 500.467)" fill="url(#paint0_linear_16_634)" />
                          </g>
                          <defs>
                            <filter id="filter0_f_16_634" x="428.712" y="151.712" width="973.064" height="973.064" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="124.1" result="effect1_foregroundBlur_16_634" />
                            </filter>
                            <filter id="filter1_f_16_634" x="1.52588e-05" y="0" width="1000.93" height="1000.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="124.1" result="effect1_foregroundBlur_16_634" />
                            </filter>
                            <linearGradient id="paint0_linear_16_634" x1="406.101" y1="282.331" x2="616.487" y2="968.052" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF9194" />
                              <stop offset="1" stopColor="#FF4B4F" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <img src="/images/agents.webp" loading="lazy" alt="" className="elena-hannah-alex" />
                      <div className="gray-layer w-embed">
                        <svg width="1302" height="600" viewBox="0 0 1302 537" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_f_1_768m)">
                            <circle cx="1140.3" cy="330.3" r="231" fill="#363636" />
                          </g>
                          <g filter="url(#filter1_f_1_768m)">
                            <circle cx="933.3" cy="380.3" r="231" fill="#363636" />
                          </g>
                          <g filter="url(#filter2_f_1_768m)">
                            <circle cx="702.3" cy="424.3" r="231" fill="#363636" />
                          </g>
                          <g filter="url(#filter3_f_1_768m)">
                            <circle cx="561.3" cy="410.3" r="231" fill="#363636" />
                          </g>
                          <g filter="url(#filter4_f_1_768m)">
                            <circle cx="330.3" cy="410.3" r="231" fill="#363636" />
                          </g>
                          <defs>
                            <filter id="filter0_f_1_768m" x="810" y="-1.52588e-05" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768m" />
                            </filter>
                            <filter id="filter1_f_1_768m" x="603" y="50" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768m" />
                            </filter>
                            <filter id="filter2_f_1_768m" x="372" y="94" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768m" />
                            </filter>
                            <filter id="filter3_f_1_768m" x="231" y="80" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768m" />
                            </filter>
                            <filter id="filter4_f_1_768m" x="-1.52588e-05" y="80" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768m" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div id="free-analysis" className="form-glass-wrap">
                    <div className="glass-effect-form w-form">
                      {!submitted ? (
                        <form
                          id="wf-form-Get-Free-Analysis"
                          name="wf-form-Get-Free-Analysis"
                          method="get"
                          onSubmit={handleSubmit}
                        >
                          <div className="form-grid">
                            <div className="div-block-46">
                              <h3 className="heading-style-h3">Try Hannah free &ndash; no strings attached<br /></h3>
                              <div className="spacer-medium"></div>
                              <div className="text-size-regular is-white">
                                Enter your website URL and our research specialist Hannah will deliver a free competitive analysis straight to your inbox.<br />
                              </div>
                            </div>
                            <div>
                              <div className="spacer-small"></div>
                              <div className="div-block-9">
                                <div>
                                  <div className="email-form-content-wrap">
                                    <div className="form-input-wrap">
                                      <label htmlFor="email" className="form_label">Your email address</label>
                                      <input
                                        className="form_input w-input"
                                        maxLength={256}
                                        name="email"
                                        placeholder="name@company.com"
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                      />
                                      <div className="text-size-tiny text-style-italic is-white">
                                        *By entering your information for a free analysis you agree and accept our{" "}
                                        <a href="https://www.sokosumi.com/privacy-policy" target="_blank" className="links-legal" rel="noopener noreferrer">Privacy Policy.</a>
                                      </div>
                                    </div>
                                    <div className="form-input-wrap">
                                      <label htmlFor="website_url" className="form_label">Your website URL</label>
                                      <input
                                        className="form_input w-input"
                                        maxLength={256}
                                        name="website_url"
                                        placeholder="https://your-website.com"
                                        type="text"
                                        id="website_url"
                                        required
                                        value={websiteUrl}
                                        onChange={(e) => setWebsiteUrl(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="div-block-10">
                                  <input type="submit" className="button is-red w-button" value="Get your free analysis " />
                                  <div className="spacer-small"></div>
                                  <div className="text-size-tiny text-style-italic is-white">
                                    *By Proceeding you sgree and accept our{" "}
                                    <a href="https://www.sokosumi.com/terms-of-service" target="_blank" className="links-legal" rel="noopener noreferrer">Terms of Service</a>.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      ) : (
                        <div className="w-form-done" style={{ display: 'block' }}>
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                      )}
                      {!submitted && (
                        <div className="w-form-fail" style={{ display: 'none' }}>
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop hero image */}
                <div className="heroimage-wrapper">
                  <div className="color-bg w-embed">
                    <svg width="1273" height="970" viewBox="0 0 1273 970" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_80_439)">
                        <circle cx="915.243" cy="638.244" r="238.301" transform="rotate(57.6859 915.243 638.244)" fill="#8FC49F" />
                      </g>
                      <g filter="url(#filter1_f_80_439)">
                        <circle cx="500.467" cy="500.467" r="252.234" transform="rotate(57.6859 500.467 500.467)" fill="url(#paint0_linear_80_439)" />
                      </g>
                      <defs>
                        <filter id="filter0_f_80_439" x="428.712" y="151.712" width="973.064" height="973.063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="124.1" result="effect1_foregroundBlur_80_439" />
                        </filter>
                        <filter id="filter1_f_80_439" x="0.000198364" y="0.000198364" width="1000.93" height="1000.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="124.1" result="effect1_foregroundBlur_80_439" />
                        </filter>
                        <linearGradient id="paint0_linear_80_439" x1="406.101" y1="282.331" x2="616.487" y2="968.052" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF9194" />
                          <stop offset="1" stopColor="#FF4B4F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <img src="/images/agents.webp" loading="lazy" alt="" className="elena-hannah-alex" />
                  <div className="gray-layer w-embed">
                    <svg width="1302" height="800" viewBox="0 0 1302 537" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_1_768d)">
                        <circle cx="1140.3" cy="330.3" r="231" fill="#363636" />
                      </g>
                      <g filter="url(#filter1_f_1_768d)">
                        <circle cx="933.3" cy="380.3" r="231" fill="#363636" />
                      </g>
                      <g filter="url(#filter2_f_1_768d)">
                        <circle cx="702.3" cy="424.3" r="231" fill="#363636" />
                      </g>
                      <g filter="url(#filter3_f_1_768d)">
                        <circle cx="561.3" cy="410.3" r="231" fill="#363636" />
                      </g>
                      <g filter="url(#filter4_f_1_768d)">
                        <circle cx="330.3" cy="410.3" r="231" fill="#363636" />
                      </g>
                      <defs>
                        <filter id="filter0_f_1_768d" x="810" y="-1.52588e-05" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768d" />
                        </filter>
                        <filter id="filter1_f_1_768d" x="603" y="50" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768d" />
                        </filter>
                        <filter id="filter2_f_1_768d" x="372" y="94" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768d" />
                        </filter>
                        <filter id="filter3_f_1_768d" x="231" y="80" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768d" />
                        </filter>
                        <filter id="filter4_f_1_768d" x="-1.52588e-05" y="80" width="660.6" height="660.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="49.65" result="effect1_foregroundBlur_1_768d" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
