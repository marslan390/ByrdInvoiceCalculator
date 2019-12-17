import { async, TestBed } from '@angular/core/testing';
import { CustomerListModule } from './customer-list.module';

describe('CustomerListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerListModule).toBeDefined();
  });
});
