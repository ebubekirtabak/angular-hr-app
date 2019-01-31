import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user.model';


@Component({
  selector: 'app-canditates',
  templateUrl: './canditates.component.html',
  styleUrls: ['./canditates.component.scss']
})
export class CanditatesComponent implements OnInit {


  userList: User[];
  constructor (
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.apiService.getCandidates().subscribe((response) => {
      debugger;
    });
  }
}
