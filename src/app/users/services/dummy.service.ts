import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  public dummy$ = interval(2000);
  
}
