import { Locale, t } from "@/lib/translations";

export default function Companies({ locale = "en" }: { locale?: Locale }) {
  const tt = t(locale).companies;

  return (
    <div className="section-wrapper">
      <div className="white-bg-wrap">
        <div className="logo-wrapper-gradient">
          <div className="red-gradinet"></div>
          <div className="container-large">
            <div className="logo-content-wrap">
              <h2 className="bentocard-heding max-width-500">
                {tt.heading}
              </h2>
              <div className="spacer-small"></div>

              <div className="logo-wrap-grid hide">
                <div className="logo-wrapper">
                  <img src="/images/bmw.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector-1.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector-3.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector-2.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/gwi-logo.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/path1.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector-5.svg" loading="lazy" alt="" />
                </div>
                <div className="logo-wrapper">
                  <img src="/images/vector-6.svg" loading="lazy" alt="" />
                </div>
              </div>

              <div className="spacer-huge hide"></div>

              <div className="frame-1597884547">
                <div className="testimonials-wrap">
                  <div className="testimonial-grid-bento">
                    <div className="testimonial-wrapper">
                      <div className="test-text-wrapper">
                        <div>
                          <div>
                            <div className="testimonial-info">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/florian-von-keyserlingk.webp"
                                loading="lazy"
                                alt="Man in a black t-shirt looking thoughtfully out of a window with his hand resting on his chin."
                                className="testimonial-img"
                              />
                              <div>
                                <p className="testimonial-name">{tt.testimonial1Name}</p>
                                <p className="testimonial-author-role">{tt.testimonial1Role}</p>
                              </div>
                            </div>
                            <p className="testimonial-text">&quot;{tt.testimonial1Quote}&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/testimonial-chat-img.avif"
                      loading="lazy"
                      sizes="100vw"
                      alt="Screenshot of a chat conversation about analyzing the premium pet food market in France, discussing market size, growth, demographics, and a shared PDF report titled Premium_Pet_Food_FR.pdf."
                      className="chat-screens"
                    />
                  </div>
                  <div className="testimonial-grid-bento">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/testimonial-chat-img-2.avif"
                      loading="lazy"
                      sizes="100vw"
                      alt="Chat conversation about coordinating a product launch timeline and marketing asset production with a Risk_Assessment.pdf attachment."
                      className="chat-screens"
                    />
                    <div className="testimonial-wrapper">
                      <div className="test-text-wrapper">
                        <div>
                          <div>
                            <div className="testimonial-info">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/michael-trautmann.webp"
                                loading="lazy"
                                alt="Smiling middle-aged man with short gray hair wearing a blue blazer and white shirt."
                                className="testimonial-img"
                              />
                              <div className="div-block-59">
                                <p className="testimonial-name">{tt.testimonial2Name}</p>
                                <p className="testimonial-author-role">{tt.testimonial2Role}</p>
                              </div>
                            </div>
                            <p className="testimonial-text">&quot;{tt.testimonial2Quote}&quot;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-section">
                  <div className="container-37">
                    <div className="footer-text">
                      <div className="footer-text">
                        <span className="footer-text-0">{tt.stat1Value}</span>
                        <span className="footer-text-1">{tt.stat1Label}</span>
                      </div>
                    </div>
                    <div className="footer-subtext">
                      {tt.stat1Description}
                    </div>
                  </div>
                  <img
                    src="/images/Line-326.svg"
                    loading="lazy"
                    width={63}
                    alt="divider-line"
                    className="line-325"
                  />
                  <div className="container-37">
                    <div className="footer-text">
                      <div className="footer-text">
                        <span className="footer-text-0">{tt.stat2Value}</span>
                        <span className="footer-text-1">{tt.stat2Label}</span>
                      </div>
                    </div>
                    <div className="footer-subtext">
                      {tt.stat2Description}
                    </div>
                  </div>
                  <img
                    src="/images/Line-326.svg"
                    loading="lazy"
                    width={63}
                    alt="divider-line"
                    className="line-325"
                  />
                  <div className="number-wrap no-border">
                    <div className="footer-text">
                      <div className="footer-text">
                        <span className="footer-text-0">{tt.stat3Value}</span>
                        <span className="footer-text-1">{tt.stat3Label}</span>
                      </div>
                    </div>
                    <div className="footer-subtext">
                      {tt.stat3Description}
                    </div>
                  </div>
                </div>
                <div className="container-39">
                  <div className="bottom-text">
                    {tt.downloadHeading} <br />
                    {tt.downloadSubheading}
                  </div>
                  <a
                    href="https://cdn.prod.website-files.com/6990b006d2c582acd039bf7e/699bdf2d60e7f039bd38487e_260218%20-%20Plan_Net_Hannah_User%20Guide_EN.pdf"
                    target="_blank"
                    className="link-with-arrow is-white w-inline-block"
                  >
                    <div className="icon w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_39_70_companies)">
                          <path
                            d="M23.3408 11.0952L23.7314 11.4585L23.3428 11.8247L15.3428 19.3638L14.6572 18.6353L21.6729 12.0229H5.9502C5.71855 13.1641 4.70947 14.0229 3.5 14.0229C2.11931 14.0229 1.00004 12.9036 1 11.5229C1 10.1422 2.11929 9.02295 3.5 9.02295C4.70952 9.02295 5.7186 9.88178 5.9502 11.0229H21.7988L14.6592 4.36475L15.3408 3.63428L23.3408 11.0952ZM3.5 10.0229C2.67157 10.0229 2 10.6945 2 11.5229C2.00004 12.3513 2.67159 13.0229 3.5 13.0229C4.32841 13.0229 4.99996 12.3513 5 11.5229C5 10.6945 4.32843 10.0229 3.5 10.0229Z"
                            fill="#FF4B4F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_39_70_companies">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-size-regular">{tt.downloadButton}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red w-embed"></div>
      </div>
    </div>
  );
}
