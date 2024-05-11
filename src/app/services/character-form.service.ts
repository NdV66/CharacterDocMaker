import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      themeOption: [1],
      avatar: [''],
    });
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
