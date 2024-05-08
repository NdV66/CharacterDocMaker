import { Component } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { TitleComponent } from '../../elements/title/title.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { CharacterFormService } from '../character-form.service';

@Component({
  selector: 'app-basic-info-panel',
  standalone: true,
  imports: [TranslationsPipe, TitleComponent, NgForOf, ReactiveFormsModule],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
})
export class BasicInfoPanelComponent {
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }
}

//https://www.telerik.com/blogs/angular-basics-what-reactive-forms-when-use-them
