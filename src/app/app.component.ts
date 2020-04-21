import { Component, OnInit } from '@angular/core';
import { Covid19APIService } from './api/covid19-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {
  data$: any;

  constructor(private covid: Covid19APIService) {}

  ngOnInit() {
    this.data$ = this.covid.getSummary();
  }
}
