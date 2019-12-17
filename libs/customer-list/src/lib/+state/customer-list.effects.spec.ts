import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CustomerListEffects } from './customer-list.effects';
import { LoadCustomerList, CustomerListLoaded } from './customer-list.actions';

describe('CustomerListEffects', () => {
  let actions: Observable<any>;
  let effects: CustomerListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CustomerListEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CustomerListEffects);
  });

  describe('loadCustomerList$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCustomerList() });
      expect(effects.loadCustomerList$).toBeObservable(
        hot('-a-|', { a: new CustomerListLoaded([]) })
      );
    });
  });
});
