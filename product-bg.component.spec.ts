import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBgComponent } from './product-bg.component';

describe('ProductBgComponent', () => {
  let component: ProductBgComponent;
  let fixture: ComponentFixture<ProductBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
