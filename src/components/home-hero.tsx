import { ButtonLink } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { contentByLocale } from "@/lib/site-content";

type HomeHeroProps = {
  lang: Locale;
};

export function HomeHero({ lang }: HomeHeroProps) {
  const t = contentByLocale[lang];
  const heroStats = t.heroStats ?? t.proofStats?.slice(0, 3);

  return (
    <section className="home-hero full-bleed" aria-labelledby="home-hero-title">
      <div className="home-hero__bg" aria-hidden />
      <div className="home-hero__gradient" aria-hidden />
      <div className="home-hero__container">
        <div className="home-hero__content">
          <p className="home-hero__badge">{t.slogan}</p>
          <h1 id="home-hero-title" className="home-hero__title">
            {t.hero.title}
          </h1>
          <p className="home-hero__desc">{t.hero.description}</p>
          <div className="home-hero__actions">
            <ButtonLink href={`/${lang}/contact`} variant="primary">
              {t.labels.primaryAction}
            </ButtonLink>
            <ButtonLink href={`/${lang}/services`} variant="secondary">
              {t.labels.secondaryAction}
            </ButtonLink>
          </div>
          {heroStats && heroStats.length > 0 && (
            <ul className="home-hero__stats">
              {heroStats.map((item) => (
                <li key={item.label} className="home-hero__stat">
                  <span className="home-hero__stat-value">{item.value}</span>
                  <span className="home-hero__stat-label">{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
