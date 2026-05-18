import { notFound } from "next/navigation";
import { FaqExplorer } from "@/components/faq-explorer";
import { PageHeader } from "@/components/page-header";
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
    <div className="inner-page">
      <PageHeader title={t.nav.faq} description={t.labels.faqIntro} />

      {t.faqSections && (
        <FaqExplorer sections={t.faqSections} allLabel={t.labels.faqAll} />
      )}

      {!t.faqSections && (
        <div className="space-y-4">
          {t.faqs.map((item) => (
            <article key={item.question} className="content-card faq-item">
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <p className="mt-2">{item.answer}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
