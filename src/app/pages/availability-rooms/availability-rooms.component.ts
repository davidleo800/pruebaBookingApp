import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../../services/availability.service';

@Component({
  selector: 'app-availability-rooms',
  templateUrl: './availability-rooms.component.html',
  styleUrls: ['./availability-rooms.component.css']
})
export class AvailabilityRoomsComponent implements OnInit {

  rooms: any;

  constructor(private roomsService: AvailabilityService) {

  }

  ngOnInit() {
    this.roomsService.getRooms().subscribe( resp => {
      console.log(resp);
      this.rooms = resp;
    });
  }

}
