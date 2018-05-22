import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { CharactersService } from '../characters.service';
import { VotesService } from '../votes.service';

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
  canVote: boolean = false;
  characters: string[] = [];
  charRegEx = '';
  @ViewChild(ChartComponent) child;

  constructor(private charServ: CharactersService, private vServ: VotesService) { }

  ngOnInit() {
    const array = <Character[]> this.charServ.getChars();
    for (const c of array) {
      this.characters.push(c.name);
      this.charRegEx += c.name + '|';
    }

    this.charRegEx = this.charRegEx.substring(0, this.charRegEx.length - 1);
    this.canVote = this.vServ.voteStatus();
  }

  vote(name: string) {
    console.log(name);
    this.child.refresh(name);
    this.vServ.addVote(name);
    this.vServ.hasVoted();
    this.canVote = this.vServ.voteStatus();
    return false;
  }

}
