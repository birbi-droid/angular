import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMerchaComponent } from './producto-mercha.component';

describe('ProductoMerchaComponent', () => {
  let component: ProductoMerchaComponent;
  let fixture: ComponentFixture<ProductoMerchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoMerchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoMerchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
