export default function HouseOfAI() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">House of AI</h2>
        <p className="text-muted text-base leading-relaxed mb-8 max-w-xl mx-auto">
          AI is changing how we work, think, and grow. It&apos;s not just a tool
          – it&apos;s a mindset shaping the future of our Group. That&apos;s why
          we bring everything AI at the Serviceplan Group under one roof – our
          tools, agents, and experts.
        </p>
        <a
          href="https://www.house-of-communication.com/de/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          <span>Learn more about House of AI</span>
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
    </section>
  );
}
