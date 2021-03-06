import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miles-kilos',
  templateUrl: './miles-kilos.component.html',
  styleUrls: ['./miles-kilos.component.css']
})
export class MilesKilosComponent implements OnInit {

  clickMessage: number;
  constructor() { }

  milesToKilos(kilometres: number) {
    this.clickMessage = kilometres * 1.609;
  }

  kilosToMiles(miles: number) {
    this.clickMessage = miles * 0.609;
  }

  ngOnInit() {
  }

}