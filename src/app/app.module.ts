import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { MonstersModule } from './monsters/monsters.module';
import { CharactersRoutingModule } from './characters/characters-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainpageModule,
    CharactersModule,
    MonstersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
