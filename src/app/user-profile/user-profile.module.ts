import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { Accordion1Component } from './accordion1/accordion1.component';
import { Accordion2Component } from './accordion2/accordion2.component';
import { Accordion3Component } from './accordion3/accordion3.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserProfileComponent, Accordion1Component, Accordion2Component, Accordion3Component],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
