import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votedPerson: string;
  answered: boolean = false;
  @ViewChild(ChartComponent) child;

  constructor() { }

  ngOnInit() {
  }

  vote(name: string) {
    console.log(name);
    this.child.refresh(name);
    this.answered = true;
    return false;
  }

}
