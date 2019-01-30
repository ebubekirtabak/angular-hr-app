import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@pages/home/home-page.component';
import { CompanyProfileComponent } from '@pages/company-profile/company-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Ana Sayfa',
      breadcrumb_level: 0,
      breadcrumb_type: 'main',
    },
  },
  {
    path: 'company-profile/:company',
    component: CompanyProfileComponent,
    data: {
      breadcrumb: 'Firma Profili',
      breadcrumb_level: 0,
      breadcrumb_type: 'main',
    },

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
