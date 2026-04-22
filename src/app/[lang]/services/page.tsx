import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type ServicesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];
  const moduleLabel = lang === "zh-CN" ? "模块" : "Module";
  const financingDesc =
    lang === "zh-CN"
      ? "根据项目阶段和风险偏好，匹配适合的资本通道与交易结构。"
      : "Match capital channels and deal structures to project stage and risk profile.";

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-primary">{t.nav.services}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t.hero.description}</p>
      <Link
        href={`/${lang}/contact`}
        className="inline-flex rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
      >
        {t.labels.primaryAction}
      </Link>

      <div className="grid gap-6">
        {t.services.map((item, index) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">
              {moduleLabel} {index + 1}
            </p>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-slate-600">{item.summary}</p>

            {item.details && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.serviceContent}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.forWho && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.fitProjects}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {item.forWho.map((target) => (
                    <li key={target}>{target}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.notForWho && (
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
                <h3 className="text-sm font-semibold text-amber-800">{t.labels.notFitProjects}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
                  {item.notForWho.map((target) => (
                    <li key={target}>{target}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.deliverables && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.deliverables}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>

      {t.financingSources && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.financingSources}</h2>
          <p className="mt-2 text-slate-600">{financingDesc}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {t.financingSources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {t.workMethod && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.workMethod}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {t.workMethod.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {t.processSteps && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.cooperationFlow}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
            {t.processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
