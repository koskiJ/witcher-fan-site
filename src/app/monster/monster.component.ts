import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MonstersService } from '../monsters.service';
import { Monster } from '../monster.interface';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  mName: string;
  mDesc;

  constructor(private aRoute: ActivatedRoute, private monServ: MonstersService) { }

  ngOnInit() {
    this.aRoute.params.subscribe((params: Params) => {
      this.mName = params['name'];
    });

    this.mName = this.mName[0].toUpperCase() + this.mName.substring(1);
    const m: Monster = this.monServ.getMonster(this.mName);
    this.mDesc = m.description;
  }

}
