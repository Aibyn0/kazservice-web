import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeHero } from "@/components/home-hero";
import { ProcessFlow } from "@/components/process-flow";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { isValidLocale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];
  const caseMetric =
    lang === "zh-CN" ? "1500万" : lang === "ru-RU" ? "USD 15M" : "USD 15M";
  return (
    <div className="home-page pb-4">
      <HomeHero lang={lang} />
      {t.positioning && (
        <Section className="home-intro-panel">
          <SectionHeader eyebrow="Why Us" title={t.labels.positioning} />
          <p className="text-base leading-relaxed">{t.positioning}</p>
        </Section>
      )}

      {t.projectTracks && (
        <Section>
          <SectionHeader title={t.labels.quickEntryTitle} description={t.hero.description} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.projectTracks.map((track, i) => (
              <article key={track.title} className="card-hover track-card">
                <span className="text-xs font-bold text-brand-accent">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-brand-primary">{track.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{track.summary}</p>
                <Link
                  href={`/${lang}${track.href}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:underline"
                >
                  {t.labels.quickEntryAction}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader title={t.labels.coreStrengths} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {t.strengths.map((strength) => (
            <li key={strength} className="strength-item py-1">
              {strength}
            </li>
          ))}
        </ul>
      </Section>

      {t.about && (
        <Section>
          <SectionHeader title={t.labels.aboutUs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.map((line, i) => (
              <p key={line} className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                <span className="mr-2 font-bold text-brand-accent">{i + 1}.</span>
                {line}
              </p>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader
          title={t.nav.services}
          action={
            <Link href={`/${lang}/services`} className="btn btn-ghost text-sm">
              {t.labels.viewAll} →
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.services.map((item, i) => (
            <article key={item.title} className="card-hover">
              <span className="inline-flex rounded-full bg-brand-accent/15 px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      {t.caseStudy && (
        <Section>
          <SectionHeader title={t.labels.caseStudy} />
          <article className="case-highlight">
            <div className="case-metric">
              <p className="text-xs uppercase tracking-wider text-slate-300">{t.labels.result}</p>
              <p className="case-metric-value mt-2">{caseMetric}</p>
              <p className="mt-2 text-xs text-slate-200">
                {lang === "zh-CN" ? "美元融资" : lang === "ru-RU" ? "инвестиции" : "financing"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-primary">{t.caseStudy.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-800">{t.labels.challenge}: </span>
                {t.caseStudy.challenge}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{t.labels.solution}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                    {t.caseStudy.solution.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{t.labels.result}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                    {t.caseStudy.result.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Section>
      )}

      {t.processSteps && (
        <Section className="home-process-section">
          <SectionHeader title={t.labels.process} />
          <ProcessFlow steps={t.processSteps} />
        </Section>
      )}

      {t.financingSources && (
        <Section>
          <SectionHeader title={t.labels.financingSources} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.financingSources.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="cta-band">
        <h2 className="text-2xl font-bold">{t.labels.contactTitle}</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-200 sm:text-base">{t.labels.contactIntro}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={`/${lang}/contact`} variant="primary">
            {t.labels.primaryAction}
          </ButtonLink>
          <ButtonLink href={`/${lang}/faq`} variant="secondary">
            {t.nav.faq}
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
