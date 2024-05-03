import { TranslationsPipe } from './translations.pipe';
import { TEXTS } from './en-EN';

describe('Translations Pipe with default language', () => {
  // This pipe is a pure, stateless function so no need for beforeEach
  const pipe = new TranslationsPipe();

  describe('Should return key, when there is no value to return from translate object', () => {
    const wrongKeyCases = [
      'wrong-key-here',
      'im.not.existed.really',
      '',
      '.',
      'wrong,name.here',
      '127',
      'form.avatar.fields.Zoom',
    ];

    wrongKeyCases.forEach((key) => {
      it(`key: ${key}`, () => {
        //given
        //when
        const result = pipe.transform(key);
        //then
        expect(result).toBe(key);
      });
    });
  });

  describe('Should return value, when there is a value to return from translate object', () => {
    const okKeyCases = [
      ['appName', TEXTS.appName],
      ['jumbotron.title', TEXTS.jumbotron.title],
      ['form.avatar.fields.zoom', TEXTS.form.avatar.fields.zoom],
    ];

    okKeyCases.forEach(([key, expectedValue]) => {
      it(`key: ${key}`, () => {
        //given
        //when
        const result = pipe.transform(key);
        //then
        expect(result).toBe(expectedValue);
      });
    });
  });
});
