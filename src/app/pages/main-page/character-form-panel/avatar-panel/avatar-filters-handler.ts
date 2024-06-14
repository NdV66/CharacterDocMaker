import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '@services/character-form.service';

@Injectable()
export abstract class AvatarFilterHandler {
  imageUrl = '';
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  isLoading = false;
  isError = false;
  readonly form!: FormGroup;

  constructor(protected _service: CharacterFormService) {
    this.form = this._service.avatarForm;
    this.greyScale = this.form.get('greyScale')?.value;
    this.zoom = this.form.get('zoom')?.value;
    this.brightness = this.form.get('brightness')?.value;
    this.imageUrl = this.form.get('avatarUrl')?.value;
  }

  ngOnInit() {
    this._subscribeToFiltersChanged();
  }

  private _subscribeToFiltersChanged() {
    this.form
      .get('greyScale')
      ?.valueChanges.subscribe((value) => (this.greyScale = value));

    this.form
      .get('zoom')
      ?.valueChanges.subscribe((value) => (this.zoom = value));

    this.form
      .get('brightness')
      ?.valueChanges.subscribe((value) => (this.brightness = value));

    this.form
      .get('avatarUrl')
      ?.valueChanges.subscribe((value) => (this.imageUrl = value));
  }

  private get _greyScaleAsNonPercent() {
    return this.greyScale / 100;
  }

  private get _brightnessAsNonPercent() {
    return this.brightness / 100;
  }

  get imageInlineStyles() {
    return {
      filter: `grayscale(${this._greyScaleAsNonPercent}) brightness(${this._brightnessAsNonPercent})`,
      backgroundSize: `${this.zoom}% ${this.zoom}%`,
    };
  }
}
