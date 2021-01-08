import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'LOGO - Home';
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular-Demo - content' },
      { name: 'description', content: 'Angular-Demo - description' }
    ]);
  }

}
