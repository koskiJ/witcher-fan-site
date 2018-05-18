import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { MonstersService } from './monsters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Witcher';

  constructor(private charServ: CharactersService, private monServ: MonstersService) {}
  ngOnInit(): void {
    this.charServ.updateChars();
    this.monServ.updateMonsters();
  }
}
