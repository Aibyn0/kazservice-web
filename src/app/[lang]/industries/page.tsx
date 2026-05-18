import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { isValidLocale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type IndustriesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];

  return (
    <div className="inner-page">
      <PageHeader title={t.nav.industries} description={t.labels.industryIntro} />

      <div className="grid gap-4 sm:grid-cols-2">
        {t.industries.map((industry) => (
          <article key={industry.title} className="content-card">
            <h2 className="text-xl font-semibold">{industry.title}</h2>
            <p className="mt-2">{industry.summary}</p>
          </article>
        ))}
      </div>

      {t.marketResearchSteps && (
        <section className="content-card">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.marketResearchMethod}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {t.marketResearchSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
