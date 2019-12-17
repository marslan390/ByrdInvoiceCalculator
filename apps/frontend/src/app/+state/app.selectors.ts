import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_FEATURE_KEY, AppState } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
const getAppState = createFeatureSelector<AppState>(APP_FEATURE_KEY);

const showLoading = createSelector(
  getAppState,
  (state: AppState) => state.loading.length > 0
);

export const appQuery = {
  showLoading
};
