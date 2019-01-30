import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '@services/api.service';
import { NgForm } from '@angular/forms';
import { Company } from '@models/company.model';


@Component({
  selector: 'app-update-company-form-component',
  templateUrl: './update-company-form.component.html',
  styleUrls: ['./update-company-form.component.scss']
})
export class UpdateCompanyFormComponent implements OnInit {

  @Input() company: Company;
  @Output() formSubmit = new EventEmitter<any>();
  public isFormSubmitted: boolean;
  constructor (
    private apiService: ApiService
  ) {

  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.isFormSubmitted = true;
    if (form.valid) {
      this.formSubmit.emit({ isValid: true, formElements: form.value });
    }
  }

}
