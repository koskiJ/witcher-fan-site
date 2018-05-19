import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { CharactersService } from '../characters.service';

interface Character {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votedPerson: string;
  answered: boolean = false;
  characters: string[] = [];
  charRegEx = '';
  @ViewChild(ChartComponent) child;

  constructor(private charServ: CharactersService) { }

  ngOnInit() {
    const array = <Character[]> this.charServ.getChars();
    for (const c of array) {
      this.characters.push(c.name);
      this.charRegEx += c.name + '|';
    }

    this.charRegEx = this.charRegEx.substring(0, this.charRegEx.length - 1);
  }

  vote(name: string) {
    console.log(name);
    this.child.refresh(name);
    this.answered = true;
    return false;
  }

}
