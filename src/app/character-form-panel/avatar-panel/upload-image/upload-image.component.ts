import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../../translations/translations.pipe';
import { CharacterFormService } from '../../../services';
import { ImageSnippetDto } from '../../../models/';
import { fromEvent } from 'rxjs';

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
  private _currentFile: File = null as any;
  private readonly _reader = new FileReader();

  constructor(private _service: CharacterFormService) {
    this._subscribeToLoadImage();
  }

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

  private _subscribeToLoadImage() {
    const load = fromEvent(this._reader, 'load');
    load.subscribe((event: any) => {
      const selectedFile = new ImageSnippetDto(
        event.target.result,
        this._currentFile
      );
      this._service.uploadAvatar(selectedFile.file);
      this.imageUrl = selectedFile.src;
      this.isLoading = false;
    });
  }

  processFile(imageInput: any) {
    if (this.isLoading) return;
    this.isLoading = true;
    this._currentFile = imageInput.files[0];
    this._reader.readAsDataURL(this._currentFile);
  }
}
