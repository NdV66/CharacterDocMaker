import { Component } from '@angular/core';
import { SliderComponent } from '@elements/slider/slider.component';
import { TValueChangeEvent } from '@elements/slider/slider.types';
import { NgFor } from '@angular/common';
import { TranslationsPipe } from '@translations/translations.pipe';
import {
  CharacterFormService,
  DEFAULT_VALUES,
} from '@services/character-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextButtonComponent } from '@elements/text-button/text-button.component';

@Component({
  selector: 'app-avatar-filters',
  standalone: true,
  imports: [
    SliderComponent,
    TranslationsPipe,
    NgFor,
    ReactiveFormsModule,
    TextButtonComponent,
  ],
  templateUrl: './avatar-filters.component.html',
  styleUrl: './avatar-filters.component.scss',
})
export class AvatarFiltersComponent {
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.avatarForm;
    this.greyScale = this.form.get('greyScale')?.value;
    this.zoom = this.form.get('zoom')?.value;
    this.brightness = this.form.get('brightness')?.value;
  }

  ngOnInit() {
    this._subscribe();
  }

  private _subscribe() {
    this.form
      .get('greyScale')
      ?.valueChanges.subscribe((value) => (this.greyScale = value));
    this.form
      .get('zoom')
      ?.valueChanges.subscribe((value) => (this.zoom = value));
    this.form
      .get('brightness')
      ?.valueChanges.subscribe((value) => (this.brightness = value));
  }

  onValueChange({ name, value }: TValueChangeEvent) {
    this.form.patchValue({ [name]: value });
  }

  onClickReset = () => {
    this.form.patchValue({
      zoom: DEFAULT_VALUES.zoom,
      brightness: DEFAULT_VALUES.brightness,
      greyScale: DEFAULT_VALUES.greyScale,
    });
  };
}