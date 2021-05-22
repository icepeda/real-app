import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(public alertController: AlertController ,private httpClient: HttpClient) {
    super(alertController);
  }


  getUsers(): Observable<any> {
    const relativeUrl = '/users';
  
    const encodedUrl = encodeURI(`${this.baseUrl}${relativeUrl}`);
    return this.httpClient.get(encodedUrl)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(err => {
          return this.handleError(err);
        })
      );
  }
}
