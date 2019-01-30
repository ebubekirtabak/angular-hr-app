import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from '@pages/home/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,

  ],
  exports: [
    HomePageComponent
  ],
  providers: [],
  bootstrap: []
})
export class PageModule { }
