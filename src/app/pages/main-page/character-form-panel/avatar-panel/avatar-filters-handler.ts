import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterFormService } from '@services/character-form.service';
import { Observable } from 'rxjs';

@Injectable()
export abstract class AAvatarFilterHandler {
  protected _imageUrl = '';
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  isLoading = false;
  isError = false;
  readonly form!: FormGroup;

  protected readonly _greyScale$!: Observable<number>;
  protected readonly _zoom$!: Observable<number>;
  protected readonly _brightness$!: Observable<number>;
  protected readonly _avatarUrl$!: Observable<string>;

  constructor(protected _service: CharacterFormService) {
    this.form = this._service.avatarForm;
    this.greyScale = this.form.get('greyScale')?.value;
    this.zoom = this.form.get('zoom')?.value;
    this.brightness = this.form.get('brightness')?.value;
    this._imageUrl = this.form.get('avatarUrl')?.value;

    this._greyScale$ = this.form.get('greyScale')?.valueChanges!;
    this._zoom$ = this.form.get('zoom')?.valueChanges!;
    this._brightness$ = this.form.get('brightness')?.valueChanges!;
    this._avatarUrl$ = this.form.get('avatarUrl')?.valueChanges!;
  }

  ngOnInit() {
    this._subscribeToFiltersChanged();
  }

  private _subscribeToFiltersChanged() {
    this._greyScale$?.subscribe((value) => (this.greyScale = value));
    this._zoom$?.subscribe((value) => (this.zoom = value));
    this._brightness$?.subscribe((value) => (this.brightness = value));
    this._avatarUrl$?.subscribe((value) => (this._imageUrl = value));
  }

  protected get _greyScaleAsNonPercent() {
    return this.greyScale / 100;
  }

  protected get _brightnessAsNonPercent() {
    return this.brightness / 100;
  }
}
