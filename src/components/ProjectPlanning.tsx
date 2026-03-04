import Image from "next/image";

export default function ProjectPlanning() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold tracking-tight">
                ELENA
              </span>
              <span className="text-xs text-muted border border-border rounded-full px-3 py-1">
                by Serviceplan
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Project Planning & Operations
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              Elena turns complex initiatives into actionable work packages. She
              defines scope, sequence, and dependencies – and spots risks before
              they become problems.
            </p>
            <a
              href="https://app.sokosumi.com/register"
              className="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <span>Get your free analysis</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="btn-arrow"
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

          <div className="relative">
            <Image
              src="/images/elena.png"
              alt="Elena - Project Management Partner"
              width={500}
              height={500}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
