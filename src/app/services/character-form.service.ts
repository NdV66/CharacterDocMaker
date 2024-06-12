import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfCreatorService } from './pdf-creator.service';

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

  constructor(
    formBuilder: FormBuilder,
    private _pdfCreatorService: PdfCreatorService
  ) {
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

  get previewRoute() {
    return 'pdf';
  }

  get isFormValid() {
    return !this.form.invalid;
  }

  uploadAvatar(image: File) {
    this.form.patchValue({ image });
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.form.markAllAsTouched();
    console.log('Form', this.form.value);
    this._pdfCreatorService.exportToPdf();
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
