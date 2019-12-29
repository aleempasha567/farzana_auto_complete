import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  constructor() {}
  public placeholder: string = 'Doctors, Specialty , Condition , Procedure';
  public keyword = 'name';
  public historyHeading: string = 'Recently selected';

  public countriesTemplate = ['Albania', 'Andorra', 'Armenia', 'Austria'];
  ngOnInit() {}
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }
}
