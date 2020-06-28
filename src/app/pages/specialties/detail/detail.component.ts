import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialty } from 'src/app/shared/models/specialty';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public specialty = new Specialty();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.specialty = res.specialty;
    });
  }

}
