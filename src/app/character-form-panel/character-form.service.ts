import { Injectable } from '@angular/core';
import { CharacterDTO } from '../models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterFormService {
  private _$name: Subject<string> = new Subject();
  private _$race: Subject<string> = new Subject();

  set name(data: string) {
    this._$name.next(data);
  }

  set race(data: string) {
    this._$race.next(data);
  }

  get $name() {
    return this._$name.asObservable();
  }

  get $race() {
    return this._$race.asObservable();
  }

  public dispose() {
    this._$name.unsubscribe();
    this._$race.unsubscribe();
  }

  get characterDTO() {
    return new CharacterDTO();
  }
}
