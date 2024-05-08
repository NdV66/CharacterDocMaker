import { Component } from '@angular/core';
import { AvatarPanelComponent } from './avatar-panel/avatar-panel.component';
import { BasicInfoPanelComponent } from './basic-info-panel/basic-info-panel.component';
import { DescriptionPanelComponent } from './description-panel/description-panel.component';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from './character-form.service';

@Component({
  selector: 'app-character-form-panel',
  standalone: true,
  imports: [
    AvatarPanelComponent,
    BasicInfoPanelComponent,
    DescriptionPanelComponent,
    ReactiveFormsModule,
  ],
  providers: [CharacterFormService],
  templateUrl: './character-form-panel.component.html',
  styleUrl: './character-form-panel.component.scss',
})
export class CharacterFormPanelComponent {
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }

  onSubmit(e: any) {
    e.preventDefault();
    console.log('PARENT basicCharacterInfo ', this.form.value);
  }
}
