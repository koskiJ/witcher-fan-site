import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';

@NgModule({
  imports: [
    CommonModule,
    MainpageRoutingModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
