import { Locale, t } from "@/lib/translations";

export default function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const tt = t(locale).howItWorks;

  return (
    <div className="section_howit-works">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="hiw-header">
              <div className="header-wrapper">
                <h2>{tt.heading}</h2>
                <div className="sub-text-heading">
                  {tt.subheading}
                </div>
              </div>
            </div>
            <div>
              <div className="how-it-works-wrap">
                <div className="steps-grid">
                  {/* Step 1 */}
                  <div className="step-contetn">
                    <div className="step-img-wrap">
                      <div className="step-1-wrapper">
                        <img
                          src="/images/step-1.webp"
                          loading="lazy"
                          width={252.5}
                          sizes="(max-width: 479px) 100vw, 253px"
                          alt=""
                          className="image-7"
                        />
                        <div className="step-text-wrapper">
                          <div className="step-1-text">
                            <div className="text-size-tiny text-weight-medium">
                              {tt.questionBubble1}
                            </div>
                          </div>
                          <div className="step-1-text _2">
                            <div className="text-size-tiny text-weight-medium">
                              {tt.questionBubble2}
                            </div>
                          </div>
                          <div className="step-1-text _3">
                            <div className="text-size-tiny text-weight-medium">
                              {tt.questionBubble3}
                            </div>
                          </div>
                          <div className="bottom-gradinet-below"></div>
                        </div>
                      </div>
                    </div>
                    <div className="line-step"></div>
                    <div className="steps-wrapper">
                      <div className="step-heading">
                        <div className="step">Step 1</div>
                        <div className="heading-style-h5">
                          {tt.step1Heading}{" "}
                        </div>
                      </div>
                      <div className="explanation">
                        {tt.step1Description}{" "}
                      </div>
                      <div className="arrow w-embed">
                        <svg
                          width="33"
                          height="23"
                          viewBox="0 0 33 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.0283 10.6963L32.5869 11.2178L32.0303 11.7422L20.5615 22.5498L19.5791 21.5068L29.6396 12.0254H7.0957C6.76376 13.6615 5.318 14.8926 3.58398 14.8926C1.6046 14.8926 0 13.288 0 11.3086C0.00024998 9.32943 1.60476 7.72461 3.58398 7.72461C5.31769 7.72461 6.76342 8.95617 7.0957 10.5918H29.8125L19.5811 1.04883L20.5596 0L32.0283 10.6963ZM3.58398 9.1582C2.39651 9.1582 1.43384 10.1212 1.43359 11.3086C1.43359 12.4962 2.39636 13.459 3.58398 13.459C4.77161 13.459 5.73438 12.4962 5.73438 11.3086C5.73413 10.1212 4.77146 9.1582 3.58398 9.1582Z"
                            fill="#FF4B4F"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="step-contetn">
                    <div className="step-img-wrap">
                      <div className="agents-work-wrap second">
                        {/* Floating brand logos */}
                        <div className="step2-floating-logos">
                          <div className="step2-logo step2-logo-gwi">
                            <span style={{ color: '#FF4B4F', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>GWI.</span>
                          </div>
                          <div className="step2-logo step2-logo-statista">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px', flexShrink: 0 }}>
                              <rect x="1" y="9" width="3" height="6" rx="0.5" fill="#1A3D5C"/>
                              <rect x="5.5" y="5" width="3" height="10" rx="0.5" fill="#1A3D5C"/>
                              <rect x="10" y="1" width="3" height="14" rx="0.5" fill="#1A3D5C"/>
                            </svg>
                            <span style={{ color: '#1A3D5C', fontWeight: 600, fontSize: '16px' }}>statista</span>
                          </div>
                          <div className="step2-logo step2-logo-chart">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 20L11 13L16 17L24 8" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 8H24V14" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>

                        {/* Portrait */}
                        <img
                          src="/images/hannah-transp.webp"
                          loading="lazy"
                          alt=""
                          className="step2-portrait"
                        />

                        {/* Task list card */}
                        <div className="step2-task-card">
                          <div className="step2-task-item">
                            <span className="step2-task-number">1.</span>
                            <span>{tt.step2Task1}</span>
                          </div>
                          <div className="step2-task-item">
                            <span className="step2-task-number">2.</span>
                            <span>{tt.step2Task2}</span>
                          </div>
                          <div className="step2-task-item">
                            <span className="step2-task-number">3.</span>
                            <span>{tt.step2Task3}</span>
                          </div>
                        </div>

                        {/* Gradient blobs */}
                        <div className="green-bg w-embed">
                          <svg
                            width="583"
                            height="552"
                            viewBox="0 0 583 552"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_f_5217_17987)">
                              <rect
                                x="161.693"
                                y="161.693"
                                width="259"
                                height="228"
                                rx="114"
                                fill="url(#paint0_linear_5217_17987)"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_5217_17987"
                                x="-4.57764e-05"
                                y="-4.57764e-05"
                                width="582.387"
                                height="551.387"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="BackgroundImageFix"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="80.8467"
                                  result="effect1_foregroundBlur_5217_17987"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_5217_17987"
                                x1="291.193"
                                y1="161.693"
                                x2="291.193"
                                y2="389.693"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#8FC49F" />
                                <stop offset="1" stopColor="#5C8F6C" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="red-bg w-embed">
                          <svg
                            width="552"
                            height="552"
                            viewBox="0 0 552 552"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_f_5217_17986)">
                              <rect
                                x="161.693"
                                y="161.693"
                                width="228"
                                height="228"
                                rx="114"
                                fill="#FF9194"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_5217_17986"
                                x="-4.57764e-05"
                                y="-4.57764e-05"
                                width="551.387"
                                height="551.387"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="BackgroundImageFix"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="80.8467"
                                  result="effect1_foregroundBlur_5217_17986"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="steps-wrapper">
                      <div className="step-heading">
                        <div className="step">Step 2</div>
                        <div className="heading-style-h5">
                          {tt.step2Heading}{" "}
                        </div>
                      </div>
                      <div className="arrow w-embed">
                        <svg
                          width="33"
                          height="23"
                          viewBox="0 0 33 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.0283 10.6963L32.5869 11.2178L32.0303 11.7422L20.5615 22.5498L19.5791 21.5068L29.6396 12.0254H7.0957C6.76376 13.6615 5.318 14.8926 3.58398 14.8926C1.6046 14.8926 0 13.288 0 11.3086C0.00024998 9.32943 1.60476 7.72461 3.58398 7.72461C5.31769 7.72461 6.76342 8.95617 7.0957 10.5918H29.8125L19.5811 1.04883L20.5596 0L32.0283 10.6963ZM3.58398 9.1582C2.39651 9.1582 1.43384 10.1212 1.43359 11.3086C1.43359 12.4962 2.39636 13.459 3.58398 13.459C4.77161 13.459 5.73438 12.4962 5.73438 11.3086C5.73413 10.1212 4.77146 9.1582 3.58398 9.1582Z"
                            fill="#FF4B4F"
                          />
                        </svg>
                      </div>
                      <div className="explanation">
                        {tt.step2Description}
                        <br />
                      </div>
                    </div>
                    <div className="line-step"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="step-contetn">
                    <div className="step-img-wrap">
                      <div className="step-3-wrapper">
                        <img
                          src="/images/step-3.webp"
                          loading="lazy"
                          width={253}
                          sizes="(max-width: 479px) 100vw, 253px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="steps-wrapper">
                      <div className="step-heading">
                        <div className="step">Step 3</div>
                        <div className="heading-style-h5">
                          {tt.step3Heading}
                          <br />
                        </div>
                      </div>
                      <div className="explanation">
                        {tt.step3Description}
                      </div>
                    </div>
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
