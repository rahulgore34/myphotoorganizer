// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { EmitrackerComponent } from './comps/dashboard/emitracker/emitracker.component';
import { ExpensetrackerComponent } from './comps/dashboard/expensetracker/expensetracker.component';
import { ExcelreadComponent } from './comps/excelread/excelread.component';
import { LoginComponent } from './comps/login/login.component';
import { WorkspaceComponent } from './comps/workspace/workspace.component';
import { LoantrackerComponent } from './comps/dashboard/loantracker/loantracker.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, 
  
    },
      { path: 'login', component: LoginComponent ,
  
    
    },
      { path: 'excel', component: ExcelreadComponent },
      {
        path: 'workspace', component: WorkspaceComponent,
        children: [
          {
            path:'expensetracker', component: ExpensetrackerComponent
          },
          {
            path:'emitracker', component: EmitrackerComponent
          },
          {
            path:'loantracker', component: LoantrackerComponent
          },
        ]
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
