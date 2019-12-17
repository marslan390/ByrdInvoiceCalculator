import { Component, Input, OnInit } from '@angular/core';
import { Order } from '@byrd/order';

@Component({
  selector: 'byrd-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() orders: Order[];

  constructor() {}

  ngOnInit() {
  }
}
