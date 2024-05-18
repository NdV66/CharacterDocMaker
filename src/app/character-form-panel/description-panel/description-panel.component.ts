import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from '../../services/character-form.service';
import { NoteComponent } from '../../elements/note/note.component';
import { LabelComponent } from '../../elements/label/label.component';

@Component({
  selector: 'app-description-panel',
  standalone: true,
  imports: [
    TranslationsPipe,
    PanelComponent,
    ReactiveFormsModule,
    NoteComponent,
    LabelComponent,
  ],
  templateUrl: './description-panel.component.html',
  styleUrl: './description-panel.component.scss',
})
export class DescriptionPanelComponent {
  isError = true;
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}
