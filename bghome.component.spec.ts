import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BghomeComponent } from './bghome.component';

describe('BghomeComponent', () => {
  let component: BghomeComponent;
  let fixture: ComponentFixture<BghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
