import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: BookAppointmentComponent
  },
  {
    path: 'view-profile/:id',
    component: ViewProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
