import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '../../services/character-form.service';
import { NoteComponent } from '../../elements/note/note.component';
import { TextareaComponent } from '../../elements/textarea/textarea.component';

@Component({
  selector: 'app-description-panel',
  standalone: true,
  imports: [TranslationsPipe, PanelComponent, NoteComponent, TextareaComponent],
  templateUrl: './description-panel.component.html',
  styleUrl: './description-panel.component.scss',
})
export class DescriptionPanelComponent {
  isError = false;
  readonly form!: FormGroup;

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }

  get descriptionError() {
    return this.form.get('description')?.errors && 'form.errors.required';
  }
}
