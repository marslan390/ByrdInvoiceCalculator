import { ApiService } from '@byrd/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderFilter } from '@byrd/order';

@Injectable()
export class OrderService {
  constructor(private apiService: ApiService) {}

  getOrders(filters: OrderFilter): Observable<Order[]> {
    const customerId = filters && filters.customer ? filters.customer.id : null;
    const startDate = filters && filters.start_date ? filters.start_date : '';
    const endDate = filters && filters.end_date ? filters.end_date : '';
    return this.apiService.get(
      `orders/${customerId}?start_date=${startDate}&end_date=${endDate}`
    );
  }
}
