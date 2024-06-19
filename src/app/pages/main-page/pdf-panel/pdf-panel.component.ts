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
  templateUrl: './pdf-panel.component.html',
  styleUrl: './pdf-panel.component.scss',
})
export class PdfPanelComponent extends AAvatarFilterHandler {
  basisInfoForm!: FormGroup;
  basicInfoFieldsNames = ['race', 'age', 'origin', 'nature', 'live'];
  @ViewChild('avatarCanvas') avatarCanvas?: ElementRef<HTMLCanvasElement>;
  private readonly _avatarImageToDraw = new Image();

  constructor(service: CharacterFormService) {
    super(service);
    const onLoadAvatarSrc$ = fromEvent(this._avatarImageToDraw, 'load');
    this.basisInfoForm = this._service.basicInfoForm;

    this._avatarUrl$?.subscribe(this._setAvatarImageSrc);
    merge(this._greyScale$, this._brightness$, onLoadAvatarSrc$).subscribe(
      this._drawAvatarOnCanvas
    );
  }

  ngAfterViewInit() {
    this._setAvatarImageSrc(DEFAULT_VALUES.avatarUrl);
  }

  private _prepareFilters = () => {
    return `grayscale(${this._greyScaleAsNonPercent}) brightness(${this._brightnessAsNonPercent})`;
  };

  private _setAvatarImageSrc = (value: string) =>
    (this._avatarImageToDraw.src = value);

  private _drawAvatarOnCanvas = () => {
    const canvas = this.avatarCanvas?.nativeElement;
    if (!canvas) return;

    const { width, height } = canvas;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.filter = this._prepareFilters();
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(this._avatarImageToDraw, 0, 0, width, height);
    }
  };

  get themeNumber() {
    return this._service.form.get('themeOption')?.value;
  }
}
