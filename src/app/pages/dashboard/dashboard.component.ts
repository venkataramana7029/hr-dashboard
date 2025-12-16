import { CommonModule } from '@angular/common';
import { Component ,  OnInit} from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { EmployeeService } from '../../services/employee.service';
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private _emp:EmployeeService){}

  recentEmployees:any;
  EmployeeList:any;


  data =[
    {
      name:"John",
      role:"Developer",
      numberOfDays:"Last Month"
    },
    {
      name:"Teena",
      role:"HR",
      numberOfDays:"Last Week"
    },
    {
      name:"Venu",
      role:"Developer",
      numberOfDays:"Last Month"
    },
    {
      name:"Rajesh",
      role:"IT Admin",
      numberOfDays:"Two Weeks"
    },   
  ]

  ngOnInit(){
    this.createChart();
    this.recentEmployees = this.data;
    console.log(this._emp.getEmployees());   

    this.EmployeeList=this._emp.getEmployees();
  }

  createChart() {
    new Chart('performanceChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Employee Performance (%)',          
          data: [70, 75, 80, 78, 85, 90],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59,130,246,0.2)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

}
