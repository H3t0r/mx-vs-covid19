import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Summary } from '../models/covidAPI.model';

@Injectable({
  providedIn: 'root',
})
export class Covid19APIService {
  private baseURL = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) {}

  getSummary(): Observable<Summary> {
    return this.http
      .get<Summary>(this.baseURL + 'summary')
      .pipe(map((summary) => summary));
  }
}
