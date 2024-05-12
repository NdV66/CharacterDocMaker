import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../../translations/translations.pipe';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [TranslationsPipe],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
//TODO some king od parent for imageUrl? extends or something
export class UploadImageComponent {
  @Input() imageUrl = '';

  get imageUrlCss() {
    return `url(${this.imageUrl})`;
  }
}
