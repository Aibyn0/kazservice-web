"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type SiteHeaderProps = {
  lang: Locale;
};

export function SiteHeader({ lang }: SiteHeaderProps) {
  const t = contentByLocale[lang];
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function linkClass(href: string, isCta = false) {
    const active = pathname === href;
    if (isCta) {
      return active
        ? "rounded-lg bg-brand-accent px-3 py-1.5 font-semibold text-brand-primary"
        : "rounded-lg bg-brand-primary px-3 py-1.5 font-semibold text-white";
    }
    return active ? "font-semibold text-brand-primary" : "text-slate-700";
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={`/${lang}`} className="text-sm font-bold text-brand-primary sm:text-base">
          {t.siteName}
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-700 md:hidden"
        >
          {mobileOpen ? "关闭" : "菜单"}
        </button>
        <nav className="hidden items-center gap-4 text-sm text-slate-700 md:flex">
          <Link href={`/${lang}`} className={linkClass(`/${lang}`)}>
            {t.nav.home}
          </Link>
          <Link href={`/${lang}/services`} className={linkClass(`/${lang}/services`)}>
            {t.nav.services}
          </Link>
          <Link href={`/${lang}/industries`} className={linkClass(`/${lang}/industries`)}>
            {t.nav.industries}
          </Link>
          <Link href={`/${lang}/faq`} className={linkClass(`/${lang}/faq`)}>
            {t.nav.faq}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className={linkClass(`/${lang}/contact`, true)}
          >
            {t.nav.contact}
          </Link>
          <div className="ml-2 flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1 text-xs">
            <Link href="/zh-CN">中</Link>
            <span>/</span>
            <Link href="/ru-KZ">RU</Link>
          </div>
        </nav>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-700">
            <Link
              href={`/${lang}`}
              className={linkClass(`/${lang}`)}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${lang}/services`}
              className={linkClass(`/${lang}/services`)}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${lang}/industries`}
              className={linkClass(`/${lang}/industries`)}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.industries}
            </Link>
            <Link
              href={`/${lang}/faq`}
              className={linkClass(`/${lang}/faq`)}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.faq}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className={`inline-flex w-fit ${linkClass(`/${lang}/contact`, true)}`}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-2 text-xs">
              <Link href="/zh-CN" onClick={() => setMobileOpen(false)}>
                中文
              </Link>
              <span>/</span>
              <Link href="/ru-KZ" onClick={() => setMobileOpen(false)}>
                RU
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
