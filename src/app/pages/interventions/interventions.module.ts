import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterventionsComponent } from './interventions.component';
import { InterventionsRoutingModule } from './interventions-routing.module';
import { DetailComponent } from './detail/detail.component';
import { InterventionResolver } from 'src/app/shared/resolvers/intervention-resolver';

@NgModule({
    declarations: [
      // InterventionsComponent,
      DetailComponent
    ],
    imports: [
      CommonModule,
      InterventionsRoutingModule,
      SharedModule
    ],
    providers: [
      InterventionResolver
    ]
  })

  export class InterventionsModule { }
