"use client";

import { useState } from "react";

export default function FreeAnalysis() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for your free analysis – no strings attached?
        </h2>
        <p className="text-muted text-base mb-10 max-w-xl mx-auto">
          Enter your URL and Hannah analyzes your competition – in just a few
          minutes. Free, no strings attached. The fastest way to see what
          Serviceplan Agents can do.
        </p>

        <div className="glass-card p-6 md:p-8 text-left">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <button
                type="submit"
                className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors mt-2"
              >
                Get your free analysis
              </button>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                <span className="text-xs text-muted bg-white/5 rounded-full px-3 py-1">
                  Free Plan
                </span>
                <span className="text-xs text-muted bg-white/5 rounded-full px-3 py-1">
                  3,000 credits included, valued at &euro;36
                </span>
                <span className="text-xs text-muted bg-white/5 rounded-full px-3 py-1">
                  No credit card required
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
              <p className="text-sm text-muted mb-2">
                Hannah&apos;s already on it.
              </p>
              <p className="text-sm text-muted">
                After confirming your email address, you&apos;ll get a free
                competitive analysis in your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
