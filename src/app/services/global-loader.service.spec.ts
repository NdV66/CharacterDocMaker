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

  it('Should isLoading be false on enter', () => {
    testScheduler.run(({ expectObservable }) => {
      // Given
      // When
      // Then
      expectObservable(globalLoaderService.isLoading).toBe('b', { b: false });
    });
  });

  it('Should set isLoading to true', () => {
    testScheduler.run(({ expectObservable }) => {
      // Given
      // When
      globalLoaderService.setIsLoading(true);
      // Then
      expectObservable(globalLoaderService.isLoading).toBe('b', { b: true });
    });
  });

  it('Should set isLoading to false', () => {
    testScheduler.run(({ expectObservable }) => {
      // Given
      // When
      globalLoaderService.setIsLoading(false);
      // Then
      expectObservable(globalLoaderService.isLoading).toBe('b', { b: false });
    });
  });
});
