import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-document-theme-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent],
  templateUrl: './document-theme-panel.component.html',
  styleUrl: './document-theme-panel.component.scss',
})
export class DocumentThemePanelComponent {}
