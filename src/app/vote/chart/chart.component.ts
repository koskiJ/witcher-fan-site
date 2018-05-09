import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public pieChartLabels: string[] = ['Geralt', 'Yennefer', 'Dandelion'];
  public pieChartData: number[] = [3, 1, 2];
  public pieChartType: string = 'pie';
  votes: number[];
  @ViewChild(BaseChartDirective) chart;

  constructor() { }

  ngOnInit() {
    this.votes = this.pieChartData;
  }

  refresh(name: string) {
    let found: boolean = false;

    for (let i = 0; i < this.pieChartLabels.length; i++) {
        if (this.pieChartLabels[i] === name) {
            this.pieChartData[i]++;
            found = true;
            console.log(this.pieChartLabels[i], 'found', this.pieChartData[i]);
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
