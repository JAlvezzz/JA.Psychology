import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { TeamMember } from 'src/app/shared/models/team-member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public teamMembers = new Array<TeamMember>();

  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.teamMembers = this.generalService.getTeamMembers();
  }

  public details(member: string) {
    this.router.navigate(['equipa/', member]);
  }

}
