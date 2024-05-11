import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';
import { PanelComponent } from '../elements/panel/panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from '../services';
import { ThemeElementComponent } from './theme-element/theme-element.component';
import { NgForOf } from '@angular/common';

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
      textKey: 'form.theme.fields.theme1',
      imageUrl: '/assets/images/themeOption_pastel.png',
      isSelected: true,
    },
    {
      id: 2,
      textKey: 'form.theme.fields.theme2',
      imageUrl: '/assets/images/themeOption_sky.png',
      isSelected: false,
    },
    {
      id: 3,
      textKey: 'form.theme.fields.theme3',
      imageUrl: '/assets/images/themeOption_blackWhite.png',
      isSelected: false,
    },
  ];

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}
