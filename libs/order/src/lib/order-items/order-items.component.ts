import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'byrd-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
  @Input() items: any[];
  displayedColumns = ['name', 'quantity', 'amount', 'currency'];

  constructor() { }

  ngOnInit() {
  }

}
