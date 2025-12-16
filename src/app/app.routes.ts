import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [

    {
        path:"",
        component:DashboardComponent,
      
     
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
     {
        path:"employee",
        component:EmployeeComponent
    },
];
