import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-showthird',
  templateUrl: './showthird.component.html',
  styleUrls: ['./showthird.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class ShowthirdComponent implements OnInit {

  constructor(public dummyService: DummyService) { }

  ngOnInit(): void {
  }

  third() {
    console.log("event in show third");
  }
  logOnChangedetection() {
    console.log("show third called");
    return true
  }



}
