import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecialtiesComponent } from './specialties.component';
import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties-resolver';

@NgModule({
    declarations: [
      // SpecialtiesComponent,
      DetailComponent
    ],
    imports: [
      CommonModule,
      SpecialtiesRoutingModule,
      SharedModule
    ],
    providers: [
      SpecialtiesResolver
    ]
  })

  export class SpecialtiesModule { }
