import { Component, OnInit } from '@angular/core';
import { faUser, faUserFriends, faChild } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { Service } from 'src/app/shared/models/service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  icons = {
    faUser: faUser,
    faUserFriends: faUserFriends,
    faChild: faChild
  }

  title = 'LOGO - Serviços';

  public services = new Array<Service>();

  constructor(private titleService: Title, private metaService: Meta, private router: Router, private generalService: GeneralService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular-Demo - content' },
      { name: 'description', content: 'Angular-Demo - description' }
    ]);

    this.services = this.generalService.getServices();
    this.services.forEach(service => {
      service.icon = this.icons[service.iconName];
    })
  }

  public details(service: string) {
    this.router.navigate(['servicos/', service]);
  }

}
