import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [{path: '', redirectTo: 'main', pathMatch: 'full'},
                        {path: '**', component: NotfoundComponent}];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
