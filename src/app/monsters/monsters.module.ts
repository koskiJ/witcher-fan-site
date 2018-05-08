import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersRoutingModule } from './monsters-routing.module';
import { MonstersComponent } from './monsters.component';
import { MonsterComponent } from '../monster/monster.component';

@NgModule({
  imports: [
    CommonModule,
    MonstersRoutingModule
  ],
  declarations: [MonstersComponent, MonsterComponent]
})
export class MonstersModule { }
