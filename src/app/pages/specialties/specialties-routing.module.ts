import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialtiesComponent } from './specialties.component';
import { DetailComponent } from './detail/detail.component';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties-resolver';

const routes: Routes = [
  {
    path: 'intervencoes',
    component: SpecialtiesComponent,
  },
  {
    path: '',
    component: SpecialtiesComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
    resolve: {
      specialty: SpecialtiesResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialtiesRoutingModule { }
