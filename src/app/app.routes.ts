import { Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page/main-page.component';
import { PdfPanelComponent } from '@pages/pdf/pdf-panel/pdf-panel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'pdf', component: PdfPanelComponent },
];
