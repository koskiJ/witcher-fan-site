import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  mName: string;

  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.params.subscribe((params: Params) => {
      this.mName = params['name'];
    });
  }

}
