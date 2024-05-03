import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_LANG, translations } from './config';

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
      if (!result) return value;
    }
    return result;
  }
}
