const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/ Month",
    credits: "200 monthly credits*",
    description: "Getting started to work with marketing agents",
    features: [
      "Limited Access to 1 Agentic Co-Worker",
      "Email and WhatsApp Access to Agents",
      "Latest Generation of Claude Models",
      "Access to 100+ Marketing Agents",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "€25",
    period: "/ Month",
    credits: "1.500 monthly credits*",
    description: "Your Marketing Research Team",
    features: [
      "Access to our Research Coworker",
      "Ability to buy more Credits on Demand",
      "Read & Create Office Documents",
      "Integrate with Microsoft M365",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Standard",
    price: "€75",
    period: "/ Month",
    credits: "5.000 monthly credits*",
    description: "The Full Marketing Team Of Agentic Coworkers",
    features: [
      "Access to our Coding Coworker",
      "3x more Credits for Agents",
      "Schedule recurring Co-Worker tasks",
    ],
    cta: "Go Standard",
    highlight: true,
  },
  {
    name: "Pro",
    price: "€200",
    period: "/ Month",
    credits: "15.000 monthly credits*",
    description: "Get more done with Premium Skills",
    features: [
      "Massive Amount of Credits for Agents",
      "Custom Templates for Output Files",
      "Early Access to new Agents & Features",
    ],
    cta: "Go Pro",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans That Grow with Your Business.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            One subscription. All agents included. Try it free and upgrade when
            you want more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-6 flex flex-col ${
                plan.highlight ? "border-white/20 ring-1 ring-white/10" : ""
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="text-xs text-muted">{plan.credits}</p>
              </div>

              <p className="text-sm text-muted mb-6">{plan.description}</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <path
                        d="M4 8L7 11L12 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.sokosumi.com/register"
                className={`inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/5 text-foreground border border-border hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="mt-4 glass-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-sm text-muted mb-4">
                Customize the Coworkers to your needs
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Enterprise Support & SLAs",
                  "Custom Data & Tools Integrations",
                  "Advanced Security Features",
                  "Access to all Premium Skills",
                  "VPC & On-Premise Deployment",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 8L7 11L12 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://app.sokosumi.com/register"
              className="shrink-0 inline-flex items-center justify-center bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
