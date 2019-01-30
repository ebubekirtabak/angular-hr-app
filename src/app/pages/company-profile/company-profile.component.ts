import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Company } from '@models/company.model';


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {


  companys: Company[];
  constructor (
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.getCompanyProfile(12).subscribe(res => {
      if (res) {
        debugger
        this.companys = res.data;
      }
    });
  }

}
