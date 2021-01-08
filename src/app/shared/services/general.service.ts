import { Injectable } from '@angular/core';
import { TeamMember } from '../models/team-member';
import { Observable, of } from 'rxjs';
import { Intervention } from '../models/intervention';
import { SubIntervention } from '../models/sub-intervention';
import { Service } from '../models/service';
import { SubService } from '../models/sub-service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  private services: Service[] = [
    {
      id: 1,
      nameIdentifier: 'psicologia-clinica',
      icon: null,
      iconName: 'faUser',
      title: 'Psicologia clínica',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip.'
    },
    {
      id: 2,
      nameIdentifier: 'psicologia-educacional',
      icon: null,
      iconName: 'faUserFriends',
      title: 'Psicologia educacional',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip.'
    },
    {
      id: 3,
      nameIdentifier: 'psicologia-educacional2',
      icon: null,
      iconName: 'faChild',
      title: 'Psicologia educacional2',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip.'
    }
  ];

  private subServices: SubService[] = [
    {
      id: 1,
      serviceNameIdentifier: 'psicologia-clinica',
      title: 'Serviço 1',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
    },
    {
      id: 2,
      serviceNameIdentifier: 'psicologia-clinica',
      title: 'Serviço 2',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
    },
    {
      id: 3,
      serviceNameIdentifier: 'psicologia-educacional',
      title: 'Serviço 3',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
    },
    {
      id: 4,
      serviceNameIdentifier: 'psicologia-educacional',
      title: 'Serviço 4',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
    }
  ];

  private teamMembers: TeamMember[] = [
    {
      id: 1,
      nameIdentifier: 'josefina-queiroz',
      fullName: 'Josefina Queiroz',
      role: 'Psicóloga Clínica',
      workerRole: 'Fundadora',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest1',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null,
      phone: '912345678',
      email: 'josefina.queiroz@gmail.com'
    },
    {
      id: 2,
      nameIdentifier: 'ermelinda-cruz-dos-santos',
      fullName: 'Ermelinda Cruz dos Santos',
      role: 'Psicóloga Clínica',
      workerRole: 'Fundadora',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest2',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null,
      phone: '912345678',
      email: 'ermelinda.santos@gmail.com'
    },
    {
      id: 3,
      nameIdentifier: 'vitorina-jesus-da-silva-do-o',
      fullName: 'Vitorina Jesus da Silva do Ó',
      role: 'Psicoterapeuta',
      workerRole: 'Fundadora',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest3',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null,
      phone: '912345678',
      email: 'vitorina.silva@gmail.com'
    }
  ];

  private interventions: Intervention[] = [
    {
      id: 1,
      nameIdentifier: 'adultos',
      title: 'Adultos',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.'
    },
    {
      id: 2,
      nameIdentifier: 'criancas-e-adolescentes',
      title: 'Crianças e Adolescentes',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.'
    },
    {
      id: 3,
      nameIdentifier: 'idosos',
      title: 'Idosos',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.'
    }
  ];

  private subInterventions: SubIntervention[] = [
    {
      id: 1,
      interventionNameIdentifier: 'adultos',
      title: 'Ansiedade',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: ['Um ponto1', 'Outro ponto1', 'Ainda outro ponto1'],
    },
    {
      id: 2,
      interventionNameIdentifier: 'adultos',
      title: 'Depressão',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: ['Um ponto1', 'Outro ponto1', 'Ainda outro ponto1'],
    },
    {
      id: 3,
      interventionNameIdentifier: 'adultos',
      title: 'Perturbações alimentares',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: ['Um ponto1', 'Outro ponto1', 'Ainda outro ponto1'],
    },
    {
      id: 4,
      interventionNameIdentifier: 'adultos',
      title: 'Perturbações de personalidade',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: ['Um ponto1', 'Outro ponto1', 'Ainda outro ponto1'],
    },
    {
      id: 5,
      interventionNameIdentifier: 'criancas-e-adolescentes',
      title: 'Tipo 1',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: ['Um ponto1', 'Outro ponto1', 'Ainda outro ponto1'],
    }
  ];

  // TEAM
  public getTeamMembers(): TeamMember[] {
    return this.teamMembers.map(x => ({ id: x.id, nameIdentifier: x.nameIdentifier, fullName: x.fullName, role: x.role } as TeamMember));
  }

  public getTeamDetails(nameIdentifier: string): Observable<TeamMember> {
    return of(this.teamMembers.find(x => x.nameIdentifier === nameIdentifier));
  }

  // INTERVENTIONS
  public getInterventions(): Intervention[] {
    return this.interventions.map(x => ({ id: x.id, nameIdentifier: x.nameIdentifier, title: x.title, description: x.description } as Intervention));
  }

  public getSubInterventions(interventionName: string): Observable<SubIntervention[]> {
    return of(this.subInterventions.filter(x => x.interventionNameIdentifier === interventionName));
  }

  // SERVICES
  public getServices(): Service[] {
    return this.services.map(x => ({ id: x.id, nameIdentifier: x.nameIdentifier, iconName: x.iconName, title: x.title, description: x.description } as Service));
  }

  public getSubServices(serviceName: string): Observable<SubService[]> {
    return of(this.subServices.filter(x => x.serviceNameIdentifier === serviceName));
  }

  // CONTACTS
  public getTeamMemberContacts(): TeamMember[] {
    return this.teamMembers.map(x => ({ id: x.id, fullName: x.fullName, role: x.role, phone: x.phone, email: x.email } as TeamMember));
  }

}
