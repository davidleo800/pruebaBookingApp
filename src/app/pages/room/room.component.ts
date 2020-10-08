import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../../models/reservation.model';
import { AvailabilityService } from '../../services/availability.service';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  reservation: ReservationModel = new ReservationModel();
  reservList: any;
  checkin: any;
  checkout: any;


  constructor(private roomsService: AvailabilityService,
              private rutaActiva: ActivatedRoute ) {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.reservation.type = params.type;
        this.checkin = params.checkin;
        this.checkout = params.checkout;
      });
   }

  ngOnInit(){
    this.getReservation();
  }

  saveReservation() {
    this.roomsService.createReservation(this.reservation)
        .subscribe( resp => {
          console.log(resp);
          this.getReservation();
        });
  }

  updateReservation(reserv){
    this.roomsService.updateReservation(reserv.value, reserv.id )
    .subscribe();
  }

  deleteReservation(reserv){
    this.roomsService.deleteReservation(reserv.id )
    .subscribe( resp => {
      this.getReservation();
    });
  }

  getReservation(){
    this.roomsService.getReservations().subscribe( (resp: any) => {
      this.reservList = Object.keys(resp).map(key => ({id: key, value: resp[key]}));
      resp = Object.keys(resp).map(
        e => resp[e]);
      const id = resp.filter((x: { type: string; }) => x.type === this.reservation.type);
      console.log(id);

      var matriz = {};

      id.forEach((registro) => {
      var checkin = registro["checkin"];
      matriz[checkin] = matriz[checkin] ? (matriz[checkin] + 1) : 1;
      });
      console.log(matriz);

    });
  }
}
