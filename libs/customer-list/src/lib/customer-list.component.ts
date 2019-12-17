import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerListFacade} from './+state/customer-list.facade';
import {Customer} from './+state/customer-list.reducer';

@Component({
  selector: 'byrd-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  @Input() selected: Customer;
  @Output() changeCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private facade: CustomerListFacade) {
  }

  ngOnInit(): void {
    this.customers = this.facade.allCustomerList$;
    this.facade.loadAll();
  }

  displayWith = (customer: Customer) => customer ? customer.name : null;

  onChange = ($event: any) => {
    this.changeCustomer.emit(this.selected);
  }
}
