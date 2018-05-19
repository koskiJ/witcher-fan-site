import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { VotesService } from '../../votes.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  @ViewChild(BaseChartDirective) chart;

  constructor(private votesServ: VotesService) { }

  ngOnInit() {
    const voteData = this.votesServ.getVotes();
    for (const v of voteData) {
      this.pieChartLabels.push(v.name);
      this.pieChartData.push(v.votes);
    }
  }

  refresh(name: string) {
    let found: boolean = false;

    for (let i = 0; i < this.pieChartLabels.length; i++) {
        if (this.pieChartLabels[i] === name) {
            this.pieChartData[i]++;
            found = true;
            break;
        }
    }

    if (found === false) {
        this.pieChartLabels.push(name);
        this.pieChartData.push(1);
    }

    this.chart.chart.update();
  }

}
