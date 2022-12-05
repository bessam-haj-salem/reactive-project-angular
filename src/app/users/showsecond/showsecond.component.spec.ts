import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsecondComponent } from './showsecond.component';

describe('ShowsecondComponent', () => {
  let component: ShowsecondComponent;
  let fixture: ComponentFixture<ShowsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
