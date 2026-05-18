import type { Locale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type SiteFooterProps = {
  lang: Locale;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const t = contentByLocale[lang];

  return (
    <footer className="site-footer mt-16 border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 text-sm text-slate-600 sm:grid-cols-4 sm:px-6">
        <div>
          <p className="font-semibold text-brand-primary">{t.siteName}</p>
          <p className="mt-2">{t.slogan}</p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">{t.labels.footerCompliance}</p>
          <ul className="mt-2 space-y-1">
            {(t.footerInfo?.compliance ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-slate-900">{t.labels.footerCoverage}</p>
          <ul className="mt-2 space-y-1">
            {(t.footerInfo?.coverage ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-slate-900">{t.labels.footerContact}</p>
          <ul className="mt-2 space-y-1">
            {(t.footerInfo?.contact ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
