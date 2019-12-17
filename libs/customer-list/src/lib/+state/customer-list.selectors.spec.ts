import { Customer, CustomerListState } from './customer-list.reducer';
import { customerListQuery } from './customer-list.selectors';

describe('CustomerList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCustomerListId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCustomerList = (id: string, name = '', email =''): Customer => ({
      id,
      name: name || `name-${id}`,
      email: email || `email-${id}`
    });
    storeState = {
      customerList: {
        list: [
          createCustomerList('PRODUCT-AAA'),
          createCustomerList('PRODUCT-BBB'),
          createCustomerList('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('CustomerList Selectors', () => {
    it('getAllCustomerList() should return the list of CustomerList', () => {
      const results = customerListQuery.getAllCustomerList(storeState);
      const selId = getCustomerListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCustomerList() should return the selected Entity', () => {
      const result = customerListQuery.getSelectedCustomerList(storeState);
      const selId = getCustomerListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = customerListQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = customerListQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
