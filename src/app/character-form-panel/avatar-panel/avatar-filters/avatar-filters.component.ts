import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { TValueChangeEvent } from './slider/slider.types';
import { AvatarFiltersSharedServiceService } from './avatar-filters-shared-service.service';
import { NgForOf } from '@angular/common';

enum EFilterNames {
  GREY_SCALE = 'grey_scale',
  ZOOM = 'zoom',
  BRIGHTNESS = 'brightness',
}

@Component({
  selector: 'app-avatar-filters',
  standalone: true,
  providers: [AvatarFiltersSharedServiceService],
  imports: [SliderComponent, NgForOf],
  templateUrl: './avatar-filters.component.html',
  styleUrl: './avatar-filters.component.scss',
})
export class AvatarFiltersComponent {
  greyScale = 0;
  zoom = 0;
  brightness = 0;
  filterFields = [
    { name: EFilterNames.GREY_SCALE, value: this.greyScale },
    { name: EFilterNames.ZOOM, value: this.zoom },
    { name: EFilterNames.BRIGHTNESS, value: this.brightness },
  ];

  constructor(private _sharedService: AvatarFiltersSharedServiceService) {}

  ngOnInit() {
    this._subscribe();
  }

  private _subscribe() {
    this._sharedService.greyScale$.subscribe(
      (value) => (this.greyScale = value)
    );
    this._sharedService.zoom$.subscribe((value) => (this.zoom = value));
    this._sharedService.brightness$.subscribe(
      (value) => (this.brightness = value)
    );
  }

  onValueChange({ name, value }: TValueChangeEvent) {
    console.log('parent slider ', value, name);
    if (name === EFilterNames.BRIGHTNESS)
      this._sharedService.updateBrightness(value);
    if (name === EFilterNames.GREY_SCALE)
      this._sharedService.updateGreyScale(value);
    if (name === EFilterNames.ZOOM) this._sharedService.updateZoom(value);
  }
}
