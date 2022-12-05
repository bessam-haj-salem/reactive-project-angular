import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showfirst',
  templateUrl: './showfirst.component.html',
  styleUrls: ['./showfirst.component.scss']
})
export class ShowfirstComponent implements OnInit, OnChanges{

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("im component show first");
  }
  first() {
    console.log("event in show first");
  }
  logOnChangedetection() {
    console.log("show first called");
    return true
  }

}
