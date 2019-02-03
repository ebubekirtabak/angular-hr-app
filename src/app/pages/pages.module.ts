import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from '@pages/home/home-page.component';
import { CompanyProfileComponent } from '@pages/company-profile/company-profile.component';
import { CanditatesComponent } from '@pages/canditates/canditates.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '@components/component.module';
import { CanditatesProfileComponent } from '@pages/canditates-profile/canditates-profile.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CompanyProfileComponent,
    CanditatesComponent,
    CanditatesProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ComponentModule
  ],
  exports: [
    HomePageComponent,
    CompanyProfileComponent,
    CanditatesComponent,
    CanditatesProfileComponent
  ],
  providers: [],
  bootstrap: []
})
export class PageModule { }
