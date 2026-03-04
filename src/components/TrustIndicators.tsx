export default function TrustIndicators() {
  const indicators = [
    { label: "Largest in Europe", icon: "🏢" },
    { label: "Hosted in Germany", icon: "🇩🇪" },
    { label: "Fully GDPR-compliant", icon: "🛡️" },
    { label: "Identity & Accountability", icon: "🔗" },
    { label: "EU AI Act compliant", icon: "🇪🇺" },
  ];

  return (
    <section className="py-8 border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {indicators.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-muted"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
