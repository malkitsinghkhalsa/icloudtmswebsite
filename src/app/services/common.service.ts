import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDepartment } from 'src/app/components/admin/master/department/department.model';
import { ICourse } from 'src/app/components/admin/master/course/course.model';

import { API_PREFIXES } from 'src/app/config/api-prefixs';
import { ApplicationConfigService } from 'src/app/config/application-config.service'

import { EntityResponse } from '../models/response.model';

import { Router } from '@angular/router';
export type EntityResponseType = HttpResponse<any>;
export type EntityArrayResponseType = HttpResponse<EntityResponse<any[]>>;



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private user = new BehaviorSubject<any>({});
  userStatusDetails = this.user.asObservable();
  private subject = new Subject<any>();
  private resenedOTPEvent = new BehaviorSubject<any>({});
  resendOtpEvent = this.resenedOTPEvent.asObservable();


  registerUserVCFunction = new EventEmitter();



  protected resourceUrl = this.applicationConfigService.getEndpointFor(API_PREFIXES.masterService);



  constructor(
    protected http: HttpClient,
    protected applicationConfigService: ApplicationConfigService,
    private snackBar: MatSnackBar,

    private router: Router
  ) { }

  getDepartment(req?: any): Observable<HttpResponse<EntityResponse<IDepartment[]>>> {
    return this.http.get<HttpResponse<EntityResponse<IDepartment[]>>>(`${this.resourceUrl}/GetDepartment`, { observe: 'response' })
      .pipe(map((res: any) => res));
  }


  getCourse(req?: any): Observable<HttpResponse<EntityResponse<ICourse[]>>> {
    return this.http.get<HttpResponse<EntityResponse<ICourse[]>>>(`${this.resourceUrl}/GetCourse`, { observe: 'response' })
      .pipe(map((res: any) => res));
  }





}
