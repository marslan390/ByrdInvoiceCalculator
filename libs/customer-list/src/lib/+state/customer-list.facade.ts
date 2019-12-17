import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CustomerListPartialState } from './customer-list.reducer';
import { customerListQuery } from './customer-list.selectors';
import { LoadCustomerList } from './customer-list.actions';

@Injectable()
export class CustomerListFacade {
  loaded$ = this.store.pipe(select(customerListQuery.getLoaded));
  allCustomerList$ = this.store.pipe(
    select(customerListQuery.getAllCustomerList)
  );
  selectedCustomerList$ = this.store.pipe(
    select(customerListQuery.getSelectedCustomerList)
  );

  constructor(private store: Store<CustomerListPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCustomerList());
  }
}
