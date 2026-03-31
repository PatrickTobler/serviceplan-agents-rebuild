"use client";

import { usePathname } from "next/navigation";
import { Locale } from "@/lib/translations";

export default function LanguageToggle({ locale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();

  const getTargetPath = (targetLocale: Locale) => {
    if (targetLocale === "de") {
      if (pathname === "/" || pathname === "") return "/de";
      if (pathname === "/request-a-demo") return "/de/request-a-demo";
      if (pathname.startsWith("/de")) return pathname;
      return "/de" + pathname;
    } else {
      if (pathname === "/de" || pathname === "/de/") return "/";
      if (pathname === "/de/request-a-demo") return "/request-a-demo";
      if (pathname.startsWith("/de")) return pathname.replace(/^\/de/, "") || "/";
      return pathname;
    }
  };

  return (
    <div className="language-toggle">
      <a
        href={getTargetPath("en")}
        className={locale === "en" ? "active" : "inactive"}
      >
        EN
      </a>
      <span className="separator">|</span>
      <a
        href={getTargetPath("de")}
        className={locale === "de" ? "active" : "inactive"}
      >
        DE
      </a>
    </div>
  );
}
