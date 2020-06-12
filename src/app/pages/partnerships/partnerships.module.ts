import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnershipsComponent } from './partnerships.component';
import { PartnershipsRoutingModule } from './partnerships-routing.module';

@NgModule({
    declarations: [
      // PartnershipsComponent,
    ],
    imports: [
      CommonModule,
      PartnershipsRoutingModule,
      SharedModule
    ],
    providers: [
    ]
  })

  export class PartnershipsModule { }
