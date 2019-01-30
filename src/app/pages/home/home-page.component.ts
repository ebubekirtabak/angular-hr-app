import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Company } from '@models/company.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  companys: Company[];
  constructor (
    private apiService: ApiService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.apiService.getCompanys().subscribe(res => {
      if (res) {
        this.companys = res.data;
      }
    });
  }

}
