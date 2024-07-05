import { TestScheduler } from 'rxjs/testing';
import { PdfCreatorService } from './pdf-creator.service';
import { GlobalLoaderService } from './global-loader.service';
import { Subject } from 'rxjs';

// jest.mock('html2canvas');

// import html2canvas from 'html2canvas';

const createGlobalLoaderServiceMock = () =>
  ({
    isLoading: new Subject<boolean>().asObservable(),
    setIsLoading: jest.fn(),
  } as any as GlobalLoaderService);

describe('PdfCreatorService', () => {
  let testScheduler: TestScheduler;
  let globalLoaderServiceMock: GlobalLoaderService;
  let pdfCreatorService: PdfCreatorService;

  beforeAll(() => {
    window.getComputedStyle = jest.fn();
    HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  beforeEach(() => {
    globalLoaderServiceMock = createGlobalLoaderServiceMock();
    pdfCreatorService = new PdfCreatorService(globalLoaderServiceMock);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  //   it('XX', async () => {
  //     await html2canvas({} as any);
  //     expect(html2canvas).toHaveBeenCalled();
  //   });

  it('Should export to pdf', () => {
    testScheduler.run(({ expectObservable }) => {
      //   (html2canvas as any).mockImplementation(() =>
      //     document.createElement('canvas')
      //   );
      pdfCreatorService.exportToPdf(document.createElement('div'));

      //   expect(html2canvas).toHaveBeenCalled();
      expectObservable(globalLoaderServiceMock.isLoading).toBe('ab', {
        a: true,
        b: false,
      });
    });
  });
});
