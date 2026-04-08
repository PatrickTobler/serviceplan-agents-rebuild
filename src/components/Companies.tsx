import { Locale, t } from "@/lib/translations";

const COMPANY_LOGOS = [
  "Allianz",
  "BVG",
  "Stroer",
  "Pfisterer",
  "Deutsche Telekom",
  "Cardano Foundation",
  "Serviceplan Group",
  "Ravensburger",
  "Lufthansa",
  "OMR",
  "Lunendonk",
  "Vion Food Group",
  "NMKR",
  "Input Output",
  "Emurgo",
  "TDK",
  "ARD",
  "B/S/H/",
  "Golden Touch",
  "dpa",
  "Samsung",
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
                  {COMPANY_LOGOS.map((name) => (
                    <div key={name} className="sp-logo-item">
                      <span className="sp-logo-text">{name}</span>
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
                  {tt.testimonials.map((testimonial, index) => (
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
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="sp-testimonial-avatar"
                              loading="lazy"
                            />
                          ) : (
                            <div className="sp-testimonial-avatar-placeholder">
                              {testimonial.initials}
                            </div>
                          )}
                          <div className="sp-testimonial-author-info">
                            <p className="sp-testimonial-name">
                              {testimonial.name}
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
