import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { TValueChangeEvent } from './slider/slider.types';
import { AvatarFiltersSharedServiceService } from './avatar-filters-shared-service.service';
import { NgFor } from '@angular/common';
import { TranslationsPipe } from '../../../translations/translations.pipe';
import { tap } from 'rxjs';

enum EFilterNames {
  GREY_SCALE = 'grey_scale',
  ZOOM = 'zoom',
  BRIGHTNESS = 'brightness',
}

@Component({
  selector: 'app-avatar-filters',
  standalone: true,
  providers: [AvatarFiltersSharedServiceService],
  imports: [SliderComponent, TranslationsPipe, NgFor],
  templateUrl: './avatar-filters.component.html',
  styleUrl: './avatar-filters.component.scss',
})
export class AvatarFiltersComponent {
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  filterFields = [
    {
      name: EFilterNames.GREY_SCALE,
      value: this.greyScale,
      label: 'form.avatar.fields.greyScale',
    },
    {
      name: EFilterNames.ZOOM,
      value: this.zoom,
      label: 'form.avatar.fields.zoom',
    },
    {
      name: EFilterNames.BRIGHTNESS,
      value: this.brightness,
      label: 'form.avatar.fields.brightness',
    },
  ];

  constructor(private _sharedService: AvatarFiltersSharedServiceService) {}

  ngOnInit() {
    this._subscribe();
  }

  //TODO add unsubscribe() on exit component
  private _subscribe() {
    this._sharedService.greyScale$
      .pipe(tap((el) => console.log('>> UWAGA', el)))
      .subscribe((value) => (this.greyScale = value));
    this._sharedService.zoom$.subscribe((value) => (this.zoom = value));
    this._sharedService.brightness$.subscribe(
      (value) => (this.brightness = value)
    );
  }

  onValueChange({ name, value }: TValueChangeEvent) {
    if (name === EFilterNames.BRIGHTNESS) {
      this._sharedService.updateBrightness(value);
      this._sharedService.updateGreyScale(value);
    }
    if (name === EFilterNames.GREY_SCALE)
      this._sharedService.updateGreyScale(value);
    if (name === EFilterNames.ZOOM) this._sharedService.updateZoom(value);
  }

  identify(index: number, item: any) {
    return item.name;
  }
}
