import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '@elements/button/button.component';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { TextButtonComponent } from '@elements/text-button/text-button.component';
import { WidthWrapperComponent } from '@elements/width-wrapper/width-wrapper.component';
import { CharacterFormService } from '@services/character-form.service';
import { TranslationsPipe } from '@translations/translations.pipe';

@Component({
  selector: 'app-pdf-panel',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslationsPipe,
    TextButtonComponent,
    NavbarComponent,
    WidthWrapperComponent,
    NgFor,
  ],
  templateUrl: './pdf-panel.component.html',
  styleUrl: './pdf-panel.component.scss',
})
export class PdfPanelComponent {
  basisInfoForm!: FormGroup;
  basicInfoFieldsNames = ['race', 'age', 'origin', 'nature', 'live'];

  constructor(private _service: CharacterFormService) {
    this.basisInfoForm = _service.basicInfoForm;
  }

  get imageUrlCss() {
    return `url(${this._service.avatarForm.get('avatar')?.value})`;
  }
}
