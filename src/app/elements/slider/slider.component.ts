import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TValueChangeEvent } from './slider.types';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [LabelComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() min = 0;
  @Input() max = 100;
  @Input() id = '';
  @Input() value = 0;
  @Input() label = '';
  @Output('onValueChangeEvent') readonly onValueChangeEventEmitter =
    new EventEmitter<TValueChangeEvent>();

  onValueChange(event: Event) {
    const data: TValueChangeEvent = {
      name: this.id,
      value: Number.parseInt((event.target as HTMLInputElement).value, 10),
    };
    this.onValueChangeEventEmitter.emit(data);
  }
}
