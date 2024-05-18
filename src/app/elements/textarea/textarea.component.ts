import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() isError = false;
  @Input() label = '';
  @Input() inputName!: string;
  @Input() form!: FormGroup;
}
