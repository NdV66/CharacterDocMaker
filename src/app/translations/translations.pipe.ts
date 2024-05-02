import { Pipe, PipeTransform } from '@angular/core';
import { TEXTS as plPl } from './pl-PL';

enum ELanguages {
  'PL' = 'pl-PL',
}

const DEFAULT_LANG = ELanguages.PL;
const translations = new Map([[ELanguages.PL, plPl]]);

@Pipe({
  name: 'getTranslations',
  standalone: true,
})
export class TranslationsPipe implements PipeTransform {
  transform(value: string, language = DEFAULT_LANG): string {
    const translationsToSearch = translations.get(language);
    if (!value || !translationsToSearch) return value;
    const keys = value.split('.');
    let result: any = translationsToSearch;
    for (let key of keys) {
      result = result[key];
      if (!result) break;
    }
    return result;
  }
}
