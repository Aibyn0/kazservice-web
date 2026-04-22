import { notFound } from "next/navigation";
import { FaqExplorer } from "@/components/faq-explorer";
import { isValidLocale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type FaqPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function FaqPage({ params }: FaqPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-primary">{t.nav.faq}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t.labels.faqIntro}</p>

      {t.faqSections && (
        <FaqExplorer
          sections={t.faqSections}
          allLabel={t.labels.faqAll}
          searchPlaceholder={t.labels.faqSearchPlaceholder}
          noResultsLabel={t.labels.faqNoResults}
        />
      )}

      {!t.faqSections && (
        <div className="space-y-4">
          {t.faqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <p className="mt-2 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
