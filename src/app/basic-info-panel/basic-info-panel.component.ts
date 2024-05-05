import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';
import { TitleComponent } from '../elements/title/title.component';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {}
