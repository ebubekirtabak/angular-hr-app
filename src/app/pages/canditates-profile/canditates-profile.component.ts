import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user.model';


@Component({
  selector: 'app-canditates-profile',
  templateUrl: './canditates-profile.component.html'
})
export class CanditatesProfileComponent implements OnInit {


  userList: User[];
  userModel: User;
  constructor (
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.uid && localStorage.getItem('userList')) {
        const uid = params.uid;
        this.userList = JSON.parse(localStorage.getItem('userList'));
        this.userModel = this.userList.filter(user => user.id.value === uid)[0];
      }
    });
  }

}
