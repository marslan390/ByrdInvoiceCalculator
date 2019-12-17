import { Action } from '@ngrx/store';
import { Customer } from './customer-list.reducer';

export enum CustomerListActionTypes {
  LoadCustomerList = '[CustomerList] Load CustomerList',
  CustomerListLoaded = '[CustomerList] CustomerList Loaded',
  CustomerListLoadError = '[CustomerList] CustomerList Load Error'
}

export class LoadCustomerList implements Action {
  readonly type = CustomerListActionTypes.LoadCustomerList;
}

export class CustomerListLoadError implements Action {
  readonly type = CustomerListActionTypes.CustomerListLoadError;
  constructor(public payload: any) {}
}

export class CustomerListLoaded implements Action {
  readonly type = CustomerListActionTypes.CustomerListLoaded;
  constructor(public payload: Customer[]) {}
}

export type CustomerListAction =
  | LoadCustomerList
  | CustomerListLoaded
  | CustomerListLoadError;

export const fromCustomerListActions = {
  LoadCustomerList,
  CustomerListLoaded,
  CustomerListLoadError
};
