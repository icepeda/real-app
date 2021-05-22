import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  goToUserDetails(){
    this.navController.navigateForward(['/user-details']);
  }
}
