import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRoute: Routes = [
    {
        path: '',
        component: DashboardComponent,
        // canActivate: [UserRouteAccessService],
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoute)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
