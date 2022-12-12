import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSingupComponent } from './admin-singup/admin-singup.component';
import { AdminResetpwdComponent } from './admin-resetpwd/admin-resetpwd.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        //redirectTo: 'admin/login',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent,
    },
    {
        path: 'admin/login',
        component: AdminLoginComponent,
    },
    {
        path: 'admin/singup',
        component: AdminSingupComponent,
    },
    {
        path: 'admin/resetpwd',
        component: AdminResetpwdComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OuterRoutingModule { }
