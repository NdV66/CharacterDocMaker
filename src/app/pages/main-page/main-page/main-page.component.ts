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
import { PdfPanelComponent } from '@pages/main-page/pdf-panel/pdf-panel.component';
import { PdfCreatorService } from '@services/pdf-creator.service';
import { NgIf } from '@angular/common';
import { GlobalLoaderService } from '@services/global-loader.service';

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
    NgIf,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  readonly form!: FormGroup;
  isPdfExporting = false;
  isFormValid = false;
  isLoading = true;

  constructor(
    private _service: CharacterFormService,
    private _loaderService: GlobalLoaderService
  ) {
    this.form = this._service.form;

    this._loaderService.isLoading.subscribe((value) => {
      console.log('>>>', value);
      this.isLoading = value;
    });
  }

  onSubmit(e: any) {
    this._service.onSubmit(e);
  }
}
