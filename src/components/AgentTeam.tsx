import Image from "next/image";

const agents = [
  {
    name: "HANNAH",
    role: "Marketing Research Partner",
    description:
      "Hannah analyzes markets, competitors, and audiences. She works data-driven, has a point of view, and delivers insights – not data graveyards.",
    quote: "What is actually true?",
    availability: "Available now",
    availabilityColor: "bg-green",
    image: "/images/hannah-transp.webp",
    cta: "Try Hannah free",
    ctaLink: "https://app.sokosumi.com/register",
  },
  {
    name: "ELENA",
    role: "AI Operations & Project Management Partner",
    description:
      "Elena turns ambitious plans into actionable steps. She calls out unrealistic assumptions and makes sure projects actually get delivered.",
    quote: "What is actually doable?",
    availability: "Coming 2026",
    availabilityColor: "bg-orange",
    image: "/images/he-groupe-transp.webp",
    cta: "Get your free analysis",
    ctaLink: "https://app.sokosumi.com/register",
  },
  {
    name: "ALEX",
    role: "Coding Partner",
    description:
      "Alex turns data into dashboards, visuals, and interactive micro-sites. He is making information dynamic, accessible, and easy to share.",
    quote: "How does data come alive?",
    availability: "Coming 2026",
    availabilityColor: "bg-blue",
    image: "/images/alex-img.webp",
    cta: "Get your free analysis",
    ctaLink: "https://app.sokosumi.com/register",
  },
];

export default function AgentTeam() {
  return (
    <section className="py-24 md:py-32" id="agents">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your AI Marketing Team
          </h2>
          <p className="text-muted text-base md:text-lg max-w-3xl mx-auto">
            Serviceplan Agents are specialized AI partners – each with a clear
            role, real expertise, and the confidence to push back when something
            doesn&apos;t add up. A team that works together, knows your
            business, and grows with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass-card group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs text-muted bg-black/50 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                    by Serviceplan
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${agent.availabilityColor}`}
                  />
                  <span className="text-xs text-foreground bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5">
                    {agent.availability}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className="text-sm text-muted mb-3">{agent.role}</p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {agent.description}
                </p>

                <div className="glass-card-strong inline-block px-3 py-1.5 mb-5">
                  <span className="text-xs italic text-muted">
                    &ldquo;{agent.quote}&rdquo;
                  </span>
                </div>

                <div>
                  <a
                    href={agent.ctaLink}
                    className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                  >
                    {agent.cta}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 13L13 3M13 3H5M13 3V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growing team notice */}
        <div className="mt-12 text-center">
          <div className="glass-card inline-block px-8 py-6 max-w-lg">
            <p className="text-sm text-muted mb-4">
              The Serviceplan Agents team is growing. Specialized AI partners for
              additional marketing disciplines are in development.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://app.sokosumi.com/register"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Get notified
              </a>
              <span className="text-xs text-orange bg-orange/10 border border-orange/20 rounded-full px-3 py-1">
                Coming 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
