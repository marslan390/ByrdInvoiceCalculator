import { CustomerListLoaded } from './customer-list.actions';
import {
  CustomerListState,
  Customer,
  initialState,
  reducer
} from './customer-list.reducer';

describe('CustomerList Reducer', () => {
  const getCustomerListId = it => it['id'];
  let createCustomerList;

  beforeEach(() => {
    createCustomerList = (id: string, name = '', email = ''): Customer => ({
      id,
      name: name || `name-${id}`,
      email: email || `email-${id}`
    });
  });

  describe('valid CustomerList actions ', () => {
    it('should return set the list of known CustomerList', () => {
      const customerLists = [
        createCustomerList('PRODUCT-AAA'),
        createCustomerList('PRODUCT-zzz')
      ];
      const action = new CustomerListLoaded(customerLists);
      const result: CustomerListState = reducer(initialState, action);
      const selId: string = getCustomerListId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
