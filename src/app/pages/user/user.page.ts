import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  usersList: Array<IUser>;
  
  constructor(private navController: NavController, private userService: UserService,  private loadingController: LoadingController) { }

  ngOnInit() {
    this.fetchUsers(null);
  }

  goToUserDetails(user: IUser){

    const navigationExtras: NavigationExtras = {
			queryParams: {
				user: JSON.stringify(user)
			},
		};

    this.navController.navigateForward(['/user-details'], navigationExtras);
  }

  fetchUsers(event){

    this.loadingController.create({
      cssClass: 'transparent',
      showBackdrop: false
    }).then((loader) => {
      loader.present();
      
    this.userService.getUsers().subscribe(users => {
      
      this.usersList = users;

      if(event){
			  event.target.complete();
      }

      loader.dismiss();
    }, (err) => {

      if(event){
			  event.target.complete();
      }

      loader.dismiss();
    });
  });
  }
}
