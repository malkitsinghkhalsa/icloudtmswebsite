import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './components/layouts/adminlayout/adminlayout.component';
import { OuterlayoutComponent } from './components/layouts/outerlayout/outerlayout.component';
const routes: Routes = [
  {
    path: '',
    component: OuterlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/outer/outer.module').then(
          (m) => m.OuterModule
        ),
      },
    ]

  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
  //  canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./components/admin/admin.module')
          .then(m => m.AdminModule)
      }
    ]
  },
  // 404 paths
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  // ...errorRoute  /** Error routes */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
