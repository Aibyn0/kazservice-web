"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type SiteHeaderProps = {
  lang: Locale;
};

const LOGO_SRC = "/images/sinomar-logo.png?v=2";

const LANG_OPTIONS: { locale: Locale; label: string }[] = [
  { locale: "zh-CN", label: "中文" },
  { locale: "en-US", label: "English" },
  { locale: "ru-RU", label: "Русский" },
];

function localizedPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }
  return `/${nextLocale}`;
}

export function SiteHeader({ lang }: SiteHeaderProps) {
  const t = contentByLocale[lang];
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  const navItems = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/industries`, label: t.nav.industries },
    { href: `/${lang}/faq`, label: t.nav.faq },
  ];

  function navClass(href: string) {
    return pathname === href ? "nav-link nav-link-active" : "nav-link";
  }

  return (
    <header className={isHome ? "site-header site-header--hero" : "site-header"}>
      <div className="site-header__inner">
        <Link href={`/${lang}`} className="site-logo" aria-label={t.siteName}>
          <Image
            src={LOGO_SRC}
            alt="SINOMAR INVESTMENT LTD"
            width={280}
            height={72}
            className="site-logo-img"
            priority
            unoptimized
          />
        </Link>

        <nav className="site-header__nav" aria-label="Main">
          <div className="site-header__links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={navClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="site-header__actions">
            <Link href={`/${lang}/contact`} className="nav-cta">
              {t.nav.contact}
            </Link>
            <LangMenu lang={lang} onNavigate={() => setMobileOpen(false)} />
          </div>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="site-header__drawer md:hidden">
          <nav className="site-header__drawer-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(item.href)}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contact`}
              className="nav-cta site-header__drawer-cta"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <LangMenu lang={lang} onNavigate={() => setMobileOpen(false)} expanded />
          </nav>
        </div>
      )}
    </header>
  );
}

type LangMenuProps = {
  lang: Locale;
  onNavigate?: () => void;
  /** 手机抽屉内默认展开列表 */
  expanded?: boolean;
};

function LangMenu({ lang, onNavigate, expanded = false }: LangMenuProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(expanded);
  const current = LANG_OPTIONS.find((item) => item.locale === lang) ?? LANG_OPTIONS[0];

  useEffect(() => {
    if (expanded) {
      setOpen(true);
      return;
    }
    if (!open) {
      return;
    }
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded, open]);

  return (
    <div
      ref={rootRef}
      className={`lang-menu${expanded ? " lang-menu--expanded" : ""}`}
    >
      {!expanded && (
        <button
          type="button"
          className="lang-menu__trigger"
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="lang-menu__globe" aria-hidden>
            🌐
          </span>
          <span className="lang-menu__current">{current.label}</span>
          <span className={`lang-menu__chevron${open ? " lang-menu__chevron--open" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
      )}
      {expanded && <p className="lang-menu__drawer-label">Language</p>}
      {(open || expanded) && (
        <ul className="lang-menu__list" role="listbox" aria-label="Language">
          {LANG_OPTIONS.map((item) => (
            <li key={item.locale} role="option" aria-selected={item.locale === lang}>
              <Link
                href={localizedPath(pathname, item.locale)}
                className={`lang-menu__option${item.locale === lang ? " lang-menu__option--active" : ""}`}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
