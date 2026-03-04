import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <Image
              src="/images/sp-logo.png"
              alt="Serviceplan"
              width={140}
              height={28}
              className="h-7 w-auto mb-6"
            />
          </div>

          {/* Agents */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Serviceplan Agents</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#agents" className="text-sm text-muted hover:text-foreground transition-colors">
                  Hannah
                </a>
              </li>
              <li>
                <a href="#agents" className="text-sm text-muted hover:text-foreground transition-colors">
                  Elena
                </a>
              </li>
              <li>
                <a href="#agents" className="text-sm text-muted hover:text-foreground transition-colors">
                  Alex
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://www.sokosumi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Sokosumi
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://app.sokosumi.com/register"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://www.sokosumi.com/imprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="https://www.sokosumi.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.sokosumi.com/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted">
            &copy; 2026 Plan.Net Studios GmbH &amp; Co. KG — A Serviceplan
            Group company
          </p>
        </div>
      </div>
    </footer>
  );
}
