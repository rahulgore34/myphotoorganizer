import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { LoginComponent } from './comps/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExcelreadComponent } from './comps/excelread/excelread.component';
import { ExpenseTrackerComponent } from './comps/expense-tracker/expense-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'excel', component: ExcelreadComponent },
  { path: 'expenseTracker', component: ExpenseTrackerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExcelreadComponent,
    ExpenseTrackerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
