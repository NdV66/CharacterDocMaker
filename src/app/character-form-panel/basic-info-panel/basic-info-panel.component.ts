import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { BasicInfoPanelService } from './basic-info-panel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent, FormsModule],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  public characterName = 'Irmo here';

  constructor(private _basicInfoPanelService: BasicInfoPanelService) {}

  public onChangeName(event: Event) {
    this._basicInfoPanelService.name = 'irmo';
    console.log('!!!', event);
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
