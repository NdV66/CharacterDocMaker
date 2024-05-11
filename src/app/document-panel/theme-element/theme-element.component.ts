import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-element',
  standalone: true,
  imports: [],
  templateUrl: './theme-element.component.html',
  styleUrl: './theme-element.component.scss',
})
export class ThemeElementComponent {
  @Input() id: number = 0;
  @Input() text: string = '';
  @Input() imageUrl: string = '';
  @Input() isSelected: boolean = false;

  get imageUrlCss() {
    return `url(${this.imageUrl})`;
  }

  onClick() {
    console.log('>>>> Element was clicked! ', this.id);
  }
}
