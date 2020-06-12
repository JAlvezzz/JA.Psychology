import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from '../services/general.service';
import { TeamMember } from '../models/team-member';

@Injectable()
export class TeamResolver implements Resolve<Observable<any>> {

  constructor(private generalService: GeneralService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeamMember> {
    const id = route.params.id;
    return this.generalService.getTeamDetails(id);
  }

}
