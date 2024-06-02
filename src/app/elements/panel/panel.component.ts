import { Component, Input } from '@angular/core';
import { TitleComponent } from '@elements/title/title.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
