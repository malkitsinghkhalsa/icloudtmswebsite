import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
const courseRoute: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':id/view',
    component: DetailComponent
  },
  {
    path: 'new',
    component: AddComponent
  },
  {
    path: ':id/edit',
    component: UpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(courseRoute)],
  exports: [RouterModule],
})
export class CourseRoutingModule { }
