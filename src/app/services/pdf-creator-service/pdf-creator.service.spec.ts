import { TestScheduler } from 'rxjs/testing';
import { PdfCreatorService } from './pdf-creator.service';
import { GlobalLoaderService } from '../global-loader-service/global-loader.service';
import { imagePngBase64Mock, createGlobalLoaderServiceMock } from '../mocks';
import * as html2canvas from 'html2canvas';

jest.mock('html2canvas', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('PdfCreatorService', () => {
  let testScheduler: TestScheduler;
  let globalLoaderServiceMock: GlobalLoaderService;
  let pdfCreatorService: PdfCreatorService;

  beforeEach(() => {
    globalLoaderServiceMock = createGlobalLoaderServiceMock();
    pdfCreatorService = new PdfCreatorService(globalLoaderServiceMock);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('Should export to pdf', () => {
    testScheduler.run(async ({ expectObservable }) => {
      const canvasMock = {
        toDataURL: jest.fn().mockReturnValue(imagePngBase64Mock),
      };
      const spy = jest.spyOn(html2canvas, 'default');
      spy.mockReturnValue(canvasMock as any);

      await pdfCreatorService.exportToPdf(document.createElement('div'));

      expect(canvasMock.toDataURL).toHaveBeenCalledTimes(1);
      expect(canvasMock.toDataURL).toHaveBeenCalledWith('image/png');
      expectObservable(globalLoaderServiceMock.isLoading).toBe('ab', {
        a: true,
        b: false,
      });
    });
  });
});
