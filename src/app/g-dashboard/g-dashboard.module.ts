import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarComponent } from './components/bar/bar.component';
import { PlateComponent } from './components/plate/plate.component';
import { GDashboardComponent } from './containers/g-dashboard/g-dashboard.component';

@NgModule({
  declarations: [GDashboardComponent, PlateComponent, BarComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [GDashboardComponent],
})
export class GDashboardModule {}
