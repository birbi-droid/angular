import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMerchaComponent } from './productos-mercha.component';

describe('ProductosMerchaComponent', () => {
  let component: ProductosMerchaComponent;
  let fixture: ComponentFixture<ProductosMerchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosMerchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMerchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
