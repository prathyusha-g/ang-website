import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProDataComponent } from './add-pro-data.component';

describe('AddProDataComponent', () => {
  let component: AddProDataComponent;
  let fixture: ComponentFixture<AddProDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
