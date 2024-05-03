import { Component } from '@angular/core';
import { TranslationsPipe } from '../translations/translations.pipe';
import { TitleComponent } from '../elements/title/title.component';

@Component({
  selector: 'app-avatar-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent],
  templateUrl: './avatar-panel.component.html',
  styleUrl: './avatar-panel.component.scss',
})
export class AvatarPanelComponent {}
