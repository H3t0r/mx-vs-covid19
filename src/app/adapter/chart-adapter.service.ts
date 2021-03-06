import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Covid19APIService } from '../api/covid19-api.service';
import { Country } from '../models/covidAPI.model';
import { MultiSeries, SingleSeries } from '@swimlane/ngx-charts';
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

  getProgressInMexico(): Observable<MultiSeries> {
    const to = this.getTodaysDateISO();
    const from = this.getLastMonthsDateISO();

    return this.covidAPI
      .getByCountryAllStatus('mexico', from, to)
      .pipe(
        map((list) =>
          list.reduce(this.transformToChartData, this.getProgressInitialState())
        )
      );
  }
  private transformToChartData(state: MultiSeries, item: Country): MultiSeries {
    const {
      Confirmed: cValue,
      Date: date,
      Deaths: dValue,
      Recovered: rValue,
    } = item;
    const [confirmed, recovered, deaths] = state;

    const formattedDate = new Date(date).toLocaleDateString();

    confirmed.series.push({ name: formattedDate, value: cValue });
    deaths.series.push({ name: formattedDate, value: dValue });
    recovered.series.push({ name: formattedDate, value: rValue });

    return state;
  }

  private getTodaysDateISO(): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today.toISOString().split('.')[0] + 'Z';
  }

  private getLastMonthsDateISO(): string {
    const today = new Date();
    const lastMonth = new Date();

    lastMonth.setMonth(today.getMonth() - 1);
    lastMonth.setHours(0, 0, 0, 0);

    return lastMonth.toISOString().split('.')[0] + 'Z';
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

  private getProgressInitialState(): MultiSeries {
    return [
      {
        name: 'Confirmed',
        series: [],
      },
      {
        name: 'Recovered',
        series: [],
      },
      {
        name: 'Deaths',
        series: [],
      },
    ];
  }
}
