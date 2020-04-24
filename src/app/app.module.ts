import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NumberCardModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { OverallComponent } from './components/overall/overall.component';

@NgModule({
  declarations: [AppComponent, OverallComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    NumberCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
