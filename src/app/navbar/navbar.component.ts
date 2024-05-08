import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslationsPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
