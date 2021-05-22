import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(
    public alertController: AlertController
  ) {

  }

  protected handleError(error: HttpErrorResponse) {
    let errorMessage: string;
     if (error.status === 0) {
      errorMessage = `Ohh! Can't reach server. Try again in a few.`;
      this.presentAlert('', '', errorMessage);

    } else {
      errorMessage = error.error.message === undefined ? error.error : error.error.message;
      this.presentAlert(null, null, errorMessage);
    }

    return throwError(errorMessage);
  }

  async presentAlert(title: string, subTitle: string, content: string) {

    const alert = await this.alertController.create({
      header: title,
      subHeader: subTitle,
      message: content,
      buttons: [{
        text: 'Ok',
      }]
    });
  
    await alert.present();
  }

 

}
