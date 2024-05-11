import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const DEFAULT_VALUE_FILTER = 50;

@Injectable()
export class AvatarFiltersSharedServiceService {
  private readonly _greyScale$ = new BehaviorSubject(DEFAULT_VALUE_FILTER);
  private readonly _brightness$ = new BehaviorSubject(DEFAULT_VALUE_FILTER);
  private readonly _zoom$ = new BehaviorSubject(DEFAULT_VALUE_FILTER);

  get greyScale$() {
    return this._greyScale$.asObservable();
  }

  get brightness$() {
    return this._brightness$.asObservable();
  }

  get zoom$() {
    return this._zoom$.asObservable();
  }

  updateGreyScale(value: number) {
    this._greyScale$.next(value);
  }

  updateZoom(value: number) {
    this._zoom$.next(value);
  }

  updateBrightness(value: number) {
    this._brightness$.next(value);
  }
}
