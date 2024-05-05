import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentThemePanelComponent } from './document-panel/document-theme-panel/document-theme-panel.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterFormPanelComponent } from './character-form-panel/character-form-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    JumbotronComponent,
    CharacterFormPanelComponent,
    DocumentThemePanelComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'character-doc-maker';
}
