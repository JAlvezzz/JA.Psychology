import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    public menuItems = [
      // {
      //   title: 'Services',
      //   route: '/servicos'
      // },
      // {
      //   title: 'team',
      //   route: '/equipa'
      // },
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
        title: 'specialties',
        route: '/intervencoes'
      },
      {
        title: 'prices',
        route: '/precos'
      },
      {
        title: 'partnerships',
        route: '/parcerias'
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
