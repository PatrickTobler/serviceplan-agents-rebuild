import { Locale, t } from "@/lib/translations";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  image: string | null;
  linkedin: string | null;
}

const companyLogos = [
  { name: "Allianz", src: "/images/logos/allianz.svg" },
  { name: "BVG", src: "/images/logos/bvg.svg" },
  { name: "Str\u00f6er", src: "/images/logos/stroer.svg" },
  { name: "Pfisterer", src: "/images/logos/pfisterer.svg" },
  { name: "Deutsche Telekom", src: "/images/logos/telekom.svg" },
  { name: "Cardano Foundation", src: "/images/logos/cardano-foundation.svg" },
  { name: "Serviceplan Group", src: "/images/logos/serviceplan-group.svg" },
  { name: "Ravensburger", src: "/images/logos/ravensburger.svg" },
  { name: "Lufthansa", src: "/images/logos/lufthansa.svg" },
  { name: "OMR", src: "/images/logos/omr.svg" },
  { name: "L\u00fcnendonk", src: "/images/logos/lunendonk.svg" },
  { name: "Vion Food Group", src: "/images/logos/vion-food.svg" },
  { name: "NMKR", src: "/images/logos/nmkr.svg" },
  { name: "Input Output", src: "/images/logos/iohk.svg" },
  { name: "Bizzlogic", src: "/images/logos/bizzlogic.svg" },
  { name: "Emurgo", src: "/images/logos/emurgo.svg" },
  { name: "TDK", src: "/images/logos/tdk.svg" },
  { name: "ARD", src: "/images/logos/ard.svg" },
  { name: "B/S/H/", src: "/images/logos/bsh.svg" },
  { name: "Golden Touch", src: "/images/logos/golden-touch.svg" },
  { name: "dpa", src: "/images/logos/dpa.svg" },
  { name: "Samsung", src: "/images/logos/samsung.svg" },
];

export default function Companies({ locale = "en" }: { locale?: Locale }) {
  const tt = t(locale).companies;

  return (
    <div className="section-wrapper">
      <div className="white-bg-wrap">
        <div className="logo-wrapper-gradient">
          <div className="red-gradinet"></div>
          <div className="container-large">
            <div className="logo-content-wrap">
              {/* Section 1: Credibility Logo Bar */}
              <div className="sp-logo-section">
                <h2 className="bentocard-heding max-width-500">
                  {tt.heading}
                </h2>
                <div className="spacer-small"></div>
                <div className="sp-logo-grid">
                  {companyLogos.map((logo) => (
                    <div key={logo.name} className="sp-logo-item">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="spacer-small"></div>

                {/* Stats Row */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
              </div>

              {/* Section 2: Testimonial Quotes */}
              <div className="sp-testimonials-section">
                <h2 className="sp-testimonials-heading">
                  {tt.testimonialsHeading}
                </h2>
                <div className="sp-testimonials-grid">
                  {(tt.testimonials as readonly Testimonial[]).map((testimonial, index) => (
                    <div key={index} className="sp-testimonial-card">
                      <div className="sp-testimonial-divider"></div>
                      <div className="sp-testimonial-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="sp-testimonial-content">
                        <p className="sp-testimonial-quote">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="sp-testimonial-author">
                          {testimonial.image ? (
                            <div className="sp-testimonial-avatar">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="sp-testimonial-avatar-img"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div className="sp-testimonial-avatar-placeholder">
                              {testimonial.initials}
                            </div>
                          )}
                          <div className="sp-testimonial-author-info">
                            <p className="sp-testimonial-name">
                              {testimonial.linkedin ? (
                                <a
                                  href={testimonial.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="sp-testimonial-name-link"
                                >
                                  {testimonial.name}
                                </a>
                              ) : (
                                <span>{testimonial.name}</span>
                              )}
                            </p>
                            <p className="sp-testimonial-role">
                              {testimonial.role}
                            </p>
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
        <div className="bg-red w-embed"></div>
      </div>
    </div>
  );
}
