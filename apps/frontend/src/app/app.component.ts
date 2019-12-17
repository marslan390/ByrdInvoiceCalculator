import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './+state/app.reducer';
import { appQuery } from './+state/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'byrd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Byrd Invoice';
  showLoading: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading = this.store.pipe(select(appQuery.showLoading));
  }
}
