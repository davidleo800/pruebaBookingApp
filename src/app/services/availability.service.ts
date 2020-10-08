import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ReservationModel } from '../models/reservation.model';

const url = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor( private http: HttpClient ) { }

  getRooms(){
    return this.http.get(`${ url }/availability.json`);
  }

  getReservations(){
    return this.http.get(`${ url }/reservation.json`);
  }

  createReservation( reservation: ReservationModel ){
    return this.http.post(`${ url }/reservation.json`, reservation);
  }

  updateReservation(reservation: ReservationModel, key: any) {
    return this.http.put(`${ url }/reservation/${key}.json`, reservation);
  }

  deleteReservation(key: any){
    return this.http.delete(`${ url }/reservation/${key}.json`);
  }

}
