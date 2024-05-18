import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { CharacterFormService } from '../../services/character-form.service';
import { NoteComponent } from '../../elements/note/note.component';
import { PanelComponent } from '../../elements/panel/panel.component';
import { InputComponent } from '../../elements/input/input.component';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [
    TranslationsPipe,
    NgForOf,
    ReactiveFormsModule,
    NoteComponent,
    PanelComponent,
    InputComponent,
  ],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  readonly form: FormGroup = new FormGroup({});
  readonly fields = [
    { name: 'name' },
    { name: 'race' },
    { name: 'nature' },
    { name: 'age' },
    { name: 'origin' },
    { name: 'live' },
  ];

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}
