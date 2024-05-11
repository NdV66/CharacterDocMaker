import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_VALUE = 50;

@Injectable()
export class AvatarFiltersSharedServiceService {
  private readonly _greyScale$ = new BehaviorSubject<number>(DEFAULT_VALUE);
  private readonly _brightness$ = new BehaviorSubject<number>(DEFAULT_VALUE);
  private readonly _zoom$ = new BehaviorSubject<number>(DEFAULT_VALUE);

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
