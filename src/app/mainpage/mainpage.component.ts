import { Component, OnInit } from '@angular/core';
import { trigger, query, transition, group, style, animate } from '@angular/animations';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  animations: [
    trigger('bgImgTrigger',
    [transition(':enter', [style({opacity: '0'}), animate('400ms ease-out')])],
  )
]
})
export class MainpageComponent implements OnInit {
  state: string = 'none';

  constructor() { }

  ngOnInit() {
  }

}
