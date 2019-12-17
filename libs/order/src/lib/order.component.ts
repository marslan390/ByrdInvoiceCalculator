import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'byrd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order;

  constructor() { }

  ngOnInit() {
  }

  getTotalPrice = (items) => items.reduce((a, b) => a + (parseFloat(b['total_price']['amount']) || 0), 0);

  getCurrency = (items) => items.length > 0 ? items[0]['total_price']['currency'] : '';

  getOrderDate = (date) => {
    if (date) {
      date = new Date(date);
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  }

}
