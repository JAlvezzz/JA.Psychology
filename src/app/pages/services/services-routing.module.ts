import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceResolver } from 'src/app/shared/resolvers/service-resolver';
import { DetailComponent } from './detail/detail.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: 'servicos',
    component: ServicesComponent,
  },
  {
    path: '',
    component: ServicesComponent,
  },
  {
    path: ':nameIdentifier',
    component: DetailComponent,
    resolve: {
      result: ServiceResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
