import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { InterventionsComponent } from '../interventions/interventions.component';
import { TeamComponent } from '../team/team.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { PricesComponent } from '../prices/prices.component';
import { FaqComponent } from '../faq/faq.component';

@NgModule({
    declarations: [
      HomeComponent,
      ServicesComponent,
      InterventionsComponent,
      TeamComponent,
      ContactsComponent,
      AboutUsComponent,
      PricesComponent,
      FaqComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class HomeModule { }
