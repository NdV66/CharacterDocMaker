import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

const A4_FORMAT = [595, 842];

@Injectable({
  providedIn: 'root',
})
export class PdfCreatorService {
  constructor() {}

  exportToPdf(pages: HTMLElement) {
    const doc = new jsPDF({
      unit: 'px',
      format: A4_FORMAT,
    });

    doc.text('Hello world!', 1, 1);
    doc.save('two-by-four.pdf');

    // doc.html(pages, {
    //   callback: (doc: jsPDF) => {
    //     doc.deletePage(doc.getNumberOfPages());
    //     doc.save('pdf-export');
    //   },
    // });
  }
}
