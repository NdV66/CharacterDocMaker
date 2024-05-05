import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.scss',
})
export class BasicInputComponent {
  value = '';
  @Output('onValueChanged') valueEvent = new EventEmitter<string>();

  public onChangeValue(event: Event) {
    this.valueEvent.emit((event.target as HTMLInputElement).value);
  }
}
