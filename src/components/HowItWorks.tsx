import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Serviceplan Agents Work
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            No new tools. No onboarding. Serviceplan Agents work where you
            already work – via email and Microsoft Teams. Here&apos;s what
            working together looks like:
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-muted bg-white/5 border border-border rounded-full px-3 py-1">
                  Step 1
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Describe what you need
              </h3>
              <p className="text-muted text-base leading-relaxed">
                Just send an email or Teams message in plain language. No prompt
                engineering required. The right agent picks up your request and
                asks follow-up questions if needed.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <Image
                src="/images/step-1.webp"
                alt="Step 1 - Describe what you need"
                width={500}
                height={350}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 glass-card p-6 md:p-8">
              {/* Kanban board mockup */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <h4 className="text-xs font-semibold text-orange mb-3 uppercase tracking-wider">
                    Priority
                  </h4>
                  <div className="flex flex-col gap-2">
                    {["SEO audit", "Instagram review", "Keyword gaps"].map(
                      (task) => (
                        <div
                          key={task}
                          className="bg-white/5 border border-border rounded-lg p-3"
                        >
                          <span className="text-xs">{task}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue mb-3 uppercase tracking-wider">
                    In Progress
                  </h4>
                  <div className="flex flex-col gap-2">
                    {[
                      "Homepage SEO audit",
                      "Competitor pricing review",
                      "Q2 keyword research",
                    ].map((task) => (
                      <div
                        key={task}
                        className="bg-white/5 border border-border rounded-lg p-3"
                      >
                        <span className="text-xs">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-green mb-3 uppercase tracking-wider">
                    Done
                  </h4>
                  <div className="flex flex-col gap-2">
                    {[
                      "Brand mention tracking",
                      "Customer review analysis",
                      "Sustainability messaging",
                    ].map((task) => (
                      <div
                        key={task}
                        className="bg-white/5 border border-border rounded-lg p-3"
                      >
                        <span className="text-xs">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-muted bg-white/5 border border-border rounded-full px-3 py-1">
                  Step 2
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Agents get to work
              </h3>
              <p className="text-muted text-base leading-relaxed">
                Your agent does the research, pulls from specialized data
                sources, and puts together your reports – without you having to
                step in. Complex tasks get broken down and handed off to other
                agents automatically.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-muted bg-white/5 border border-border rounded-full px-3 py-1">
                  Step 3
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Results in your inbox
              </h3>
              <p className="text-muted text-base leading-relaxed">
                Polished documents land right in your inbox: PDF, PowerPoint,
                Excel, or interactive dashboards. With structured findings,
                clear recommendations, and an honest take on data quality.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <Image
                src="/images/step-3.webp"
                alt="Step 3 - Results in your inbox"
                width={500}
                height={350}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
