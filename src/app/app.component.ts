import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { JumbotronModule } from './jumbotron/jumbotron.module';
import { AvatarPanelModule } from './avatar-panel/avatar-panel.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule, JumbotronModule, AvatarPanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'character-doc-maker';
}
