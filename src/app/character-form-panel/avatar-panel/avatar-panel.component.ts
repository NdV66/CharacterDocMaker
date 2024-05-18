import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { NoteComponent } from '../../elements/note/note.component';
import { AvatarFiltersComponent } from './avatar-filters/avatar-filters.component';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '../../services';
import { fromEvent } from 'rxjs';
import { ImageSnippetDto } from '../../models';
import { UploadImageComponent } from '../../elements/upload-image/upload-image.component';

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
export class AvatarPanelComponent {
  imageUrl = '';
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  isLoading = false;
  isError = false;

  private _currentFile: File = null as any as File;
  private readonly _reader = new FileReader();

  readonly form: FormGroup = new FormGroup({});

  constructor(private _service: CharacterFormService) {
    this.form = this._service.form;
    this.greyScale = this._service.form.get('greyScale')?.value;
    this.zoom = this._service.form.get('zoom')?.value;
    this.brightness = this._service.form.get('brightness')?.value;
    this.imageUrl = this._service.form.get('avatar')?.value;
  }

  ngOnInit() {
    this._subscribeToFiltersChanged();
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
      this._service.uploadAvatar(selectedFile.file);
      this.imageUrl = selectedFile.src;
      this.isLoading = false;
    });
  }

  private _subscribeToFiltersChanged() {
    this.form
      .get('greyScale')
      ?.valueChanges.subscribe((value) => (this.greyScale = value));

    this.form
      .get('zoom')
      ?.valueChanges.subscribe((value) => (this.zoom = value));

    this.form
      .get('brightness')
      ?.valueChanges.subscribe((value) => (this.brightness = value));

    this.form
      .get('avatar')
      ?.valueChanges.subscribe((value) => (this.imageUrl = value));
  }
}
