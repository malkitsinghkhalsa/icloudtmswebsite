import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
    imports: [CourseRoutingModule],
    declarations: [
        ListComponent,
        DetailComponent,
        UpdateComponent,
        AddComponent
    ]
})
export class CourseModule { }
