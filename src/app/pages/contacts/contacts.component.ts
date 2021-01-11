import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TeamMember } from 'src/app/shared/models/team-member';
import { GeneralService } from 'src/app/shared/services/general.service';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  title = 'ContactsComponent - Title';

  public teamContacts = new Array<TeamMember>();

  public phoneIcon = faPhone;
  public mailIcon = faEnvelope;
  
  constructor(private titleService: Title, private metaService: Meta,  private generalService: GeneralService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular-Demo - content' },
      { name: 'description', content: 'Angular-Demo - description' }
    ]);

    this.teamContacts = this.generalService.getTeamMemberContacts();
  }

}
