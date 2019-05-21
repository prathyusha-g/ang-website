import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCardComponent } from './rating-card.component';

describe('RatingCardComponent', () => {
  let component: RatingCardComponent;
  let fixture: ComponentFixture<RatingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
