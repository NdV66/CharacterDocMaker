import { Component } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { CharacterFormPanelComponent } from '../character-form-panel/character-form-panel.component';
import { TranslationsPipe } from '@translations/translations.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '@elements/footer/footer.component';
import { ButtonComponent } from '@elements/button/button.component';
import { DocumentPanelComponent } from '../document-panel/document-panel.component';
import { CharacterFormService } from '@services/character-form.service';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { WidthWrapperComponent } from '@elements/width-wrapper/width-wrapper.component';
import { PdfPanelComponent } from '@pages/pdf/pdf-panel/pdf-panel.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TranslationsPipe,
    ReactiveFormsModule,
    JumbotronComponent,
    CharacterFormPanelComponent,
    FooterComponent,
    ButtonComponent,
    DocumentPanelComponent,
    NavbarComponent,
    WidthWrapperComponent,
    PdfPanelComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  readonly form!: FormGroup;

  constructor(private _service: CharacterFormService) {
    this.form = this._service.form;
  }

  onSubmitPreview(e: any) {
    // this._service.isFormValid && this._service.onSubmit(e);
    this._service.onSubmit(e);
  }
}
