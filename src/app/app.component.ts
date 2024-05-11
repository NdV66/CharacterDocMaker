import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterFormPanelComponent } from './character-form-panel/character-form-panel.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormService } from './services';
import { DocumentPanelComponent } from './document-panel/document-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    NavbarComponent,
    JumbotronComponent,
    CharacterFormPanelComponent,
    DocumentPanelComponent,
    FooterComponent,
  ],
  providers: [CharacterFormService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly form: FormGroup = new FormGroup({});

  constructor(service: CharacterFormService) {
    this.form = service.form;
  }

  onSubmit(e: any) {
    e.preventDefault();
    console.log('PARENT basicCharacterInfo ', this.form.value);
  }
}
