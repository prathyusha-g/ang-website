import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdiscComponent } from './getdisc.component';

describe('GetdiscComponent', () => {
  let component: GetdiscComponent;
  let fixture: ComponentFixture<GetdiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
