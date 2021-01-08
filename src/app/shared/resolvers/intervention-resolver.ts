import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Injectable()
export class InterventionResolver implements Resolve<Observable<any>> {

  constructor(private generalService: GeneralService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const interventionName = route.params.nameIdentifier;
    return this.generalService.getSubInterventions(interventionName);
  }

}
