import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { NoteComponent } from '../../elements/note/note.component';
import { AvatarFiltersComponent } from './avatar-filters/avatar-filters.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '../../services';

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

  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
    this.greyScale = service.form.get('greyScale')?.value;
    this.zoom = service.form.get('zoom')?.value;
    this.brightness = service.form.get('brightness')?.value;
    this.imageUrl = service.form.get('avatar')?.value;
  }

  ngOnInit() {
    this._subscribe();
  }

  private _subscribe() {
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
