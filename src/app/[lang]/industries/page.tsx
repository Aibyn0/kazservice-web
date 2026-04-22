import { notFound } from "next/navigation";
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
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-primary">{t.nav.industries}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t.labels.industryIntro}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {t.industries.map((industry) => (
          <article key={industry.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{industry.title}</h2>
            <p className="mt-2 text-slate-600">{industry.summary}</p>
          </article>
        ))}
      </div>

      {t.marketResearchSteps && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">{t.labels.marketResearchMethod}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
            {t.marketResearchSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
