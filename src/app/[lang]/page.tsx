import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-brand-primary to-[#0b2d5f] px-6 py-10 text-white shadow-lg sm:px-10 sm:py-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">{t.slogan}</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{t.hero.title}</h1>
            <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">{t.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/contact`}
                className="rounded-xl bg-brand-accent px-5 py-2 font-semibold text-brand-primary"
              >
                {t.labels.primaryAction}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="rounded-xl border border-slate-200 px-5 py-2 font-semibold text-white"
              >
                {t.labels.secondaryAction}
              </Link>
            </div>
          </div>

          {t.proofStats && (
            <div className="grid grid-cols-2 gap-3">
              {t.proofStats.map((item) => (
                <article key={item.label} className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-xl font-bold text-brand-accent sm:text-2xl">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-100">{item.label}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {t.positioning && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.positioning}</h2>
          <p className="mt-3 text-slate-700">{t.positioning}</p>
        </section>
      )}

      {t.projectTracks && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.quickEntryTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {t.projectTracks.map((track) => (
              <article key={track.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{track.summary}</p>
                <Link
                  href={`/${lang}${track.href}`}
                  className="mt-3 inline-flex text-sm font-semibold text-brand-primary underline"
                >
                  {t.labels.quickEntryAction}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <h2 className="text-2xl font-bold text-brand-primary">{t.labels.coreStrengths}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.strengths.map((strength) => (
            <div key={strength} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {strength}
            </div>
          ))}
        </div>
      </section>

      {t.about && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.aboutUs}</h2>
          <div className="mt-4 space-y-3">
            {t.about.map((line) => (
              <p key={line} className="text-slate-700">
                {line}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-primary">{t.nav.services}</h2>
          <Link href={`/${lang}/services`} className="text-sm font-semibold text-brand-primary underline">
            {t.labels.viewAll}
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {t.services.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {t.caseStudy && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.caseStudy}</h2>
          <article className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold">{t.caseStudy.title}</h3>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">{t.labels.challenge}：</span>
              {t.caseStudy.challenge}
            </p>
            <div className="mt-3">
              <p className="font-semibold text-slate-800">{t.labels.solution}：</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {t.caseStudy.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <p className="font-semibold text-slate-800">{t.labels.result}：</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {t.caseStudy.result.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <p className="font-semibold text-slate-800">{t.labels.replicableMethod}：</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {t.caseStudy.method.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      )}

      {t.processSteps && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.process}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.processSteps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold tracking-wide text-brand-accent">STEP {index + 1}</p>
                <p className="mt-2 text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {t.financingSources && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-primary">{t.labels.financingSources}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {t.financingSources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
