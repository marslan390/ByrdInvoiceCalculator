import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range/date-range.component';
import {
  MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressBarModule
} from "@angular/material";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  declarations: [DateRangeComponent, LoadingComponent],
  exports: [DateRangeComponent, LoadingComponent]
})
export class SharedModule {}
