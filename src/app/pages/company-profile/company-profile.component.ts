import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@models/company.model';


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {


  company: Company;
  constructor (
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.company) {
        this.getCompanyProfile(parseInt(params.company, 10));
      }
    });
  }

  getCompanyProfile(companyId: number) {
    this.apiService.getCompanyProfile(companyId).subscribe(res => {
      if (res) {
        this.company = res[0];
      }
    });
  }

  onFormSubmit(event: any) {
    if (event.isValid) {
      this.company = Object.assign(this.company, event.formElements);
    }
  }
}
