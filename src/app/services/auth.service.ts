import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ApplicationConfigService } from '../config/application-config.service';
import { API_PREFIXES } from 'src/app/config/api-prefixs';

import { IAdminSendOTP } from '../models/request';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  protected resourceUrl = this.applicationConfigService.getEndpointFor(API_PREFIXES.authService);


  constructor(private http: HttpClient,
    private applicationConfigService: ApplicationConfigService,
   
  ) {

  }


  adminLogin(data: any) {
    return this.http
      .post<any>(`${this.resourceUrl}/Admin/authenticate`, data)
      .pipe(map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        if (user.model) {
          if (user?.model?.access_token) {


          } else {
            throw user
          }
          return user;
        }
      })
      );
  }


}
