import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { PanelComponent } from '../../elements/panel/panel.component';
import { NoteComponent } from '../../elements/note/note.component';
import { AvatarFiltersComponent } from './avatar-filters/avatar-filters.component';

@Component({
  selector: 'app-avatar-panel',
  standalone: true,
  imports: [
    TranslationsPipe,
    PanelComponent,
    NoteComponent,
    AvatarFiltersComponent,
  ],
  templateUrl: './avatar-panel.component.html',
  styleUrl: './avatar-panel.component.scss',
})
export class AvatarPanelComponent {}
