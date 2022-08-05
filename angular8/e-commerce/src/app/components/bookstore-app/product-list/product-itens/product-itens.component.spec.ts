import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItensComponent } from './product-itens.component';

describe('ProductItensComponent', () => {
  let component: ProductItensComponent;
  let fixture: ComponentFixture<ProductItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
