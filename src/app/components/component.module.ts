import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '@components/navbar/navbar.component';
import { UpdateCompanyFormComponent } from '@components/update-company-form/update-company-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    UpdateCompanyFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    UpdateCompanyFormComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
