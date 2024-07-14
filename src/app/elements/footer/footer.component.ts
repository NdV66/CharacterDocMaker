import { Component } from '@angular/core';
import { WidthWrapperComponent } from '@elements/width-wrapper/width-wrapper.component';
import { TranslationsPipe } from '@translations/translations.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WidthWrapperComponent, TranslationsPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
