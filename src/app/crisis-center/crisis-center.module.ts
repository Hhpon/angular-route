import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  imports: [CommonModule, CrisisCenterRoutingModule, FormsModule],
})
export class CrisisCenterModule {}
