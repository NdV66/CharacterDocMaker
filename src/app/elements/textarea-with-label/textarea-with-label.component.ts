import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-textarea-with-label',
  standalone: true,
  imports: [LabelComponent, ReactiveFormsModule],
  templateUrl: './textarea-with-label.component.html',
  styleUrl: './textarea-with-label.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class TextareaWithLabelComponent {
  @Input() isError = false;
  @Input() label = '';
  @Input() formControlName = '';
  @Input() name = '';
  //   @Input() form: FormGroup = new FormGroup({});
}
