import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RatingModule} from "ngx-rating";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAppointmentComponent,
    HeaderComponent,
    FooterComponent,
    ViewProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AutocompleteLibModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
