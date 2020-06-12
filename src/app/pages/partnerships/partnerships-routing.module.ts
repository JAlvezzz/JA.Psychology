import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnershipsComponent } from './partnerships.component';

const routes: Routes = [
  {
    path: 'parcerias',
    component: PartnershipsComponent,
  },
  {
    path: '',
    component: PartnershipsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipsRoutingModule { }
