import { ElementRef, Injectable } from '@angular/core';
import { PdfPanelComponent } from './pdf-panel.component';

@Injectable({
  providedIn: PdfPanelComponent,
})
export class AvatarCanvasHandler {
  public drawAvatarOnCanvas = (
    avatarImageToDraw: HTMLImageElement,
    avatarCanvas?: ElementRef<HTMLCanvasElement>,
    filters: string = ''
  ) => {
    const canvas = avatarCanvas?.nativeElement;
    if (!canvas) return false;

    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    // ctx.scale(2, 2); //TODO for now it's basic zoom without ratio, https://stackoverflow.com/questions/3420975/html5-canvas-zooming
    ctx.filter = filters;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(avatarImageToDraw, 0, 0, canvas.width, canvas.height);
    return true;
  };
}
