import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const FILTER_DEFAULT_VALUE = 50;
const THEME_DEFAULT_VALUE = 1;
const IMAGE_DEFAULT_VALUE = '/assets/images/avatarPlaceholder.png';

@Injectable()
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
      themeOption: [THEME_DEFAULT_VALUE],

      avatar: [IMAGE_DEFAULT_VALUE],
      greyScale: [FILTER_DEFAULT_VALUE],
      brightness: [FILTER_DEFAULT_VALUE],
      zoom: [FILTER_DEFAULT_VALUE],
    });
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
