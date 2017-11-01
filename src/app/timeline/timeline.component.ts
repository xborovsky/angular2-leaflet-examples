import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  private minVal:number = 360;
  private maxVal:number = 360 + (3 * 60);
  private step:number = 15;
  private intervalSpeed:number = 500;
  private currentVal:number = this.minVal;
  private interval = null;

  @Output()
  valueChanged:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.currentVal += this.step;
      if (this.currentVal > this.maxVal) {
        this.reset();
      }
      this.valueChanged.emit((this.currentVal - this.minVal) / this.step);
    }, this.intervalSpeed);
  }

  reset() {
    clearInterval(this.interval);
    this.currentVal = this.minVal;
  }

  updateOverlay(val) {
    this.valueChanged.emit((val - this.minVal) / this.step);
  }

}
