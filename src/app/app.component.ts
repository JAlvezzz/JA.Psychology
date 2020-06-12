import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'LOGO - Página inicial';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      // { name: 'keywords', content: 'some content' },
      { name: 'description', content: 'Psycology - description' }
    ]);
  }
}
