import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
}
