import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { DetailComponent } from './detail/detail.component';
import { TeamResolver } from 'src/app/shared/resolvers/team-resolver';

@NgModule({
    declarations: [
      // TeamComponent,
      DetailComponent
    ],
    imports: [
      CommonModule,
      TeamRoutingModule,
      SharedModule
    ],
    providers: [
      TeamResolver
    ]
  })

  export class TeamModule { }
