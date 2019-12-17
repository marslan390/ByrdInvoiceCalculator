import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import {OrderModule} from "@byrd/order";
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    OrderModule,
    MatCardModule
  ],
  declarations: [OrderListComponent],
  providers: [],
  exports: [OrderListComponent]
})
export class OrderListModule {}
