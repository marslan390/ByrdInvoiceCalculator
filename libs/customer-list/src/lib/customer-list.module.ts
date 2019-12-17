import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CustomerListComponent } from './customer-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCustomerList from './+state/customer-list.reducer';
import { CustomerListEffects } from './+state/customer-list.effects';
import { CustomerListFacade } from './+state/customer-list.facade';
import {ApiModule} from "@byrd/api";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature(
      fromCustomerList.CUSTOMERLIST_FEATURE_KEY,
      fromCustomerList.reducer
    ),
    EffectsModule.forFeature([CustomerListEffects]),
    ApiModule
  ],
  declarations: [CustomerListComponent],
  exports: [CustomerListComponent],
  providers: [CustomerListFacade]
})
export class CustomerListModule {}
