import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [

    {
        path:"",
        component:DashboardComponent,
         title:"HR Dashboard"
      
     
    },
    {
        
        path:"dashboard",
        component:DashboardComponent,
        title:"HR Dashboard"
        
    },
     {
        path:"employee",
        component:EmployeeComponent,
         title:"Employee Details"
    },
];
