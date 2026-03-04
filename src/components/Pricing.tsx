const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 7.5H16V8.5H8.5V16H7.5V8.5H0V7.5H7.5V0H8.5V7.5Z" fill="black" />
  </svg>
);

const plans = [
  {
    name: "FREE",
    price: "€0",
    period: "/ Month",
    credits: "200 monthly credits*",
    description: "Getting started to work with marketing agents",
    variant: "corner" as const,
    features: [
      "Limited Access to 1 Agentic Co-Worker",
      "Email and WhatsApp Access to Agents",
      "Latest Generation of Claude Models",
      "Access to 100+ Marketing Agents",
    ],
  },
  {
    name: "Starter",
    price: "€25",
    period: "/ Month",
    credits: "1.500 monthly credits*",
    description: "Your Marketing Research Team",
    variant: "mid" as const,
    features: [
      "Access to our Research Coworker",
      "Ability to buy more Credits on Demand",
      "Read & Create Office Documents",
      "Integrate with Microsoft M365",
    ],
  },
  {
    name: "Standard",
    price: "€75",
    period: undefined,
    credits: "5.000 monthly credits*",
    description: "The Full Marketing Team Of Agentic Coworkers",
    variant: "center" as const,
    features: [
      "Access to our Coding Coworker",
      "3x more Credits for Agents",
      "Schedule recurring Co-Worker tasks",
    ],
  },
  {
    name: "PRO",
    price: "€200",
    period: "/ Month",
    credits: "15.000 monthly credits*",
    description: "Get more done with Premium Skills",
    variant: "mid" as const,
    features: [
      "Massive Amount of Credits for Agents",
      "Custom Templates for Output Files",
      "Early Access to new Agents & Features",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: undefined,
    credits: undefined,
    description: "Customize the Coworkers to your needs",
    variant: "corner" as const,
    features: [
      "Enterprise Support & SLAS",
      "Custom Data & Tools Integrations",
      "Advanced Security Features",
      "Access to all Premium Skills",
      "VPC & On-Premise Deployment",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing-plan-wrap">
      {plans.map((plan) => (
        <div key={plan.name} className={`pricing-card ${plan.variant}`}>
          <div>
            <div className="step">{plan.name}</div>
            <div className="spacer-24"></div>
            <div className="price-detail">
              <div className="number">{plan.price}</div>
              {plan.period && <div className="sub-text-price">{plan.period}</div>}
            </div>
            {plan.credits && (
              <div className="credit-info text-style-italic">{plan.credits}</div>
            )}
            <div className="spacer-medium"></div>
            <div className="credit-info">{plan.description}</div>
          </div>
          <div className="listing-prices">
            {plan.features.map((feature) => (
              <div key={feature} className="feature">
                <img
                  src="/images/Plus.svg"
                  loading="lazy"
                  width={10}
                  height={10}
                  alt=""
                  className="plus"
                />
                <div className="sub-text-price">{feature}</div>
              </div>
            ))}
          </div>
          <a href="#" className="button is-transparent hide w-inline-block">
            <div>View Details</div>
            <div>
              <PlusIcon />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
