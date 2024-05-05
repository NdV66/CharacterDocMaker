import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { BasicInfoPanelService } from './basic-info-panel.service';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  public characterName = '';

  constructor(private _basicInfoPanelService: BasicInfoPanelService) {}

  public onChangeName() {
    this._basicInfoPanelService.name = 'irmo';
    console.log('!!!!');
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
