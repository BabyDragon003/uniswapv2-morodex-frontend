export const perpetualLangs = {
  en: 'en',
  ko: 'ko',
  ja: 'ja',
  de: 'de',
  fr: 'fr',
  id: 'id',
  tr: 'tr',
  hi: 'hi',
  ru: 'ru',
  }
  if (perpetualLangs[languageCode]) {
    return perpetualLangs[languageCode]
  }
  return 'en'
}
