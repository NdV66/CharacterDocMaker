import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '@services/character-form.service';
import { Observable } from 'rxjs';

@Injectable()
export abstract class AAvatarFilterHandler {
  protected _imageUrl = '';
  greyScale = 0;
  sepia = 0;
  brightness = 0;
  isLoading = false;
  isError = false;
  readonly form!: FormGroup;

  protected readonly _greyScale$!: Observable<number>;
  protected readonly _sepia$!: Observable<number>;
  protected readonly _brightness$!: Observable<number>;
  protected readonly _avatarUrl$!: Observable<string>;

  constructor(protected _service: CharacterFormService) {
    this.form = this._service.avatarForm;
    this.greyScale = this.form.get('greyScale')?.value;
    this.sepia = this.form.get('sepia')?.value;
    this.brightness = this.form.get('brightness')?.value;
    this._imageUrl = this.form.get('avatarUrl')?.value;

    this._greyScale$ = this.form.get('greyScale')?.valueChanges!;
    this._sepia$ = this.form.get('sepia')?.valueChanges!;
    this._brightness$ = this.form.get('brightness')?.valueChanges!;
    this._avatarUrl$ = this.form.get('avatarUrl')?.valueChanges!;
  }

  ngOnInit() {
    this._subscribeToFiltersChanged();
  }

  private _subscribeToFiltersChanged() {
    this._greyScale$?.subscribe((value) => (this.greyScale = value));
    this._sepia$?.subscribe((value) => (this.sepia = value));
    this._brightness$?.subscribe((value) => (this.brightness = value));
    this._avatarUrl$?.subscribe((value) => (this._imageUrl = value));
  }

  protected _prepareFilters = () => {
    return `grayscale(${this._greyScaleAsNonPercent}) brightness(${this._brightnessAsNonPercent}) sepia(${this.sepia})`;
  };

  private get _greyScaleAsNonPercent() {
    return this.greyScale / 100;
  }

  private get _brightnessAsNonPercent() {
    return this.brightness / 100;
  }

  private get _sepiaAsNonPercent() {
    return this.sepia / 100;
  }
}
