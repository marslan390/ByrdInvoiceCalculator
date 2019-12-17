import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'byrd-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
