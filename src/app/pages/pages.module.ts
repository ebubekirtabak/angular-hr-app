import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from '@pages/home/home-page.component';
import { CompanyProfileComponent } from '@pages/company-profile/company-profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    CompanyProfileComponent
  ],
  providers: [],
  bootstrap: []
})
export class PageModule { }
