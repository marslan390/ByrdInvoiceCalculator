import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderFilter } from '@byrd/order';
import { DateRange } from '@byrd/shared';
import { Customer } from '@byrd/customer-list';

@Component({
  selector: 'byrd-invoice-filter',
  templateUrl: './invoice-filter.component.html',
  styleUrls: ['./invoice-filter.component.scss']
})
export class InvoiceFilterComponent implements OnInit {
  @Input() filters: OrderFilter;
  @Output() dateRangeChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();
  @Output() changeCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output() searchOrders: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  onDateRangeChange = (dateRange: DateRange) => this.dateRangeChange.emit(dateRange);

  onChangeCustomer = (customer: Customer) => this.changeCustomer.emit(customer);

  search = () => this.searchOrders.emit();
}
