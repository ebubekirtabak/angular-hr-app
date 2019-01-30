import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Company } from '@models/company.model';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {


  company: Company[];
  constructor (
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.getCompanyProfile(12).subscribe(res => {
      if (res) {
        this.company = res[0];
      }
    });
  }

}
