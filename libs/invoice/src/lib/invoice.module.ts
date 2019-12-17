import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceFilterComponent } from './invoice-filter/invoice-filter.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { InvoiceComponent } from './invoice.component';
import { SharedModule } from '@byrd/shared';
import { OrderListModule } from '@byrd/order-list';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CustomerListModule } from '@byrd/customer-list';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromInvoice from './+state/invoice.reducer';
import { InvoiceEffects } from './+state/invoice.effects';
import { InvoiceFacade } from './+state/invoice.facade';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderListModule,
    CustomerListModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forFeature(
      fromInvoice.INVOICE_FEATURE_KEY,
      fromInvoice.reducer
    ),
    EffectsModule.forFeature([InvoiceEffects])
  ],
  declarations: [
    InvoiceFilterComponent,
    InvoiceSummaryComponent,
    InvoiceComponent
  ],
  exports: [InvoiceComponent],
  providers: [InvoiceFacade, OrderService]
})
export class InvoiceModule {}
