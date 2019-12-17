import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MatCardModule, MatTableModule } from '@angular/material';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [OrderComponent, OrderItemsComponent],
  exports: [OrderComponent],
  providers: []
})
export class OrderModule {}
