import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';

@NgModule({
  imports: [
    CommonModule,
    MainpageRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
