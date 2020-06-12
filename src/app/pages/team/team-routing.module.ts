import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { DetailComponent } from './detail/detail.component';
import { TeamResolver } from 'src/app/shared/resolvers/team-resolver';

const routes: Routes = [
  {
    path: 'equipa',
    component: TeamComponent,
  },
  {
    path: '',
    component: TeamComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
    resolve: {
      teamMember: TeamResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
