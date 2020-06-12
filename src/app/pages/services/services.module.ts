import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
      // ServicesComponent,
    ],
    imports: [
      CommonModule,
      ServicesRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class ServicesModule { }
