import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from '../../services/character-form.service';
import { NoteComponent } from '../../elements/note/note.component';

@Component({
  selector: 'app-description-panel',
  standalone: true,
  imports: [TranslationsPipe, PanelComponent, ReactiveFormsModule, NoteComponent],
  templateUrl: './description-panel.component.html',
  styleUrl: './description-panel.component.scss',
})
export class DescriptionPanelComponent {
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}
