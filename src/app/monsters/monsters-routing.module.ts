import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstersComponent } from './monsters.component';

const routes: Routes = [{path: 'monsters', component: MonstersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonstersRoutingModule { }
