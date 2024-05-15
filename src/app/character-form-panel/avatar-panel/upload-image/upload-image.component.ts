import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../../translations/translations.pipe';
import { CharacterFormService } from '../../../services';
import { ImageSnippetDto } from '../../../models/';

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
  isLoading = false;
  isError = false;

  constructor(private _service: CharacterFormService) {}

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

  processFile(imageInput: any) {
    if (this.isLoading) return;

    this.isLoading = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('load', (event: any) => {
      const selectedFile = new ImageSnippetDto(event.target.result, file);
      const result = this._service.uploadAvatar(selectedFile.file);
      this.imageUrl = selectedFile.src;
      this.isLoading = false;
    });
  }
}
