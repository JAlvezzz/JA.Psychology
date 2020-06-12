import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {
      //   path: 'servicos',
      //   loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      // },
      {
        path: 'intervencoes',
        loadChildren: () => import('./specialties/specialties.module').then(m => m.SpecialtiesModule)
      },
      {
        path: 'sobre-nos',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'equipa',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'precos',
        loadChildren: () => import('./prices/prices.module').then(m => m.PricesModule)
      },
      {
        path: 'parcerias',
        loadChildren: () => import('./partnerships/partnerships.module').then(m => m.PartnershipsModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'perguntas-frequentes',
        loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
