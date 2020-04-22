import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Country, Summary } from '../models/covidAPI.model';
import { Observable } from 'rxjs';
import { SingleSeries } from '@swimlane/ngx-charts';

@Injectable({
  providedIn: 'root',
})
export class Covid19APIService {
  private baseURL = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) {}

  getSummary(): Observable<SingleSeries> {
    return this.http
      .get<Summary>(this.baseURL + 'summary')
      .pipe(map((summary) => this.getSingleSeries(summary.Global)));
  }

  private getSingleSeries(country: Country): SingleSeries {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = country;

    return [
      {
        name: 'Confirmed',
        value: TotalConfirmed,
      },
      {
        name: 'Deaths',
        value: TotalDeaths,
      },
      {
        name: 'Recovered',
        value: TotalRecovered,
      },
    ];
  }
}
