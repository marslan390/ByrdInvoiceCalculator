import { Injectable } from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { of } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import { CustomerListPartialState } from './customer-list.reducer';
import {
  LoadCustomerList,
  CustomerListLoaded,
  CustomerListLoadError,
  CustomerListActionTypes
} from './customer-list.actions';
import {ApiService} from "../../../../api/src/lib/api.service";

@Injectable()
export class CustomerListEffects {
  @Effect() loadCustomerList$ = this.actions$.pipe(
    ofType<LoadCustomerList>(CustomerListActionTypes.LoadCustomerList),
    mergeMap(
      () => this.api.get('customers').pipe(
          map(results =>
            new CustomerListLoaded(results)
          ),
          catchError(error =>
            of(new CustomerListLoadError(error))
          )
        )
    )
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CustomerListPartialState>,
    private api: ApiService
  ) {}
}
