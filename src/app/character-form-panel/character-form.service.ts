import { Injectable } from '@angular/core';
import { CharacterDTO } from '../models';
import { BasicInfoPanelService } from './basic-info-panel/basic-info-panel.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterFormService {
  constructor(private _basicInfoPanelService: BasicInfoPanelService) {}

  get characterDTO() {
    return new CharacterDTO();
  }
}
