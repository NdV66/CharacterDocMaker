import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../../translations/translations.pipe';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [TranslationsPipe],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent {
  @Input() imageUrl = '';
  @Input() greyScale = 0;
  @Input() brightness = 0;
  @Input() zoom = 100;

  private get _greyScaleAsNonPercent() {
    return this.greyScale / 100;
  }

  private get _brightnessAsNonPercent() {
    return this.brightness / 100;
  }

  get imageInlineStyles() {
    return {
      filter: `grayscale(${this._greyScaleAsNonPercent}) brightness(${this._brightnessAsNonPercent})`,
      backgroundImage: `url(${this.imageUrl})`,
      backgroundSize: `${this.zoom}% ${this.zoom}%`,
    };
  }

  processFile(element: HTMLInputElement) {
    console.log('>>> process');
  }
}
