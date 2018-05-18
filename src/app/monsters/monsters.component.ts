import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { MonstersService } from '../monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  monsters = [];

  constructor(private monServ: MonstersService) { }

  ngOnInit() {
    this.monsters = this.monServ.getMonsters();
  }

}
