import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as L from 'leaflet';
import { TeamMember } from 'src/app/shared/models/team-member';
import { GeneralService } from 'src/app/shared/services/general.service';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public options = {
    layers: [
        // Default
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })

        // Streets
        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']})
        // // Hybrid
        // L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']})
        // // Satellite
        // L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']})
        // // Terrain
        // L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']})

    ],
    zoom: 18,
    center: L.latLng(38.687394, -9.338091)
  };

  public icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: './assets/img/marker-icon.png',
      shadowUrl: './assets/img/marker-shadow.png'
    })
  };

  public layers = [ L.marker([ 38.687274, -9.338071 ], this.icon).bindPopup('Aqui cenas blah') ];

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
