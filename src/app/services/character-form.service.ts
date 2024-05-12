import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const DEFAULT_VALUES = {
  greyScale: 0,
  zoom: 100,
  brightness: 100,
  themeOption: 1,
  avatar: '/assets/images/avatarPlaceholder.png',
};

@Injectable({ providedIn: 'root' })
export class CharacterFormService {
  readonly form: FormGroup = new FormGroup({});

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      race: ['', [Validators.required]],
      age: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      nature: ['', [Validators.required]],
      live: ['', [Validators.required]],

      description: ['', [Validators.required]],
      themeOption: [DEFAULT_VALUES.themeOption],

      avatar: [DEFAULT_VALUES.avatar],
      greyScale: [DEFAULT_VALUES.greyScale],
      brightness: [DEFAULT_VALUES.brightness],
      zoom: [DEFAULT_VALUES.zoom],
    });
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
