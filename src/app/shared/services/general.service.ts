import { Injectable } from '@angular/core';
import { TeamMember } from '../models/team-member';
import { Observable, of } from 'rxjs';
import { Specialty } from '../models/specialty';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  private teamMembers: TeamMember[] = [
    {
      id: 1,
      nameIdentifier: 'josefina-queiroz',
      fullName: 'Josefina Queiroz',
      role: 'Psicóloga Clínica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest1',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null
    },
    {
      id: 2,
      nameIdentifier: 'ermelinda-cruz-dos-santos',
      fullName: 'Ermelinda Cruz dos Santos',
      role: 'Psicóloga Clínica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest2',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null
    },
    {
      id: 3,
      nameIdentifier: 'vitorina-jesus-da-silva-do-o',
      fullName: 'Vitorina Jesus da Silva do Ó',
      role: 'Psicoterapeuta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
      photo: 'PhotoTest3',
      academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
      linkedIn: null,
      facebook: null,
      instagram: null
    }
  ];

  private specialties: Specialty[] = [
    {
      id: 1,
      nameIdentifier: 'psicoterapia-1',
      title: 'Psicoterapia 1',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 2,
      nameIdentifier: 'psicoterapia-2',
      title: 'Psicoterapia 2',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 3,
      nameIdentifier: 'psicoterapia-3',
      title: 'Psicoterapia 3',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 4,
      nameIdentifier: 'psicoterapia-4',
      title: 'Psicoterapia 4',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 5,
      nameIdentifier: 'psicoterapia-5',
      title: 'Psicoterapia 5',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 6,
      nameIdentifier: 'psicoterapia-6',
      title: 'Psicoterapia 6',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 7,
      nameIdentifier: 'psicoterapia-7',
      title: 'Psicoterapia 7',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
    {
      id: 8,
      nameIdentifier: 'psicoterapia-8',
      title: 'Psicoterapia 8',
      description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
      bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
      bulletPoints2: null
    },
  ];

  // TEAM
  public getTeamMembers(): TeamMember[] {
    return this.teamMembers.map(x => ({ id: x.id, nameIdentifier: x.nameIdentifier, fullName: x.fullName, role: x.role} as TeamMember));
  }

  public getTeamDetails(nameIdentifier: string): Observable<TeamMember> {
    return of(this.teamMembers.find(x => x.nameIdentifier === nameIdentifier));
  }

  // SPECIALTIES
  public getSpecialties(): Specialty[] {
    return this.specialties.map(x => ({ id: x.id, nameIdentifier: x.nameIdentifier, title: x.title, description: x.description} as Specialty));
  }

  public getSpecialtiesDetails(nameIdentifier: string): Observable<Specialty> {
    return of(this.specialties.find(x => x.nameIdentifier === nameIdentifier));
  }

}
