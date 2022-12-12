import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



import { IQualifications, getQualificationsIdentifier } from '../qualifications.model';
import { EntityResponse } from 'src/app/models/response.model';
import { API_PREFIXES } from 'src/app/config/api-prefixs';

export type EntityResponseType = HttpResponse<IQualifications>;
export type EntityArrayResponseType = HttpResponse<EntityResponse<IQualifications[]>>;

@Injectable({ providedIn: 'root' })
export class QualificationsService {
  

  constructor(protected http: HttpClient) { }

}
