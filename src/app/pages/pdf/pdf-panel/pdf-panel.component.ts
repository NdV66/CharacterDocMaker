import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@elements/button/button.component';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { TextButtonComponent } from '@elements/text-button/text-button.component';
import { WidthWrapperComponent } from '@elements/width-wrapper/width-wrapper.component';
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
  ],
  templateUrl: './pdf-panel.component.html',
  styleUrl: './pdf-panel.component.scss',
})
export class PdfPanelComponent {
  constructor(private _router: Router) {}

  onGoBack = () => {
    this._router.navigate(['/home']);
  };
}
