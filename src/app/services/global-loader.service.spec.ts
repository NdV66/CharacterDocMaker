import { TestScheduler } from 'rxjs/testing';
import { GlobalLoaderService } from './global-loader.service';

describe('GlobalLoaderService', () => {
  let testScheduler: TestScheduler;
  let globalLoaderService: GlobalLoaderService;

  beforeEach(() => {
    globalLoaderService = new GlobalLoaderService();
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('Should set from default false to true', () => {
    testScheduler.run(({ expectObservable }) => {
      globalLoaderService.setIsLoading(true);

      expectObservable(globalLoaderService.isLoading).toBe('b', {
        b: true,
      });
    });
  });
});
