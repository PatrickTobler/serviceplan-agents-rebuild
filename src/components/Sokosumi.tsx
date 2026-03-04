import Image from "next/image";

export default function Sokosumi() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          {/* Sokosumi logo text */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">sokosumi</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            No new tools. One clear dashboard.
            <br />
            <span className="text-muted">One shared workspace</span>
          </h2>

          <p className="text-sm text-muted mb-2">
            Open source shared workspace, built by Serviceplan.
          </p>

          <p className="text-muted text-base max-w-2xl mx-auto mb-8">
            Reach your agents via email, WhatsApp, or Teams – whatever works
            best. Sokosumi is your shared workspace, where every task is
            organized and even more agents are ready to help.
          </p>

          <a
            href="https://www.sokosumi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Learn more about Sokosumi
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

        {/* Dashboard mockup */}
        <div className="glass-card p-2 md:p-4 overflow-hidden">
          <div className="rounded-xl overflow-hidden bg-[#111] border border-border">
            {/* Mockup toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/5 rounded-md px-4 py-1 text-xs text-muted">
                  app.sokosumi.com
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex min-h-[400px] md:min-h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-56 border-r border-border p-4 shrink-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-pink/20 flex items-center justify-center">
                    <span className="text-xs text-pink">S</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Susann</p>
                    <p className="text-[10px] text-muted">6505 credits</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  {[
                    "Dashboard",
                    "Task Manager",
                    "Agents",
                    "History",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? "bg-white/5 text-foreground" : "text-muted hover:text-foreground"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Agent gallery mini */}
                <div className="mt-6">
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-3">
                    Your Agents
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Hannah", color: "bg-accent/20" },
                      { name: "Elena", color: "bg-orange/20" },
                      { name: "Alex", color: "bg-blue/20" },
                      { name: "More", color: "bg-white/5" },
                    ].map((agent) => (
                      <div
                        key={agent.name}
                        className={`${agent.color} rounded-lg p-2 text-center`}
                      >
                        <span className="text-[10px]">{agent.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-medium">Task Manager</h4>
                  <div className="flex gap-2">
                    <span className="text-[10px] text-muted bg-white/5 rounded px-2 py-1">
                      Kanban
                    </span>
                    <span className="text-[10px] text-muted bg-white/5 rounded px-2 py-1">
                      Jobs
                    </span>
                  </div>
                </div>

                {/* Mini kanban */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      title: "Backlog",
                      color: "text-muted",
                      count: 3,
                    },
                    {
                      title: "To Do",
                      color: "text-orange",
                      count: 2,
                    },
                    {
                      title: "In Progress",
                      color: "text-blue",
                      count: 4,
                    },
                    {
                      title: "Complete",
                      color: "text-green",
                      count: 5,
                    },
                  ].map((col) => (
                    <div key={col.title}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-[10px] font-medium ${col.color}`}>
                          {col.title}
                        </span>
                        <span className="text-[10px] text-muted">
                          {col.count}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {Array.from({ length: Math.min(col.count, 3) }).map(
                          (_, i) => (
                            <div
                              key={i}
                              className="bg-white/[0.03] border border-border rounded-lg p-3"
                            >
                              <div className="w-full h-2 bg-white/5 rounded mb-2" />
                              <div className="w-2/3 h-2 bg-white/5 rounded" />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
