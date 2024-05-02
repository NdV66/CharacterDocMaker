import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarComponent, MatSlideToggleModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
