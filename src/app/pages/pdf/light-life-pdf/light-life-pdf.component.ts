import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@elements/button/button.component';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { TextButtonComponent } from '@elements/text-button/text-button.component';
import { TranslationsPipe } from '@translations/translations.pipe';

@Component({
  selector: 'app-light-life-pdf',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslationsPipe,
    TextButtonComponent,
    NavbarComponent,
  ],
  templateUrl: './light-life-pdf.component.html',
  styleUrl: './light-life-pdf.component.scss',
})
export class LightLifePdfComponent {
  constructor(private _router: Router) {}

  onGoBack = () => {
    this._router.navigate(['/home']);
  };
}
