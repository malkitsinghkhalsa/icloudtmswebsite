import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const profileRoute: Routes = [
    {
        path: '',
        component: ProfileComponent,
        // canActivate: [UserRouteAccessService],
    }
];

@NgModule({
    imports: [RouterModule.forChild(profileRoute)],
    exports: [RouterModule],
})
export class ProfileRoutingModule { }
