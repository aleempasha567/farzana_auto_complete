import { Component, OnInit } from '@angular/core';
import { TypesService } from '../types.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  constructor(private Types: TypesService) {}
  public placeholder: string = 'Doctors, Specialty , Condition , Procedure';
  public keyword = 'title';
  public historyHeading: string = 'Recently selected';

  public countriesTemplate = [];
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    }
 ];

  public starsCount = 3;
  ngOnInit() {
    this.Types.getData().subscribe(data => {
      if(data) {
        console.log(data);
        this.countriesTemplate = data;
      }
    })
  }
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
