import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from '../field-error/field-error.component';

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
}
