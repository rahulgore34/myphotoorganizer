import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { LoginComponent } from './comps/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExcelreadComponent } from './comps/excelread/excelread.component';
import { RGHttpInterceptor } from './http.interceptor';
import { ExpensetrackerComponent } from './comps/dashboard/expensetracker/expensetracker.component';
import { EmitrackerComponent } from './comps/dashboard/emitracker/emitracker.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkspaceComponent } from './comps/workspace/workspace.component';
import { LoantrackerComponent } from './comps/dashboard/loantracker/loantracker.component';
import { RgtableComponent } from './shared/rgtable/rgtable.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, 
children: [
  {
    path:'expensetracker', component: ExpensetrackerComponent
  },
  {
    path:'emitracker', component: EmitrackerComponent
  },
]
},
  { path: 'login', component: LoginComponent },
  { path: 'excel', component: ExcelreadComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExcelreadComponent,
    ExpensetrackerComponent,
    EmitrackerComponent,
    WorkspaceComponent,
    LoantrackerComponent,
    RgtableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [ ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RGHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
