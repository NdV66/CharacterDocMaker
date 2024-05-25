import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslationsPipe } from '../../translations/translations.pipe';
import { FormControl } from '@angular/forms';
import { isFormControlInvalid } from '../../utils';

@Component({
  selector: 'app-field-error',
  standalone: true,
  imports: [NgIf, TranslationsPipe],
  templateUrl: './field-error.component.html',
  styleUrl: './field-error.component.scss',
})
export class FieldErrorComponent {
  @Input() formControlItem!: FormControl;

  get isError() {
    return isFormControlInvalid(this.formControlItem);
  }
}
