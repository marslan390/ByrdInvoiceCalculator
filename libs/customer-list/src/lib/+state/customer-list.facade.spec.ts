import {NgModule} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {readFirst} from '@nrwl/angular/testing';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule, Store} from '@ngrx/store';

import {NxModule} from '@nrwl/angular';

import {CustomerListEffects} from './customer-list.effects';
import {CustomerListFacade} from './customer-list.facade';

import {customerListQuery} from './customer-list.selectors';
import {LoadCustomerList, CustomerListLoaded} from './customer-list.actions';
import {
  CustomerListState,
  Customer,
  initialState,
  reducer
} from './customer-list.reducer';

interface TestSchema {
  customerList: CustomerListState;
}

describe('CustomerListFacade', () => {
  let facade: CustomerListFacade;
  let store: Store<TestSchema>;
  let createCustomerList;

  beforeEach(() => {
    createCustomerList = (id: string, name = '', email =''): Customer => ({
      id,
      name: name || `name-${id}`,
      email: email || `email-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('customerList', reducer, {initialState}),
          EffectsModule.forFeature([CustomerListEffects])
        ],
        providers: [CustomerListFacade]
      })
      class CustomFeatureModule {
      }

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {
      }

      TestBed.configureTestingModule({imports: [RootModule]});

      store = TestBed.get(Store);
      facade = TestBed.get(CustomerListFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allCustomerList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allCustomerList$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CustomerListLoaded` to manually submit list for state management
     */
    it('allCustomerList$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allCustomerList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new CustomerListLoaded([
            createCustomerList('AAA'),
            createCustomerList('BBB')
          ])
        );

        list = await readFirst(facade.allCustomerList$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
