import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent {
  @Input() isLoading = false;
  @Input() isError = false;
  @Input() uploadText = '';
  @Input() loadingText = '';
  @Input() imageInlineStyles = {};

  @Output('onProcessAvatarEvent') readonly _onProcessAvatarEventEmitter =
    new EventEmitter<any>();

  processFile(imageInput: any) {
    if (this.isLoading) return;
    this.isLoading = true;
    this._onProcessAvatarEventEmitter.emit(imageInput.files[0]);
  }
}
