import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'course',
        loadChildren: () => import('./course/course.module')
            .then(m => m.CourseModule),
    },
    {
        path: 'department',
        loadChildren: () => import('./department/department.module')
            .then(m => m.DepartmentModule),
    },
    {
        path: 'qualifications',
        loadChildren: () => import('./qualifications/qualifications.module')
            .then(m => m.QualificationsModule),
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }
