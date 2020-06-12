import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Specialty } from 'src/app/shared/models/specialty';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {

  public specialties = new Array<Specialty>();

  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.specialties = this.generalService.getSpecialties();
  }

  public details(specialty: string) {
    this.router.navigate(['intervencoes/', specialty]);
  }

}
