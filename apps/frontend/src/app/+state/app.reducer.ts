import { GlobalAction, GlobalActionTypes } from '@byrd/shared';

export const APP_FEATURE_KEY = 'app';

/**
 * Interface for the 'App' data used in
 *  - AppState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */

export interface AppState {
  loading: boolean[];  // To handle loading for multiple different call
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppState;
}

export const initialState: AppState = {
  loading: []
};

export function reducer(
  state: AppState = initialState,
  action: GlobalAction
): AppState {
  switch (action.type) {
    case GlobalActionTypes.AddLoadingBar: {
      state = {
        ...state,
        loading: [...state.loading, true]
      }
      break;
    }
    case GlobalActionTypes.RemoveLoadingBar: {
      state = {
        ...state,
        loading: [...state.loading.slice(0, -1)]
      }
      break;
    }
  }
  return state;
}
