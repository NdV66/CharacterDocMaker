import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { BasicInfoPanelService } from './basic-info-panel.service';
import { BasicInputComponent } from '../../elements/basic-input/basic-input.component';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent, BasicInputComponent],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  characterName: string = '';

  constructor(private _basicInfoPanelService: BasicInfoPanelService) {}

  onChangeName(event: string) {
    this._basicInfoPanelService.name = event;
    console.log('>>>> ', event);
  }

  ngOnInit(): void {
    this._basicInfoPanelService.$name.subscribe(
      (value) => (this.characterName = value)
    );
  }

  ngOnDestroy() {
    this._basicInfoPanelService.dispose();
  }
}