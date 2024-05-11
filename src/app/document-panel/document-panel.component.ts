import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';
import { PanelComponent } from '../elements/panel/panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from '../services';
import { ThemeElementComponent } from './theme-element/theme-element.component';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-document-panel',
  standalone: true,
  imports: [
    NgForOf,
    TranslationsPipe,
    PanelComponent,
    ReactiveFormsModule,
    ThemeElementComponent,
  ],
  templateUrl: './document-panel.component.html',
  styleUrl: './document-panel.component.scss',
})
export class DocumentPanelComponent {
  readonly form: FormGroup = new FormGroup({});
  readonly themeOptions = [
    {
      id: 1,
      textKey: 'todo1',
      imageUrl: 'imageHere',
      isSelected: false,
    },
    {
      id: 2,
      textKey: 'todo2',
      imageUrl: 'imageHere',
      isSelected: true,
    },
    {
      id: 3,
      textKey: 'todo3',
      imageUrl: 'imageHere',
      isSelected: false,
    },
  ];

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}
