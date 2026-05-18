import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ProcessFlow } from "@/components/process-flow";
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
    <div className="inner-page">
      <PageHeader
        title={t.nav.services}
        description={t.hero.description}
        actionHref={`/${lang}/contact`}
        actionLabel={t.labels.primaryAction}
      />

      <div className="grid gap-5">
        {t.services.map((item, index) => (
          <article key={item.title} className="content-card">
            <p className="text-xs font-semibold tracking-wide text-brand-accent">
              {moduleLabel} {index + 1}
            </p>
            <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2">{item.summary}</p>

            {item.details && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.serviceContent}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.forWho && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.fitProjects}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {item.forWho.map((target) => (
                    <li key={target}>{target}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.notForWho && (
              <div className="content-card--accent mt-4 p-4">
                <h3 className="text-sm font-semibold">{t.labels.notFitProjects}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {item.notForWho.map((target) => (
                    <li key={target}>{target}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.deliverables && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-brand-primary">{t.labels.deliverables}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
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
        <section className="content-card">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.financingSources}</h2>
          <p className="mt-2">{financingDesc}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {t.financingSources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {t.workMethod && (
        <section className="content-card">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.workMethod}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {t.workMethod.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {t.processSteps && (
        <section className="content-card">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.cooperationFlow}</h2>
          <div className="mt-5">
            <ProcessFlow steps={t.processSteps} />
          </div>
        </section>
      )}
    </div>
  );
}
