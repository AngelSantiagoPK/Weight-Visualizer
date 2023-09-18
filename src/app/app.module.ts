import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GDashboardModule } from './g-dashboard/g-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
