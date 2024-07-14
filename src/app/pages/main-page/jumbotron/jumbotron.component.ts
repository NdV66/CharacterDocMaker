import { Component } from '@angular/core';
import { TranslationsPipe } from '@translations/translations.pipe';
import { NoteComponent } from '@elements/note/note.component';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [TranslationsPipe, NoteComponent],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss',
})
export class JumbotronComponent {}
