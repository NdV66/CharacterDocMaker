import { Injectable } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

export const DEFAULT_VALUES = {
  greyScale: 0,
  zoom: 100,
  brightness: 100,
  themeOption: 1,
  avatar: '/assets/images/avatarPlaceholder.png',
};

@Injectable({ providedIn: 'root' })
export class CharacterFormService {
  readonly form!: FormGroup;
  readonly avatarForm!: FormGroup;
  readonly basicInfoForm!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.avatarForm = formBuilder.group({
      avatar: [DEFAULT_VALUES.avatar],
      greyScale: [DEFAULT_VALUES.greyScale],
      brightness: [DEFAULT_VALUES.brightness],
      zoom: [DEFAULT_VALUES.zoom],
    });

    this.basicInfoForm = formBuilder.group({
      name: ['', [Validators.required]],
      race: ['', [Validators.required]],
      age: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      nature: ['', [Validators.required]],
      live: ['', [Validators.required]],
    });

    this.form = formBuilder.group({
      avatarInfo: this.avatarForm,
      basicInfo: this.basicInfoForm,
      description: ['', [Validators.required]],
      themeOption: [DEFAULT_VALUES.themeOption],
    });
  }

  public uploadAvatar(image: File) {
    this.form.patchValue({ image });
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
