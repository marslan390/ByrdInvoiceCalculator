import { Action } from '@ngrx/store';
import { Order } from '@byrd/order';
import { DateRange } from '@byrd/shared';
import { Customer } from '@byrd/customer-list';

export enum InvoiceActionTypes {
  LoadOrderList = '[Invoice] Load Order List',
  OrderListLoaded = '[Invoice] Order List Loaded',
  OrderListLoadError = '[Invoice] Order List Load Error',
  UpdateConfigFitlerDateRange = '[Invoice] Update Config Filter Date Range',
  UpdateConfigFilterCustomer = '[Invoice] Update Config Filter Customer Id'
}

export class LoadOrderList implements Action {
  readonly type = InvoiceActionTypes.LoadOrderList;
}

export class OrderListLoadError implements Action {
  readonly type = InvoiceActionTypes.OrderListLoadError;
  constructor(public payload: any) {}
}

export class OrderListLoaded implements Action {
  readonly type = InvoiceActionTypes.OrderListLoaded;
  constructor(public payload: Order[]) {}
}

export class UpdateConfigFitlerDateRange implements Action {
  readonly type = InvoiceActionTypes.UpdateConfigFitlerDateRange;
  constructor(public dateRange: DateRange) {}
}

export class UpdateConfigFilterCustomer implements Action {
  readonly type = InvoiceActionTypes.UpdateConfigFilterCustomer;
  constructor(public customer: Customer) {}
}

export type InvoiceAction = LoadOrderList | OrderListLoaded | OrderListLoadError | UpdateConfigFitlerDateRange | UpdateConfigFilterCustomer;
