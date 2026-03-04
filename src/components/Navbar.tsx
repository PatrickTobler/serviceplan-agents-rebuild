"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center">
          <Image
            src="/images/sp-logo.png"
            alt="Serviceplan"
            width={140}
            height={28}
            className="h-7 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#agents"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Agents
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.sokosumi.com/register"
            className="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            <span>Request a Demo</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 45 45"
              fill="none"
              className="btn-arrow"
            >
              <path
                d="M17 18l1-1c.3 0 .5 0 .8-.1l5.1-.4 1.5-.1c.2 0 .4 0 .5 0 .2.2.4.4.5.6v.1c0 .1-.2 2.3-.2 2.6l-.5 5.6c0 .4 0 .7-.1 1.1 0 .1-.1.7-.1.7l-.1.1c-.1.1-.9.9-1 .9l-.1-.1c.1-.6.1-1.2.2-1.7l.5-4.8v-.3c.1-1.1.2-2.1.3-3.2v-.1c0-.1-.4.3-.5.4l-1.3 1.3-5.3 5.3-2.7 2.7-.8.8c-.1.1-.4.3-.5.5-.2-.2-.4-.4-.6-.6.3-.3.7-.7 1-1l1.9-1.9 5.6-5.6 1.8-1.8.5-.5c.1-.1.2-.2.3-.3-.3 0-.5.1-.7.1-.4 0-.9.1-1.3.1l-6.1.6-1.2.1c-.2 0-.8.1-.9.1z"
                fill="black"
              />
            </svg>
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-4">
          <a href="#agents" className="text-sm text-muted hover:text-foreground">
            Agents
          </a>
          <a href="#pricing" className="text-sm text-muted hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted hover:text-foreground">
            Contact
          </a>
          <a
            href="https://app.sokosumi.com/register"
            className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full"
          >
            Request a Demo
          </a>
        </div>
      )}
    </nav>
  );
}
