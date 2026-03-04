"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              AI Coworkers for
              <br />
              Your Marketing.
              <br />
              <span className="text-muted">By Serviceplan.</span>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
              Europe&apos;s leading agency – now in your inbox. Serviceplan
              Agents are AI coworkers for market research, project management,
              and strategy – built for companies, start-ups, and solopreneurs.
              They work via email, WhatsApp, or Teams, get to know your
              business, and tap into a network of specialized agents.
            </p>

            {/* Signup form */}
            <div className="glass-card p-6 md:p-8 max-w-lg">
              <h3 className="text-lg font-semibold mb-1">
                Try Hannah free – no strings attached
              </h3>
              <p className="text-sm text-muted mb-6">
                Enter your website URL and our research specialist Hannah will
                deliver a free competitive analysis straight to your inbox.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-muted mb-1 block">
                      Your email address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-1 block">
                      Your website URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://your-website.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors mt-2"
                  >
                    Get your free analysis
                  </button>
                  <p className="text-xs text-muted/60">
                    *By entering your information for a free analysis you agree
                    and accept our{" "}
                    <a
                      href="https://www.sokosumi.com/privacy-policy"
                      className="underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                  <p className="text-sm text-muted mb-2">
                    Hannah&apos;s already on it.
                  </p>
                  <p className="text-sm text-muted">
                    After confirming your email address, you&apos;ll get a free
                    competitive analysis in your inbox – based on the URL you
                    just shared.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Agent visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative">
              <Image
                src="/images/hannah.webp"
                alt="Hannah - Marketing Research Partner"
                width={500}
                height={600}
                className="rounded-2xl object-cover"
                priority
              />
              {/* Floating chat chips */}
              <div className="absolute -left-16 top-1/4 glass-card-strong px-4 py-3 flex items-center gap-3 max-w-[260px]">
                <div className="w-6 h-6 rounded bg-[#7B83EB] flex items-center justify-center text-[10px] text-white shrink-0">
                  T
                </div>
                <span className="text-xs">
                  Is my competitor changing their pricing?
                </span>
              </div>
              <div className="absolute -right-8 top-[45%] glass-card-strong px-4 py-3 flex items-center gap-3 max-w-[260px]">
                <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center text-[10px] text-white shrink-0">
                  W
                </div>
                <span className="text-xs">
                  How can I improve my Google ranking?
                </span>
              </div>
              <div className="absolute -left-8 bottom-1/4 glass-card-strong px-4 py-3 flex items-center gap-3 max-w-[260px]">
                <div className="w-6 h-6 rounded bg-blue flex items-center justify-center text-[10px] text-white shrink-0">
                  @
                </div>
                <span className="text-xs">
                  Are my competitors running paid ads?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
