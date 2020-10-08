import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailabilityRoomsComponent } from './pages/availability-rooms/availability-rooms.component';
import { RoomComponent } from './pages/room/room.component';


const routes: Routes = [
  {path: 'availability-rooms', component: AvailabilityRoomsComponent},
  {path: 'room/:id', component: RoomComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'availability-rooms'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
