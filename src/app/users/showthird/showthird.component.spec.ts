import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowthirdComponent } from './showthird.component';

describe('ShowthirdComponent', () => {
  let component: ShowthirdComponent;
  let fixture: ComponentFixture<ShowthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
