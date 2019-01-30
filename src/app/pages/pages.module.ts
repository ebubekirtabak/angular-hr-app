import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from '@pages/home/home-page.component';
import { CompanyProfileComponent } from '@pages/company-profile/company-profile.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '@components/component.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ComponentModule
  ],
  exports: [
    HomePageComponent,
    CompanyProfileComponent
  ],
  providers: [],
  bootstrap: []
})
export class PageModule { }
