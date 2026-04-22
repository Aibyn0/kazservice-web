export const locales = ["zh-CN", "ru-KZ"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-CN";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
