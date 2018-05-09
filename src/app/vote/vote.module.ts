import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VoteRoutingModule,
    ChartsModule
  ],
  declarations: [VoteComponent, ChartComponent]
})
export class VoteModule { }
