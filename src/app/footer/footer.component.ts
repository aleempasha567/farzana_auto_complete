import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
}
