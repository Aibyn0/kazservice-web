import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { isValidLocale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];

  return (
    <div className="inner-page">
      <section className="content-card content-card--hero">
        <h1 className="section-title">{t.labels.contactTitle}</h1>
        <p className="section-desc mt-3 max-w-3xl">{t.labels.contactIntro}</p>
      </section>

      <ContactForm labels={t.labels} />
    </div>
  );
}
