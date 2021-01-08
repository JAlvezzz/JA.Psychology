import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Intervention } from 'src/app/shared/models/intervention';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.scss']
})
export class InterventionsComponent implements OnInit {

  public interventions = new Array<Intervention>();

  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.interventions = this.generalService.getInterventions();
  }

  public details(intervention: string) {
    this.router.navigate(['intervencoes/', intervention]);
  }

}
