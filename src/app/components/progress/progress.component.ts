import { Component, OnInit } from '@angular/core';
import { ChartAdapterService } from 'src/app/adapter/chart-adapter.service';
import { Observable } from 'rxjs';
import { MultiSeries } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl'],
})
export class ProgressComponent implements OnInit {
  // chart settings
  animations: boolean = true;
  legend: boolean = true;
  legendPosition: string = 'below';
  results$: Observable<MultiSeries>;
  scheme = 'cool';
  showLabels: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  timeline: boolean = true;
  view = [null, 400];
  xAxis: boolean = true;
  xAxisLabel: string = 'Last 30 Days';
  yAxis: boolean = true;
  yAxisLabel: string = 'Population';

  constructor(private chartAdapter: ChartAdapterService) {}

  ngOnInit(): void {
    this.results$ = this.chartAdapter.getProgressInMexico();
  }
}
