import { InvoiceAction, InvoiceActionTypes } from './invoice.actions';
import { Order, OrderFilter } from '@byrd/order';
import { DateRange } from '@byrd/shared';

export const INVOICE_FEATURE_KEY = 'invoice';

/**
 * Interface for the 'Invoice' data used in
 *  - InvoiceState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface InvoiceSummary {
  dateRange: DateRange;
  totalDays: number;
  totalAmount: number;
  orders: number;
}

export interface InvoiceConfig {
  filters: OrderFilter;
}

export interface InvoiceState {
  orders: Order[];
  config: InvoiceConfig;
  invoiceSummary: InvoiceSummary;
  loaded: boolean;
  error?: any;
}

export interface InvoicePartialState {
  readonly [INVOICE_FEATURE_KEY]: InvoiceState;
}

export const initialState: InvoiceState = {
  orders: [],
  config: { filters: { customer: null, start_date: null, end_date: null } },
  invoiceSummary: {
    dateRange: { startDate: null, endDate: null },
    orders: 0,
    totalAmount: 0,
    totalDays: 0
  },
  loaded: false
};

export function reducer(
  state: InvoiceState = initialState,
  action: InvoiceAction
): InvoiceState {
  switch (action.type) {
    case InvoiceActionTypes.OrderListLoaded: {
      const filters = state.config.filters;
      let totalDays = 0;
      if (filters.start_date && filters.end_date) {
        const diffTime = Math.abs(filters.end_date.getTime() - filters.start_date.getTime());
        totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
      state = {
        ...state,
        orders: action.payload,
        invoiceSummary: {
          ...state.invoiceSummary,
          dateRange: {
            startDate: filters.start_date,
            endDate: filters.end_date
          },
          orders: action.payload ? action.payload.length : 0,
          totalDays: totalDays,
          totalAmount: action.payload
            ? action.payload.reduce(
                (a, b) =>
                  a + (parseFloat(b['charge_customer']['total_price']) || 0),
                0
              )
            : 0
        },
        loaded: true
      };
      break;
    }
    case InvoiceActionTypes.UpdateConfigFitlerDateRange: {
      state = {
        ...state,
        config: {
          ...state.config,
          filters: {
            ...state.config.filters,
            start_date: action.dateRange.startDate,
            end_date: action.dateRange.endDate
          }
        }
      };
      break;
    }
    case InvoiceActionTypes.UpdateConfigFilterCustomer: {
      state = {
        ...state,
        config: {
          ...state.config,
          filters: {
            ...state.config.filters,
            customer: action.customer
          }
        }
      };
      break;
    }
  }
  return state;
}
