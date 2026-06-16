export const ui = {
  en: {
    'nav.home': '← Home',
    'nav.scale': 'Batch Scale:',
    'section.prep': '1. Prep Checklist',
    'section.thermal': '2. Thermal Steps',
    'section.assembly': '3. Assembly',
    'button.start': 'Start',
    'button.reset': 'Reset',
    'layer.blueprint': 'Structural Layer Blueprint',
    'layer.top': 'Top Layer',
    'layer.rice': 'Rice Layer',
    'layer.gravy': 'Gravy Base',
  },
  ta: {
    'nav.home': '← முகப்பு',
    'nav.scale': 'அளவு:',
    'section.prep': '1. தயார்படுத்தல்',
    'section.thermal': '2. சமையல் படிகள்',
    'section.assembly': '3. ஒன்றுசேர்த்தல்',
    'button.start': 'தொடங்கு',
    'button.reset': 'மீட்டமை',
    'layer.blueprint': 'அடுக்கு வரைபடம்',
    'layer.top': 'மேல் அடுக்கு',
    'layer.rice': 'சாதம் அடுக்கு',
    'layer.gravy': 'கிரேவி அடிப்படை',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return 'en';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui['en'][key];
  }
}
