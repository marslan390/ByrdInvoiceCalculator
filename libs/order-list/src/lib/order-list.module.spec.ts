import { async, TestBed } from '@angular/core/testing';
import { OrderListModule } from '@byrd/order-list';

describe('OrderListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderListModule).toBeDefined();
  });
});
