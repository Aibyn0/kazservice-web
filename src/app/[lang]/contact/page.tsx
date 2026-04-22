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
    <div className="space-y-6">
      <section className="rounded-2xl bg-brand-primary px-6 py-8 text-white">
        <h1 className="text-3xl font-bold">{t.labels.contactTitle}</h1>
        <p className="mt-2 max-w-3xl text-slate-200">{t.labels.contactIntro}</p>
      </section>

      <ContactForm labels={t.labels} />
    </div>
  );
}
