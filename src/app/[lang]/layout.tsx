import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WechatFloat } from "@/components/wechat-float";
import { isValidLocale, locales } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = isValidLocale(lang) ? lang : "zh-CN";
  const t = contentByLocale[safeLang];
  return {
    title: `${t.siteName} | ${t.slogan}`,
    description: t.hero.description,
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = contentByLocale[lang];

  return (
    <div className="site-shell relative flex min-h-screen flex-col text-foreground">
      <SiteHeader lang={lang} />
      <main className="site-main mx-auto w-full max-w-6xl flex-1 px-4 pb-8 pt-6 sm:px-6 sm:pt-8">{children}</main>
      <SiteFooter lang={lang} />
      <WechatFloat
        wechatId={t.wechatId}
        labels={{
          wechatFab: t.labels.wechatFab,
          wechatTitle: t.labels.wechatTitle,
          wechatClose: t.labels.wechatClose,
          wechatScan: t.labels.wechatScan,
          wechatMobileHint: t.labels.wechatMobileHint,
          wechatCopy: t.labels.wechatCopy,
          wechatCopied: t.labels.wechatCopied,
        }}
      />
    </div>
  );
}

