import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { InvoicePartialState } from './invoice.reducer';
import { invoiceQuery } from './invoice.selectors';
import { LoadOrderList, UpdateConfigFitlerDateRange, UpdateConfigFilterCustomer } from './invoice.actions';
import { DateRange, AddLoadingBar } from '@byrd/shared';
import { Customer } from '@byrd/customer-list';

@Injectable()
export class InvoiceFacade {
  loaded$ = this.store.pipe(select(invoiceQuery.getLoaded));
  config$ = this.store.pipe(select(invoiceQuery.getConfig));
  allOrders$ = this.store.pipe(select(invoiceQuery.getAllOrders));
  getInvoiceSummary$ = this.store.pipe(select(invoiceQuery.getInvoiceSummary));

  constructor(private store: Store<InvoicePartialState>) {}

  loadOrders = ()  => {
    this.store.dispatch(new AddLoadingBar());
    this.store.dispatch(new LoadOrderList());
  }

  updateConfigDateRange = (dateRange: DateRange) => this.store.dispatch(new UpdateConfigFitlerDateRange(dateRange));

  updateConfigFilterCustomer = (customer: Customer) => this.store.dispatch(new UpdateConfigFilterCustomer(customer));
}
