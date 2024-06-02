import { Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page/main-page.component';
import { LightLifePdfComponent } from '@pages/pdf/light-life-pdf/light-life-pdf.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'pdf/light-life', component: LightLifePdfComponent },
];
