import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { QualificationsComponent } from '../list/qualifications.component';
import { QualificationsDetailComponent } from '../detail/qualifications-detail.component';
import { QualificationsUpdateComponent } from '../update/qualifications-update.component';
import { QualificationsRoutingResolveService } from './qualifications-routing-resolve.service';

const qualificationsRoute: Routes = [
  {
    path: '',
    component: QualificationsComponent,
    // canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: QualificationsDetailComponent,
    resolve: {
      qualifications: QualificationsRoutingResolveService,
    },
    // canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: QualificationsUpdateComponent,
    resolve: {
      qualifications: QualificationsRoutingResolveService,
    },
    // canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: QualificationsUpdateComponent,
    resolve: {
      qualifications: QualificationsRoutingResolveService,
    },
    // canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(qualificationsRoute)],
  exports: [RouterModule],
})
export class QualificationsRoutingModule { }
