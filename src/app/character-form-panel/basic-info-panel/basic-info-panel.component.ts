import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { CharacterBasicInfoDTO } from '../../models';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent, FormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  @Input() model = new CharacterBasicInfoDTO();
}
