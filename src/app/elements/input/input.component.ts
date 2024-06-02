import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '@elements/label/label.component';
import { FieldErrorComponent } from '@elements/field-error/field-error.component';
import { isFormControlInvalid } from '@utils/form';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent, FieldErrorComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() error = '';
  @Input() label = '';
  @Input() inputName!: string;
  @Input() form!: FormGroup;

  isError(name: string) {
    return isFormControlInvalid(this.getFormControl(name));
  }

  getFormControl(name: string) {
    return this.form.controls[name] as FormControl;
  }
}
