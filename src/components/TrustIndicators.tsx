const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16ZM7.50312 11L12.7031 5.8L11.7 4.79688L7.50312 8.99375L5.40312 6.89375L4.4 7.89688L7.50312 11Z" fill="white"/>
  </svg>
);

const indicators = [
  { label: "Largest in Europe", logo: "/images/trust-serviceplan-group.svg" },
  { label: "Hosted in Germany", logo: "/images/trust-microsoft-azure.svg" },
  { label: "Fully GDPR-compliant", logo: "/images/trust-gdpr-compliant.svg" },
  { label: "Identity & Accountability", logo: "/images/trust-masumi.svg" },
  { label: "EU AI Act compliant", logo: "/images/trust-eu-ai-act.svg" },
];

export default function TrustIndicators() {
  return (
    <div className="key-features">
      <div className="grid-container-5x1">
        {indicators.map((item) => (
          <div key={item.label}>
            <div className="div-block-3-copy">
              <div className="icon w-embed">
                <CheckIcon />
              </div>
              <div className="features-head">{item.label}</div>
            </div>
            <div className="spacer-xsmall"></div>
            <div className="trust-logos w-embed">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt={item.label} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
