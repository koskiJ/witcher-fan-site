import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './characters/characters.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { MonstersModule } from './monsters/monsters.module';
import { CharactersRoutingModule } from './characters/characters-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { VoteModule } from './vote/vote.module';
import { CharactersService } from './characters.service';
import { MonstersService } from './monsters.service';
import { VotesService } from './votes.service';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainpageModule,
    CharactersModule,
    MonstersModule,
    VoteModule,
    AppRoutingModule
  ],
  providers: [CharactersService,
              MonstersService,
              VotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
