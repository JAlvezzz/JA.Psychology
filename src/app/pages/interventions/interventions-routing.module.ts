import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterventionsComponent } from './interventions.component';
import { DetailComponent } from './detail/detail.component';
import { InterventionResolver } from 'src/app/shared/resolvers/intervention-resolver';

const routes: Routes = [
  {
    path: 'intervencoes',
    component: InterventionsComponent,
  },
  {
    path: '',
    component: InterventionsComponent,
  },
  {
    path: ':nameIdentifier',
    component: DetailComponent,
    resolve: {
      result: InterventionResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterventionsRoutingModule { }
