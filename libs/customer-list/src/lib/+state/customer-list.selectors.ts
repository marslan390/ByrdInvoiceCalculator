import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CUSTOMERLIST_FEATURE_KEY,
  CustomerListState
} from './customer-list.reducer';

// Lookup the 'CustomerList' feature state managed by NgRx
const getCustomerListState = createFeatureSelector<CustomerListState>(
  CUSTOMERLIST_FEATURE_KEY
);

const getLoaded = createSelector(
  getCustomerListState,
  (state: CustomerListState) => state.loaded
);
const getError = createSelector(
  getCustomerListState,
  (state: CustomerListState) => state.error
);

const getAllCustomerList = createSelector(
  getCustomerListState,
  getLoaded,
  (state: CustomerListState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCustomerListState,
  (state: CustomerListState) => state.selectedId
);
const getSelectedCustomerList = createSelector(
  getAllCustomerList,
  getSelectedId,
  (customerList, id) => {
    const result = customerList.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const customerListQuery = {
  getLoaded,
  getError,
  getAllCustomerList,
  getSelectedCustomerList
};
