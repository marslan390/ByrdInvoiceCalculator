import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DateRange } from './date-range.interface';

@Component({
  selector: 'byrd-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Output() dateRangeChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  constructor() { }

  ngOnInit() {
  }

  onRangeChangeDate = ({value}, mode: string) => {
    mode === 'start' ? this.startDate = value : this.endDate = value;
    this.dateRangeChange.emit({startDate: this.startDate, endDate: this.endDate});
  }

}
