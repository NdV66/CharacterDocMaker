import { TEXTS as enEN } from './en-EN';

export enum ELanguages {
  'EN' = 'en-EN',
}

export const DEFAULT_LANG = ELanguages.EN;

export const translations = new Map([[ELanguages.EN, enEN]]);
