import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubIntervention } from 'src/app/shared/models/sub-intervention';
import { faExclamationTriangle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public warningIcon = faExclamationTriangle;
  public coolIcon = faThumbsUp;

  public subInterventions = new Array<SubIntervention>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.subInterventions = res.result;
    });
  }

}
