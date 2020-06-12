import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    PagesRoutingModule,
    LeafletModule,
    FontAwesomeModule
  ],
  providers: [
  ]
})
export class PagesModule { }
