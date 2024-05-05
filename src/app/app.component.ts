import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AvatarPanelComponent } from './avatar-panel/avatar-panel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicInfoPanelComponent } from './basic-info-panel/basic-info-panel.component';
import { DescriptionPanelComponent } from './description-panel/description-panel.component';
import { DocumentThemePanelComponent } from './document-theme-panel/document-theme-panel.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    JumbotronComponent,
    AvatarPanelComponent,
    BasicInfoPanelComponent,
    DescriptionPanelComponent,
    DocumentThemePanelComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'character-doc-maker';
}
