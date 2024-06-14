import { Component } from '@angular/core';
import { TranslationsPipe } from '@translations/translations.pipe';
import { PanelComponent } from '@elements/panel/panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from '@services/character-form.service';
import { ThemeElementComponent } from './theme-element/theme-element.component';
import { NgForOf } from '@angular/common';
import { NoteComponent } from '@elements/note/note.component';

@Component({
  selector: 'app-document-panel',
  standalone: true,
  imports: [
    NgForOf,
    TranslationsPipe,
    PanelComponent,
    ReactiveFormsModule,
    ThemeElementComponent,
    NoteComponent,
  ],
  templateUrl: './document-panel.component.html',
  styleUrl: './document-panel.component.scss',
})
export class DocumentPanelComponent {
  selectedId = -1;
  readonly form: FormGroup = new FormGroup({});
  readonly themeOptions = [
    {
      id: 1,
      textKey: 'form.theme.fields.theme1',
      imageUrl: '/assets/images/theme1.png',
    },
    {
      id: 2,
      textKey: 'form.theme.fields.theme2',
      imageUrl: '/assets/images/theme2.png',
    },
    {
      id: 3,
      textKey: 'form.theme.fields.theme3',
      imageUrl: '/assets/images/theme3.png',
    },
  ];

  constructor(service: CharacterFormService) {
    this.form = service.form;
    this.selectedId = service.form.get('themeOption')?.value;
  }

  ngOnInit() {
    this._subscribe();
  }

  private _subscribe() {
    this.form
      .get('themeOption')
      ?.valueChanges.subscribe((value) => (this.selectedId = value));
  }

  onSelectElement(event: number) {
    this.form.patchValue({ themeOption: event });
  }
}
