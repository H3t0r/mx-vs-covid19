import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Covid19APIService } from '../api/covid19-api.service';
import { Country } from '../models/covidAPI.model';
import { SingleSeries } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartAdapterService {
  constructor(private covidAPI: Covid19APIService) {}

  getGlobalAndMXSummary(): Observable<SingleSeries> {
    return this.covidAPI.getSummary().pipe(
      map(({ Global, Countries }) => {
        const mx = Countries.find((country) => country.CountryCode === 'MX');

        return this.getSingleSeries(Global, 'Global').concat(
          this.getSingleSeries(mx, 'Mexico')
        );
      })
    );
  }

  private getSingleSeries(country: Country, suffix: string): SingleSeries {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = country;

    return [
      {
        name: `Confirmed (${suffix})`,
        value: TotalConfirmed,
      },
      {
        name: `Deaths (${suffix})`,
        value: TotalDeaths,
      },
      {
        name: `Recovered (${suffix})`,
        value: TotalRecovered,
      },
    ];
  }
}
