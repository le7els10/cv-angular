import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HvModule } from './hv/hv.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FontAwesomeModule, HvModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
