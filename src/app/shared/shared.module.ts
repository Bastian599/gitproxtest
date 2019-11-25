import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAccordionModule, NbButtonModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbAccordionModule,
    NbButtonModule,
    NbIconModule
  ],
  exports: [NbAccordionModule, NbButtonModule, NbIconModule]
})
export class SharedModule { }
