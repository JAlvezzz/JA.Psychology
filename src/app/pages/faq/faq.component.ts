import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/shared/models/faq';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqs = new Array<Faq>();
  public activeIds: string[] = [];

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.faqs = this.generalService.getFaqs();
    this.activeIds = this.faqs.filter(f => f.active).map(res => res.id);
  }

}
