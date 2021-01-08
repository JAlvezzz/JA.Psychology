import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubService } from 'src/app/shared/models/sub-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public subServices = new Array<SubService>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.subServices = res.result;
    });
  }

}
