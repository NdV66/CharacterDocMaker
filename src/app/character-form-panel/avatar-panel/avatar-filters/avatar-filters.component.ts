import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { TValueChangeEvent } from './slider/slider.types';
import { NgFor } from '@angular/common';
import { TranslationsPipe } from '../../../translations/translations.pipe';
import { CharacterFormService } from '../../../services';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-avatar-filters',
  standalone: true,
  providers: [CharacterFormService],
  imports: [SliderComponent, TranslationsPipe, NgFor],
  templateUrl: './avatar-filters.component.html',
  styleUrl: './avatar-filters.component.scss',
})
export class AvatarFiltersComponent {
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
    this.greyScale = service.form.get('greyScale')?.value;
    this.zoom = service.form.get('zoom')?.value;
    this.brightness = service.form.get('brightness')?.value;
  }

  ngOnInit() {
    this._subscribe();
  }

  private _subscribe() {
    this.form
      .get('greyScale')
      ?.valueChanges.pipe(tap((el) => console.log('!!', el)))
      .subscribe((value) => (this.greyScale = value));

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
}
