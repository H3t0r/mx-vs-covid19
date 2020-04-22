import { Component, OnInit } from '@angular/core';

import { Covid19APIService } from 'src/app/api/covid19-api.service';
import { SingleSeries } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.styl'],
})
export class OverallComponent implements OnInit {
  // chart settings
  cardColor = '#222837';
  results$: Observable<SingleSeries>;
  scheme = 'cool';
  view = [340, 200];

  constructor(private covid: Covid19APIService) {}

  ngOnInit(): void {
    this.results$ = this.covid.getSummary();
  }
}
