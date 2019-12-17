import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceSummary } from '../+state/invoice.reducer';
import { InvoiceFacade } from '../+state/invoice.facade';

@Component({
  selector: 'byrd-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {
  invoiceSummary: Observable<InvoiceSummary>;

  constructor(private fascad: InvoiceFacade) { }

  ngOnInit() {
    this.invoiceSummary = this.fascad.getInvoiceSummary$;
  }

  getFormatedDate = (date: Date) => {
    if (date) {
      date = new Date()
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  }

}
