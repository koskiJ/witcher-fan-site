import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Witcher';

  constructor(private charServ: CharactersService) {}
  ngOnInit(): void {
    this.charServ.updateChars();
  }
}
