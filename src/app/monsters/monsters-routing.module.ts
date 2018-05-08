import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstersComponent } from './monsters.component';
import { MonsterComponent } from '../monster/monster.component';

const routes: Routes = [{path: 'monsters', component: MonstersComponent},
                        {path: 'monsters/:name', component: MonsterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonstersRoutingModule { }
