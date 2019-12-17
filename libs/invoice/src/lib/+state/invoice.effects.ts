import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, withLatestFrom } from 'rxjs/operators';
import {
  LoadOrderList,
  OrderListLoaded,
  OrderListLoadError,
  InvoiceActionTypes
} from './invoice.actions';
import { OrderService } from '../services/order.service';
import { InvoiceFacade } from './invoice.facade';
import { RemoveLoadingBar } from '@byrd/shared';
import { Store } from '@ngrx/store';
import { InvoiceState } from './invoice.reducer';

@Injectable()
export class InvoiceEffects {
  @Effect() loadOrderList$ = this.actions$.pipe(
    ofType<LoadOrderList>(InvoiceActionTypes.LoadOrderList),
    withLatestFrom(this.facade.config$),
    concatMap(([_, config]) =>
      this.orderService.getOrders(config.filters).pipe(
        map(results => {
          this.store.dispatch(new RemoveLoadingBar());
          return new OrderListLoaded(results);
        }),
        catchError(error => {
          const remove =new RemoveLoadingBar();
          this.store.dispatch(new RemoveLoadingBar())
          return of(new OrderListLoadError(error));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private facade: InvoiceFacade,
    private store: Store<InvoiceState>
  ) {}
}
