import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { BehaviorSubject, filter } from 'rxjs';

const A4_FORMAT = [210, 297];

// for v2: https://stackoverflow.com/questions/19272933/jspdf-multi-page-pdf-with-html-renderer
@Injectable({
  providedIn: 'root',
})
export class PdfCreatorService {
  private _isPdfExporting = new BehaviorSubject<boolean>(false);

  constructor() {
    this._isPdfExporting
      .pipe(filter((el) => !!el))
      .subscribe(() => this._onExportToPdf());
  }

  get isPdfExporting() {
    return this._isPdfExporting.asObservable();
  }

  private async _createContentDataUrl() {
    const rawSource = document.getElementById('pdf') as HTMLElement;
    const canvas = await html2canvas(rawSource);
    return canvas.toDataURL('image/png');
  }

  private async _onExportToPdf() {
    const contentDataUrl = await this._createContentDataUrl();
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: A4_FORMAT,
    });

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    doc.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
    doc.save('hello-dear.pdf');

    this._isPdfExporting.next(false);
  }

  async exportToPdf() {
    this._isPdfExporting.next(true);
  }
}
