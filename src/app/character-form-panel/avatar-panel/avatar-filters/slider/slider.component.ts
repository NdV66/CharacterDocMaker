import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TValueChangeEvent } from './slider.types';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() min = 0;
  @Input() max = 0;
  @Input() name = '';
  @Input() value = 0;
  @Output('onValueChangeEvent') readonly onValueChangeEventEmitter =
    new EventEmitter<TValueChangeEvent>();

  onValueChange(event: Event) {
    const data: TValueChangeEvent = {
      name: this.name,
      value: Number.parseInt((event.target as HTMLInputElement).value, 10),
    };
    this.onValueChangeEventEmitter.emit(data);
  }
}