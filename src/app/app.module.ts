import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './characters/characters.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { MonstersModule } from './monsters/monsters.module';
import { CharactersRoutingModule } from './characters/characters-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MainpageModule,
    CharactersModule,
    MonstersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
