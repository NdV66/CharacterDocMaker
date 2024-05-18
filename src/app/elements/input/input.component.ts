import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() isError = false;
  @Input() label = '';
  @Input() inputName!: string;
  @Input() form!: FormGroup;
}
