import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
