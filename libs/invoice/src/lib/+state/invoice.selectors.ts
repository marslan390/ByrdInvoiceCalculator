import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INVOICE_FEATURE_KEY, InvoiceState } from './invoice.reducer';
import { DateRange } from '@byrd/shared';

// Lookup the 'Invoice' feature state managed by NgRx
const getInvoiceState = createFeatureSelector<InvoiceState>(
  INVOICE_FEATURE_KEY
);

const getLoaded = createSelector(
  getInvoiceState,
  (state: InvoiceState) => state.loaded
);

const getError = createSelector(
  getInvoiceState,
  (state: InvoiceState) => state.error
);

const getAllOrders = createSelector(
  getInvoiceState,
  getLoaded,
  (state: InvoiceState, isLoaded) => {
    return isLoaded ? state.orders : [];
  }
);

const getConfig = createSelector(
  getInvoiceState,
  (state: InvoiceState) => state.config
);

const getInvoiceSummary = createSelector(
  getInvoiceState,
  getLoaded,
  (state: InvoiceState, isLoaded) => {
    return isLoaded ? state.invoiceSummary : null;
  }
);

export const invoiceQuery = {
  getLoaded,
  getError,
  getAllOrders,
  getConfig,
  getInvoiceSummary
};
