import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AceRoutingModule } from './ace-routing.module';
import { AceComponent } from './ace.component';


@NgModule({
  declarations: [
    AceComponent
  ],
  imports: [
    CommonModule,
    AceRoutingModule
  ]
})
export class AceModule { }
