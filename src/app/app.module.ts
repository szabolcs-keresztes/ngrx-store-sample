import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { reducer } from './store/reducer';
import { TestReportComponent } from './pages/test-report/test-report.component';

@NgModule({
  declarations: [
    AppComponent,
    TestReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ faults: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
