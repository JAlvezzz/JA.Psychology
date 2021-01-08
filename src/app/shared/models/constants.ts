import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    public menuItems = [
      {
        title: 'whoWeAre',
        // route: '/quem-somos',
        subMenus: [
          {
            title: 'aboutUs',
            route: '/sobre-nos'
          },
          {
            title: 'team',
            route: '/equipa'
          }
        ]
      },
      {
        title: 'interventions',
        route: '/intervencoes'
      },
      {
        title: 'services',
        route: '/servicos'
      },
      {
        title: 'prices',
        route: '/precos'
      },
      {
        title: 'contacts',
        route: '/contactos'
      },
      {
        title: 'faq',
        route: '/perguntas-frequentes'
      },
      {
        title: 'blog',
        route: '/blog'
      }
    ];
}
