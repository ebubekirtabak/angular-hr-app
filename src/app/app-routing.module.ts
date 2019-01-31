import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@pages/home/home-page.component';
import { CompanyProfileComponent } from '@pages/company-profile/company-profile.component';
import { CanditatesComponent } from '@pages/canditates/canditates.component';


const routes: Routes = [
  {
    path: 'home',
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
      breadcrumb_level: 1,
      breadcrumb_type: 'main',
    },
  },
  {
    path: 'candidates',
    component: CanditatesComponent,
    data: {
      breadcrumb: 'Kullanıcı lİSTESİ',
      breadcrumb_level: 1,
      breadcrumb_type: 'main',
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
