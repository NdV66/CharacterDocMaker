import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { TValueChangeEvent } from './slider/slider.types';

@Component({
  selector: 'app-avatar-filters',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './avatar-filters.component.html',
  styleUrl: './avatar-filters.component.scss',
})
export class AvatarFiltersComponent {
  onValueChange(value: TValueChangeEvent) {
    console.log('parent slider ', value);
  }
}
