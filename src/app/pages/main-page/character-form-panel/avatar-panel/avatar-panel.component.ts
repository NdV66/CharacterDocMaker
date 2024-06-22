import { Component } from '@angular/core';
import { TranslationsPipe } from '@translations/translations.pipe';
import { PanelComponent } from '@elements/panel/panel.component';
import { NoteComponent } from '@elements/note/note.component';
import { AvatarFiltersComponent } from './avatar-filters/avatar-filters.component';
import { fromEvent } from 'rxjs';
import { ImageSnippetDto } from '@models/ImageSnippet.dto';
import { UploadImageComponent } from '@elements/upload-image/upload-image.component';
import { AAvatarFilterHandler } from './avatar-filters-handler';

@Component({
  selector: 'app-avatar-panel',
  standalone: true,
  imports: [
    TranslationsPipe,
    PanelComponent,
    NoteComponent,
    AvatarFiltersComponent,
    UploadImageComponent,
  ],
  templateUrl: './avatar-panel.component.html',
  styleUrl: './avatar-panel.component.scss',
})
export class AvatarPanelComponent extends AAvatarFilterHandler {
  private _currentFile!: File;
  private readonly _reader = new FileReader();

  override ngOnInit() {
    super.ngOnInit();
    this._subscribeToLoadImage();
  }

  get avatarInlineStyles() {
    return {
      filter: this._prepareFilters(),
      backgroundImage: `url(${this._imageUrl})`,
    };
  }

  onProcessImage(image: File) {
    if (this.isLoading) return;
    this.isLoading = true;
    this._currentFile = image;
    this._reader.readAsDataURL(this._currentFile);
    this.form.patchValue({ avatar: image });
  }

  private _subscribeToLoadImage() {
    const load = fromEvent(this._reader, 'load');
    load.subscribe((event: any) => {
      const selectedFile = new ImageSnippetDto(
        event.target.result,
        this._currentFile
      );
      this._service.uploadAvatar(selectedFile);
      this._imageUrl = selectedFile.src;
      this.isLoading = false;
    });
  }
}
