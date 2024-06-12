import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

const A4_FORMAT = [595, 842];

@Injectable({
  providedIn: 'root',
})
export class PdfCreatorService {
  constructor() {}

  exportToPdf() {
    const source = document.querySelector('.pdf-content') as HTMLElement;
    console.log(source);
    const doc = new jsPDF({
      unit: 'px',
      format: A4_FORMAT,
      orientation: 'portrait',
    });

    doc.html(source as any, {
      callback: function (doc) {
        doc.save('document-html.pdf');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
    });
  }
}
