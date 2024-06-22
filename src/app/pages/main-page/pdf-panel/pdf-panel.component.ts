import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '@elements/button/button.component';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { TextButtonComponent } from '@elements/text-button/text-button.component';
import { WidthWrapperComponent } from '@elements/width-wrapper/width-wrapper.component';
import {
  CharacterFormService,
  DEFAULT_VALUES,
} from '@services/character-form.service';
import { TranslationsPipe } from '@translations/translations.pipe';
import { AAvatarFilterHandler } from '../character-form-panel/avatar-panel/avatar-filters-handler';
import { fromEvent, merge } from 'rxjs';
import { AvatarCanvasHandler } from './avatar-canvas-handler.service';

@Component({
  selector: 'app-pdf-panel',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslationsPipe,
    TextButtonComponent,
    NavbarComponent,
    WidthWrapperComponent,
    NgFor,
  ],
  providers: [AvatarCanvasHandler],
  templateUrl: './pdf-panel.component.html',
  styleUrl: './pdf-panel.component.scss',
})
export class PdfPanelComponent extends AAvatarFilterHandler {
  basisInfoForm!: FormGroup;
  basicInfoFieldsNames = ['race', 'age', 'origin', 'nature', 'live'];
  description = '';
  @ViewChild('avatarCanvas') avatarCanvas?: ElementRef<HTMLCanvasElement>;
  private readonly _avatarImageToDraw = new Image();

  constructor(
    service: CharacterFormService,
    private _avatarCanvasHandlerService: AvatarCanvasHandler
  ) {
    super(service);
    const onLoadAvatarSrc$ = fromEvent(this._avatarImageToDraw, 'load');
    this.basisInfoForm = this._service.basicInfoForm;

    this._service.form
      .get('description')
      ?.valueChanges.subscribe((value) => (this.description = value));

    this._avatarUrl$?.subscribe(this._setAvatarImageSrc);
    merge(
      this._greyScale$,
      this._brightness$,
      onLoadAvatarSrc$,
      this._sepia$
    ).subscribe(() =>
      this._avatarCanvasHandlerService.drawAvatarOnCanvas(
        this._avatarImageToDraw,
        this.avatarCanvas,
        this._prepareFilters()
      )
    );
  }

  ngAfterViewInit() {
    this._setAvatarImageSrc(DEFAULT_VALUES.avatarUrl);
  }

  private _setAvatarImageSrc = (value: string) =>
    (this._avatarImageToDraw.src = value);

  get themeNumber() {
    return this._service.form.get('themeOption')?.value;
  }
}
