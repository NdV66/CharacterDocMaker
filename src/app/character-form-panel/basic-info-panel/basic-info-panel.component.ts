import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { FormsModule } from '@angular/forms';
import { CharacterBasicInfoDTO } from '../../models';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent, FormsModule],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  @Output() submitEmitter = new EventEmitter<CharacterBasicInfoDTO>();
  model = new CharacterBasicInfoDTO();

  submit() {
    console.log('>>> ', this.model);
    this.submitEmitter.emit(this.model);
  }
}
