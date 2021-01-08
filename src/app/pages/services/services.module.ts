import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './detail/detail.component';
import { ServiceResolver } from 'src/app/shared/resolvers/service-resolver';

@NgModule({
    declarations: [
      // ServicesComponent,
      DetailComponent
    ],
    imports: [
      CommonModule,
      ServicesRoutingModule,
      SharedModule
    ],
    providers: [
      ServiceResolver
    ]
  })

  export class ServicesModule { }
