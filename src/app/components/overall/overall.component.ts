import { Component, OnInit } from '@angular/core';

import { SingleSeries } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { ChartAdapterService } from 'src/app/adapter/chart-adapter.service';

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
  view = null;

  constructor(private chartAdapter: ChartAdapterService) {}

  ngOnInit(): void {
    this.results$ = this.chartAdapter.getGlobalAndMXSummary();
  }

  /**
   * TODO
   * Work on the chart responsiveness
   * @param event
   */
  onResize(event) {
    console.log(event.target.innerWidth);
  }
}
