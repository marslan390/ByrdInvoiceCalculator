import { Component, OnInit } from '@angular/core';
import { InvoiceFacade } from './+state/invoice.facade';
import { InvoiceConfig } from './+state/invoice.reducer';
import { Order } from '@byrd/order';
import { Observable } from 'rxjs';
import { DateRange } from '@byrd/shared';
import { Customer } from '@byrd/customer-list';

@Component({
  selector: 'byrd-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  config: Observable<InvoiceConfig>;
  orders: Observable<Order[]>;

  constructor(private facade: InvoiceFacade) { }

  ngOnInit() {
    this.config = this.facade.config$;
    this.orders = this.facade.allOrders$;
  }

  searchOrders = () => this.facade.loadOrders();

  onDateRangeChange = (dateRange: DateRange) => this.facade.updateConfigDateRange(dateRange);

  onChageCustomer = (customer: Customer) => this.facade.updateConfigFilterCustomer(customer);

}
