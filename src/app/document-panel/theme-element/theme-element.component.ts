import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output('onClickElementEvent') private readonly onClickEventEmitter =
    new EventEmitter<number>();

  get imageUrlCss() {
    return `url(${this.imageUrl})`;
  }

  onClick() {
    this.onClickEventEmitter.emit(this.id);
  }
}
