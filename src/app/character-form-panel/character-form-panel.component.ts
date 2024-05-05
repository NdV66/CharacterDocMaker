import { Component } from '@angular/core';
import { AvatarPanelComponent } from './avatar-panel/avatar-panel.component';
import { BasicInfoPanelComponent } from './basic-info-panel/basic-info-panel.component';
import { DescriptionPanelComponent } from './description-panel/description-panel.component';

@Component({
  selector: 'app-character-form-panel',
  standalone: true,
  imports: [
    AvatarPanelComponent,
    BasicInfoPanelComponent,
    DescriptionPanelComponent,
  ],
  templateUrl: './character-form-panel.component.html',
  styleUrl: './character-form-panel.component.scss',
})
export class CharacterFormPanelComponent {}
