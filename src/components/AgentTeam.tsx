export default function AgentTeam() {
  return (
    <div id="agents" className="marketing-team-contetn">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="header-wrapper">
              <h2><strong>Your AI Marketing Team</strong></h2>
              <div className="sub-text-heading">
                Serviceplan Agents are specialized AI partners – each with a clear role, real
                expertise, and the confidence to push back when something doesn&apos;t add up. A
                team that works together, knows your business, and grows with you.
              </div>
            </div>

            {/* Hannah */}
            <div id="hannah" className="marketing-team-card">
              <img
                src="/images/hannah-transp.webp"
                loading="lazy"
                alt=""
                className="hannah-ai"
              />
              <div className="glass-chip sub-text">
                <div>What is actually true?</div>
                <div className="w-embed"></div>
              </div>
              <div className="ai-cowrker-header">
                <div>
                  <div className="text-icon w-embed">
                    <img src="/images/hannah-name.svg" alt="Hannah" />
                  </div>
                  <div className="spacer-xsmall"></div>
                  <div className="step is-white">by Serviceplan</div>
                </div>
                <a href="#" className="button-round w-button">Available now</a>
              </div>
              <div className="ai-cowrker-header">
                <div className="ai-coworker-details">
                  <h3 className="heading-style-h3">Marketing Research Partner</h3>
                  <div className="spacer-small"></div>
                  <div className="text-size-regular is-white">
                    Hannah analyzes markets, competitors, and audiences. She works data-driven,
                    has a point of view, and delivers insights – not data graveyards.<br />
                  </div>
                  <div className="spacer-large"></div>
                  <a href="#free-analysis" className="button is-red w-button">
                    Try Hannah free
                  </a>
                </div>
              </div>
            </div>

            {/* Elena */}
            <div id="elena" className="marketing-team-card elena">
              <img
                src="/images/he-groupe-transp.webp"
                loading="lazy"
                alt=""
                className="elena-ai"
              />
              <div className="ai-cowrker-header">
                <div>
                  <div className="text-icon w-embed">
                    <img src="/images/elena-name.svg" alt="Elena" />
                  </div>
                  <div className="spacer-xsmall"></div>
                  <div className="step is-white">by Serviceplan</div>
                </div>
                <a href="#" className="button-round is-gray w-button">
                  Coming 2026<br />
                </a>
              </div>
              <div className="ai-cowrker-header">
                <div className="ai-coworker-details">
                  <h3 className="heading-style-h3">
                    AI Operations &amp; Project Management Partner
                  </h3>
                  <div className="spacer-small"></div>
                  <div className="text-size-regular is-white">
                    Elena turns ambitious plans into actionable steps. She calls out unrealistic
                    assumptions and makes sure projects actually get delivered.
                  </div>
                  <div className="spacer-large"></div>
                  <a href="#free-analysis" className="button is-red w-button">
                    Get your free analysis
                  </a>
                </div>
              </div>
              <div className="glass-chip sub-text-elena">
                <div className="text-size-small text-weight-medium is-white">
                  What is actually doable?
                </div>
                <div className="w-embed"></div>
              </div>
            </div>

            {/* Alex */}
            <div id="alex" className="marketing-team-card alex">
              <img
                src="/images/alex-img.webp"
                loading="lazy"
                alt=""
                className="alex-ai"
              />
              <div className="ai-cowrker-header">
                <div>
                  <div className="text-icon w-embed">
                    <img src="/images/alex-name.svg" alt="Alex" />
                  </div>
                  <div className="spacer-xsmall"></div>
                  <div className="step is-white">by Serviceplan</div>
                </div>
                <a href="#" className="button-round is-gray w-button">
                  Coming 2026<br />
                </a>
              </div>
              <div className="ai-cowrker-header">
                <div className="ai-coworker-details">
                  <h3 className="heading-style-h3">Coding Partner</h3>
                  <div className="spacer-small"></div>
                  <div className="text-size-regular is-white">
                    Alex turns data into dashboards, visuals, and interactive micro-sites. He is
                    making information dynamic, accessible, and easy to share.
                  </div>
                  <div className="spacer-large"></div>
                  <a href="#free-analysis" className="button is-red w-button">
                    Get your free analysis
                  </a>
                </div>
              </div>
              <div className="glass-chip sub-text">
                <div className="text-size-small text-weight-medium is-white">
                  How does data come alive?
                </div>
                <div className="w-embed"></div>
              </div>
            </div>

            {/* Get notified section */}
            <div className="get-notified-wrap">
              <img
                src="/images/mask-group.webp"
                loading="lazy"
                width={722}
                alt="AI coworkers Hannah Elena Alex"
                className="agent-list-images"
              />
              <div className="div-block-22">
                <div className="div-block-21">
                  <h5>
                    The Serviceplan Agents team is growing. Specialized AI partners for
                    additional marketing disciplines are in development.
                  </h5>
                  <div className="spacer-medium"></div>
                  <a href="#free-analysis" className="button is-red secondary w-button">
                    Get notified
                  </a>
                </div>
                <a href="#" className="button-round is-gray w-button">
                  Coming 2026
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
