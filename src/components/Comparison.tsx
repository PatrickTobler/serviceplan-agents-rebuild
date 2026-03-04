const DashIcon = () => (
  <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1H5" stroke="#060606" strokeWidth="2" />
    <path d="M8 1H13" stroke="#060606" strokeWidth="2" />
    <path d="M16 1H21" stroke="#060606" strokeWidth="2" />
  </svg>
);

const features = [
  {
    name: "Opinionated analysis",
    description: '"My Take" with honest recommendations',
  },
  {
    name: "Domain expertise",
    description: "Serviceplan marketing & research knowledge",
  },
  {
    name: "Premium data sources",
    description: "GWI, DataForSEO, Statista, Social APls",
  },
  {
    name: "Email access",
    description: "Send requests without logging into anything",
  },
  {
    name: "Task board",
    description: "Single source of truth for all work and files",
  },
  {
    name: "Active project management",
    description: "Organized: Programmes, Projects, Work Packages, Tasks",
  },
  {
    name: "Learns your preferences",
    description: "Improves based on your feedback over time",
  },
  {
    name: "Human escalation",
    description: "Routes to real people when needed",
    isLast: true,
  },
];

export default function Comparison() {
  return (
    <>
      <div className="container-40">
        <div className="header-style">
          <div className="title-style-3">
            <strong>What Sets Serviceplan Agents Apart</strong>
          </div>
          <div className="sub-text-price">
            One subscription. More benefits. Access to all Serviceplan Agents.
          </div>
        </div>
        <div className="table-style">
          <div className="row">
            <div className="table-item">
              <div className="column-title">FEATURE</div>
            </div>
            <div className="table-item-2">
              <div className="column-title">Serviceplan AI Partners</div>
            </div>
            <div className="table-item-2">
              <div className="column-title">
                ChatGPT/ Claude<br />
              </div>
            </div>
          </div>
          {features.map((feature) => (
            <div key={feature.name} className="row-2">
              <div className={feature.isLast ? "table-item-3" : "table-item-3"}>
                <div className="column-title">{feature.name}</div>
                <div className="description-3">{feature.description}</div>
              </div>
              <div className={feature.isLast ? "table-item-5" : "table-item-4"}>
                <img
                  src="/images/check.svg"
                  loading="lazy"
                  width={16}
                  height={13.390558242797852}
                  alt=""
                  className="plus"
                />
              </div>
              <div className={feature.isLast ? "table-item-5" : "table-item-4"}>
                <div className="dash">
                  <DashIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer-xlarge"></div>
      <div className="mid-cta-wrapper">
        <div className="mid-cta-text-wrap">
          <h3 className="heading-style-h2 is-white">
            Ready for your free analysis – no strings attached?
          </h3>
          <div className="text-size-regular is-white">
            Enter your URL and Hannah analyzes your competition – in just a few
            minutes. Free, no strings attached. The fastest way to see what
            Serviceplan Agents can do.<br />
          </div>
          <div className="form-glass-wrap mid-cta">
            <div id="get-free-analysis" className="glass-effect-form-new">
              <form
                id="wf-form-Get-Free-Analysis-mid"
                name="wf-form-Get-Free-Analysis-mid-2"
                method="get"
                className="form"
              >
                <div>
                  <div>
                    <div className="spacer-small"></div>
                    <div className="div-block-9">
                      <div>
                        <div className="email-form-content-wrap">
                          <div className="form-input-wrap">
                            <label htmlFor="URL" className="form_label">
                              Your website URL
                            </label>
                            <input
                              className="form_input w-input"
                              maxLength={256}
                              name="URL"
                              placeholder="https://your-website.com"
                              type="url"
                              id="URL"
                              required
                            />
                            <div className="text-size-tiny text-style-italic is-white">
                              *By entering your information for a free analysis you
                              agree and accept our{" "}
                              <a
                                href="https://www.sokosumi.com/privacy-policy"
                                target="_blank"
                                className="links-legal"
                                rel="noreferrer"
                              >
                                <span>Privacy Policy.</span>
                              </a>
                            </div>
                          </div>
                          <div className="form-input-wrap">
                            <label htmlFor="Email" className="form_label">
                              Your email address
                            </label>
                            <input
                              className="form_input w-input"
                              maxLength={256}
                              name="Email"
                              placeholder="name@company.com"
                              type="email"
                              id="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="div-block-10">
                        <input
                          type="submit"
                          className="button is-red w-button"
                          value="Get your free analysis"
                        />
                        <div className="spacer-small"></div>
                        <div className="text-size-tiny text-style-italic is-white">
                          *By Proceeding you agree and accept our{" "}
                          <a
                            href="https://www.sokosumi.com/terms-of-service"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="links-legal">Terms of Service.</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
