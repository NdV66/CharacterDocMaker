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
  providers: [CharacterFormService],
  templateUrl: './avatar-panel.component.html',
  styleUrl: './avatar-panel.component.scss',
})
export class AvatarPanelComponent {
  imageUrl = '';
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
    this.imageUrl = service.form.get('avatar')?.value;
  }
}
