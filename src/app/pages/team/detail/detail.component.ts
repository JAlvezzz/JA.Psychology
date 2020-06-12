import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMember } from 'src/app/shared/models/team-member';

import { faLinkedin, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public member = new TeamMember();

  // Social media icons
  public linkedInIcon = faLinkedin;
  public facebookIcon = faFacebookSquare;
  public instagramIcon = faInstagram;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.member = res.teamMember;
    });
  }

}
