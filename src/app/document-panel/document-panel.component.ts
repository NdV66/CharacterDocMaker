import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';
import { DocumentThemePanelComponent } from './document-theme-panel/document-theme-panel.component';
import { PanelComponent } from '../elements/panel/panel.component';

@Component({
  selector: 'app-document-panel',
  standalone: true,
  imports: [TranslationsPipe, DocumentThemePanelComponent, PanelComponent],
  templateUrl: './document-panel.component.html',
  styleUrl: './document-panel.component.scss'
})
export class DocumentPanelComponent {

}
