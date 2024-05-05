import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-description-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent],
  templateUrl: './description-panel.component.html',
  styleUrl: './description-panel.component.scss',
})
export class DescriptionPanelComponent {}
