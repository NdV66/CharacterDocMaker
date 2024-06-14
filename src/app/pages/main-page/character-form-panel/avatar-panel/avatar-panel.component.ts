import { Component } from '@angular/core';
import { TranslationsPipe } from '@translations/translations.pipe';
import { PanelComponent } from '@elements/panel/panel.component';
import { NoteComponent } from '@elements/note/note.component';
import { AvatarFiltersComponent } from './avatar-filters/avatar-filters.component';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '@services/character-form.service';
import { fromEvent } from 'rxjs';
import { ImageSnippetDto } from '@models/ImageSnippet.dto';
import { UploadImageComponent } from '@elements/upload-image/upload-image.component';
import { AvatarFilterHandler } from './avatar-filters-handler';

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
export class AvatarPanelComponent extends AvatarFilterHandler {
  private _currentFile: File = null as any as File;
  private readonly _reader = new FileReader();

  override ngOnInit() {
    super.ngOnInit();
    this._subscribeToLoadImage();
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
      this.imageUrl = selectedFile.src;
      this.isLoading = false;
    });
  }
}
