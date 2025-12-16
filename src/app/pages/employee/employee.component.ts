import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
   constructor(private _emp:EmployeeService){}  
   
    EmployeeList:any;  
  
    ngOnInit(){     
      this.EmployeeList=this._emp.getEmployees();
    }
  

}
