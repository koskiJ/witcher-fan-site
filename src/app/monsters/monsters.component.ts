import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  monsters = [{'name': 'foglet', 'description': 'Monster'},
              {'name': 'harpy', 'description': 'Monster'}];

  constructor() { }

  ngOnInit() {
  }

}
