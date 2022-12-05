import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showsecond',
  templateUrl: './showsecond.component.html',
  styleUrls: ['./showsecond.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  second() {
    console.log("event in show second");
  }
  logOnChangedetection() {
    console.log("show second called");
    return true
  }

}
