import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfCreatorService } from '../pdf-creator-service/pdf-creator.service';
import { ImageSnippetDto } from '@models/ImageSnippet.dto';

export const DEFAULT_VALUES = {
  greyScale: 0,
  sepia: 0,
  brightness: 100,
  themeOption: 1,
  avatarUrl: '/assets/images/avatarPlaceholder.png',
};

const DESCRIPTION_MAX_LENGTH = 2500;

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
      avatarFile: [],
      avatarUrl: [DEFAULT_VALUES.avatarUrl],
      greyScale: [DEFAULT_VALUES.greyScale],
      brightness: [DEFAULT_VALUES.brightness],
      sepia: [DEFAULT_VALUES.sepia],
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
      description: [
        '',
        [Validators.required, Validators.maxLength(DESCRIPTION_MAX_LENGTH)],
      ],
      themeOption: [DEFAULT_VALUES.themeOption],
    });
  }

  uploadAvatar(image: ImageSnippetDto) {
    this.avatarForm.patchValue({
      avatarUrl: image.src,
      avatarFile: image.file,
    });
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      const rawSource = document.getElementById('pdf') as HTMLElement;
      this._pdfCreatorService.exportToPdf(rawSource);
    }
  }
}

//https://sandroroth.com/blog/angular-complex-reactive-forms/
