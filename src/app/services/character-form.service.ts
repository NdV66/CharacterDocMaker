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

const PREVIEW_ROUTES_BY_THEME_OPTION = new Map([
  [1, 'pdf/light-life'],
  [2, 'pdf/lovely-lila'],
  [3, 'pdf/back-to-black'],
]);

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
    return (
      PREVIEW_ROUTES_BY_THEME_OPTION.get(this.form.value['themeOption']) || ''
    );
  }

  get isFormValid() {
    return !this.form.invalid;
  }

  uploadAvatar(image: File) {
    this.form.patchValue({ image });
  }

  onSubmitPreview(event: any) {
    event.preventDefault();
    this.form.markAllAsTouched();

    if (this.isFormValid) {
      console.log('Form', this.form.value);
    }
  }

  // https://decentro.tech/blog/jspdf/
  onSubmit(event: any) {
    event.preventDefault();

    const pages = document.querySelector('.pdf-document') as HTMLElement;
    console.log(pages);
    this._pdfCreatorService.exportToPdf(pages);

    if (!this.form.invalid) {
      console.log('Form', this.form.value);
    }
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
