import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  user: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 

    this.activatedRoute.queryParams.subscribe(params => {
      if (params["user"] !== undefined) {
        this.user = JSON.parse(params["user"]);
      }
    });
  }

  ngOnInit() {
  }

}
