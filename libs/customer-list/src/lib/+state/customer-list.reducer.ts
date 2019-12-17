import {
  CustomerListAction,
  CustomerListActionTypes
} from './customer-list.actions';

export const CUSTOMERLIST_FEATURE_KEY = 'customerList';

/**
 * Interface for the 'CustomerList' data used in
 *  - CustomerListState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface CustomerListState {
  list: Customer[]; // list of CustomerList; analogous to a sql normalized table
  selectedId?: string | number; // which CustomerList record has been selected
  loaded: boolean; // has the CustomerList list been loaded
  error?: any; // last none error (if any)
}

export interface CustomerListPartialState {
  readonly [CUSTOMERLIST_FEATURE_KEY]: CustomerListState;
}

export const initialState: CustomerListState = {
  list: [],
  loaded: false
};

export function reducer(
  state: CustomerListState = initialState,
  action: CustomerListAction
): CustomerListState {
  switch (action.type) {
    case CustomerListActionTypes.CustomerListLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
