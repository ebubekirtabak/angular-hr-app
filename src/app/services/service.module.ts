import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from '@services/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [

  ],
  providers: [
    ApiService
  ],
  bootstrap: []
})
export class ServiceModule { }
