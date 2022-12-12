import { NgModule } from '@angular/core';

import { DepartmentComponent } from './list/department.component';
import { DepartmentDetailComponent } from './detail/department-detail.component';
import { DepartmentUpdateComponent } from './update/department-update.component';
import { DepartmentRoutingModule } from './route/department-routing.module';
import { ManageComponent } from './manage/manage.component';


@NgModule({
    imports: [ DepartmentRoutingModule],
    declarations: [DepartmentComponent, DepartmentDetailComponent, DepartmentUpdateComponent, ManageComponent]
})
export class DepartmentModule { }
