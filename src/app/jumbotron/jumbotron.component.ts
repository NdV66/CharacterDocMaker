import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [TranslationsPipe],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss',
})
export class JumbotronComponent {}
