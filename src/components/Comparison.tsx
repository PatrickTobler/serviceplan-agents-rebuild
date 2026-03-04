const features = [
  {
    name: "Opinionated analysis",
    description: '"My Take" with honest recommendations',
    sp: true,
    generic: false,
  },
  {
    name: "Domain expertise",
    description: "Serviceplan marketing & research knowledge",
    sp: true,
    generic: false,
  },
  {
    name: "Premium data sources",
    description: "GWI, DataForSEO, Statista, Social APIs",
    sp: true,
    generic: false,
  },
  {
    name: "Email access",
    description: "Send requests without logging into anything",
    sp: true,
    generic: false,
  },
  {
    name: "Task board",
    description: "Single source of truth for all work and files",
    sp: true,
    generic: false,
  },
  {
    name: "Active project management",
    description: "Organized: Programmes, Projects, Work Packages, Tasks",
    sp: true,
    generic: false,
  },
  {
    name: "Learns your preferences",
    description: "Improves based on your feedback over time",
    sp: true,
    generic: false,
  },
  {
    name: "Human escalation",
    description: "Routes to real people when needed",
    sp: true,
    generic: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Sets Serviceplan Agents Apart
          </h2>
          <p className="text-muted text-base md:text-lg">
            One subscription. More benefits. Access to all Serviceplan Agents.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-6 py-4 border-b border-border">
            <span className="text-sm font-medium text-muted">Feature</span>
            <span className="text-xs font-medium text-center">
              Serviceplan
              <br />
              AI Partners
            </span>
            <span className="text-xs font-medium text-muted text-center">
              ChatGPT/
              <br />
              Claude
            </span>
          </div>

          {/* Rows */}
          {features.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-6 py-4 ${
                i < features.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <p className="text-sm font-medium">{feature.name}</p>
                <p className="text-xs text-muted">{feature.description}</p>
              </div>
              <div className="flex justify-center">
                {feature.sp ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 10L9 14L15 6"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="text-muted">—</span>
                )}
              </div>
              <div className="flex justify-center">
                {feature.generic ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 10L9 14L15 6"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="text-muted">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
