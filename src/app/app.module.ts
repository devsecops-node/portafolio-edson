import { NgModule, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { InfoMainComponent } from './components/info-main/info-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
