import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { FieldErrorComponent } from '../field-error/field-error.component';

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
}
