import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const A4_FORMAT = [210, 297];

@Injectable({
  providedIn: 'root',
})
export class PdfCreatorService {
  constructor() {}

  async exportToPdf() {
    const iframe = document.getElementById('pdf-iframe') as HTMLIFrameElement;
    const rawSource = iframe.contentWindow!.document.getElementById(
      'pdf'
    ) as HTMLElement;

    console.log(rawSource);

    // const rawSource = document.getElementById('pdf') as HTMLElement;

    const canvas = await html2canvas(rawSource);
    const contentDataUrl = canvas.toDataURL('image/png');

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: A4_FORMAT,
    });

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    doc.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
    doc.save('hello-dear.pdf');
  }
}
