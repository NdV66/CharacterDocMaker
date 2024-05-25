import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import {
  FormControl,
  FormGroup,
  isFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { isFormControlInvalid } from '../../utils';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent, FieldErrorComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() error?: string;
  @Input() label = '';
  @Input() inputName!: string;
  @Input() form!: FormGroup;

  get formControl() {
    return this.form.controls[this.inputName] as FormControl;
  }

  get isError() {
    return isFormControlInvalid(this.formControl);
  }
}
