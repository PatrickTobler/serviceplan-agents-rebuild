import Image from "next/image";

const logoRow1 = [
  { src: "/images/bmw.svg", alt: "BMW" },
  { src: "/images/deloitte.svg", alt: "Deloitte" },
  { src: "/images/amazon.svg", alt: "Amazon" },
  { src: "/images/EY.svg", alt: "EY" },
  { src: "/images/toyota.svg", alt: "Toyota" },
  { src: "/images/airbus.svg", alt: "Airbus" },
  { src: "/images/frame-18608.svg", alt: "Partner" },
  { src: "/images/frame-18610.svg", alt: "Partner" },
  { src: "/images/frame-18611.svg", alt: "Partner" },
  { src: "/images/frame-18612.svg", alt: "Partner" },
];

const logoRow2 = [
  { src: "/images/vector.svg", alt: "Partner" },
  { src: "/images/vector-1.svg", alt: "Partner" },
  { src: "/images/vector-2.svg", alt: "Partner" },
  { src: "/images/vector-3.svg", alt: "Partner" },
  { src: "/images/vector-5.svg", alt: "Partner" },
  { src: "/images/vector-6.svg", alt: "Partner" },
  { src: "/images/path1.svg", alt: "Partner" },
  { src: "/images/gwi-logo.svg", alt: "GWI" },
];

export default function Companies() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Over 500 companies use agents on Sokosumi.
        </h2>
      </div>

      {/* Logo marquee row 1 */}
      <div className="overflow-hidden mb-6">
        <div className="flex animate-marquee">
          {[...logoRow1, ...logoRow1].map((logo, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center justify-center min-w-[160px] h-16 mx-6 opacity-40 hover:opacity-80 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain invert brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee row 2 */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {[...logoRow2, ...logoRow2].map((logo, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center justify-center min-w-[160px] h-16 mx-6 opacity-40 hover:opacity-80 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain invert brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold">20</span>
              <span className="text-xl text-muted">min</span>
            </div>
            <p className="text-sm text-muted">
              Average delivery time for research
            </p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold">9</span>
              <span className="text-xl text-muted">+</span>
            </div>
            <p className="text-sm text-muted">
              Premium data sources, no extra contracts
            </p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-2xl md:text-3xl font-bold">from 10</span>
              <span className="text-xl text-muted">EUR</span>
            </div>
            <p className="text-sm text-muted">
              vs. 5,000 &euro; agency retainer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
