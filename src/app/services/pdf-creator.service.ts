import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { GlobalLoaderService } from './global-loader.service';

const A4_FORMAT = [210, 297];
const PDF_NAME = 'my-character.pdf';

// for v2: https://stackoverflow.com/questions/19272933/jspdf-multi-page-pdf-with-html-renderer
@Injectable({
  providedIn: 'root',
})
export class PdfCreatorService {
  constructor(private _globalLoaderService: GlobalLoaderService) {}

  private async _createContentDataUrl(rawSource: HTMLElement) {
    const canvas = await html2canvas(rawSource);
    return canvas.toDataURL('image/png');
  }

  private async _onExportToPdf(rawSource: HTMLElement) {
    const contentDataUrl = await this._createContentDataUrl(rawSource);
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: A4_FORMAT,
    });

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    doc.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
    doc.save(PDF_NAME);
  }

  async exportToPdf(rawSource: HTMLElement) {
    this._globalLoaderService.setIsLoading(true);
    await this._onExportToPdf(rawSource);
    this._globalLoaderService.setIsLoading(false);
  }
}
