import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miles-kilos',
  templateUrl: './miles-kilos.component.html',
  styleUrls: ['./miles-kilos.component.css']
})
export class MilesKilosComponent implements OnInit {

  clickMessage: string = "";
  constructor() { }

  onClickMe(myMessage: string) {
    this.clickMessage = myMessage;
  }

  ngOnInit() {
  }

}