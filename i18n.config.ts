export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'no', 'ee']
} as const

export type Locale = (typeof i18n)['locales'][number]
