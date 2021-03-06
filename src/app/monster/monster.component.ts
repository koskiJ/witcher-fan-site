import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private aRoute: ActivatedRoute, private monServ: MonstersService, private r: Router) { }

  ngOnInit() {
    this.aRoute.params.subscribe((params: Params) => {
      this.mName = params['name'];
    });

    window.scrollTo(0, 0);

    this.mName = this.mName[0].toUpperCase() + this.mName.substring(1);
    const m: Monster = this.monServ.getMonster(this.mName);
    this.mDesc = m.description;
  }

}
