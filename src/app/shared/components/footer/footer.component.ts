import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Communication icons
  public phoneIcon = faPhone;
  public mailIcon = faEnvelope;
  public locationIcon = faMapMarkerAlt;

  // Social media icons
  public linkedInIcon = faLinkedin;
  public facebookIcon = faFacebookSquare;
  public instagramIcon = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
