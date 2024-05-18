import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-with-label',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent],
  templateUrl: './textarea-with-label.component.html',
  styleUrl: './textarea-with-label.component.scss',
})
export class TextareaWithLabelComponent {
  @Input() isError = false;
  @Input() label = '';
  @Input() inputName!: string;
  @Input() form!: FormGroup;
}
