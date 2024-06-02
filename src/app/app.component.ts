import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterFormPanelComponent } from './character-form-panel/character-form-panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from './services';
import { DocumentPanelComponent } from './document-panel/document-panel.component';
import { TranslationsPipe } from './translations/translations.pipe';
import { ButtonComponent } from './elements/button/button.component';
import { PdfDocumentsComponent } from './pdf-documents/pdf-documents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslationsPipe,
    ReactiveFormsModule,
    NavbarComponent,
    JumbotronComponent,
    CharacterFormPanelComponent,
    DocumentPanelComponent,
    FooterComponent,
    ButtonComponent,

    PdfDocumentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly form!: FormGroup;

  constructor(private _service: CharacterFormService) {
    this.form = this._service.form;
  }

  onSubmit(e: any) {
    this._service.onSubmit(e);
  }
}
