import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);

  get isLoading() {
    return this._isLoading.asObservable();
  }

  setIsLoading(value: boolean) {
    this._isLoading.next(value);
  }
}
