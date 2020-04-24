import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Summary } from '../models/covidAPI.model';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Covid19APIService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  getSummary(): Observable<Summary> {
    return this.http
      .get<Summary>(this.baseURL + 'summary')
      .pipe(map((summary) => summary));
  }
}
