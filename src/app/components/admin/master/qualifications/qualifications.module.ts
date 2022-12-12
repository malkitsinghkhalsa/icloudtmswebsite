import { NgModule } from '@angular/core';

import { QualificationsComponent } from './list/qualifications.component';
import { QualificationsDetailComponent } from './detail/qualifications-detail.component';
import { QualificationsUpdateComponent } from './update/qualifications-update.component';
import { QualificationsRoutingModule } from './route/qualifications-routing.module';

@NgModule({
    imports: [ QualificationsRoutingModule],
    declarations: [
        QualificationsComponent,
        QualificationsDetailComponent,
        QualificationsUpdateComponent,
    ]
})
export class QualificationsModule { }
