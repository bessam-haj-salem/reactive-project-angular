import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfirstComponent } from './showfirst.component';

describe('ShowfirstComponent', () => {
  let component: ShowfirstComponent;
  let fixture: ComponentFixture<ShowfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
