import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';

declare var google;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  user: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 

    this.activatedRoute.queryParams.subscribe(params => {
      if (params["user"] !== undefined) {
        this.user = JSON.parse(params["user"]);

      this.loadMap(this.user.address.geo.lat, this.user.address.geo.lng);

      }
    });
  }

  ngOnInit() {
  }

  loadMap(latitude, longitude) {

      const latLng = new google.maps.LatLng(latitude, longitude);
      const mapOptions = {
        center: latLng,
        zoom: 2,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: "Hello World!",
      });


  
  }

}
