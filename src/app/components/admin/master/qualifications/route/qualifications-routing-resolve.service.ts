import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IQualifications, Qualifications } from '../qualifications.model';
import { QualificationsService } from '../service/qualifications.service';

@Injectable({ providedIn: 'root' })
export class QualificationsRoutingResolveService implements Resolve<IQualifications> {
  constructor(protected service: QualificationsService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IQualifications> | Observable<never> {
    const id = route.params['id'];
    if (id) {

    }
    return of(new Qualifications());
  }
}
