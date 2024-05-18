import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent {
  @Input() imageUrl = '';
  @Input() greyScale = 0;
  @Input() brightness = 0;
  @Input() zoom = 100;
  @Input() isLoading = false;
  @Input() isError = true;
  @Input() uploadText = '';
  @Input() loadingText = '';

  @Output('onProcessAvatarEvent') readonly _onProcessAvatarEventEmitter =
    new EventEmitter<any>();

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
    this._onProcessAvatarEventEmitter.emit(imageInput.files[0]);
  }
}
