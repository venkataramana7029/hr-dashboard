import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
   EMPLOYEES: Employee[] = [
  { id: 1,  name: 'Amit Sharma',     role: 'UI Developer',     department: 'Engineering', performance: 85, status: 'Active' },
  { id: 2,  name: 'Sneha Reddy',     role: 'HR Executive',    department: 'HR',          performance: 65, status: 'Inactive' },
  { id: 3,  name: 'Rahul Verma',     role: 'Backend Developer',department: 'Engineering', performance: 90, status: 'Active' },
  { id: 4,  name: 'Priya Nair',      role: 'QA Engineer',     department: 'Testing',     performance: 72, status: 'On Leave' },
  { id: 5,  name: 'Kiran Patel',     role: 'Project Manager', department: 'Management',  performance: 88, status: 'Active' },

  { id: 6,  name: 'Neha Singh',      role: 'Business Analyst',department: 'Business',    performance: 80, status: 'Active' },
  { id: 7,  name: 'Arjun Mehta',     role: 'DevOps Engineer', department: 'Operations',  performance: 92, status: 'Active' },
  { id: 8,  name: 'Pooja Kulkarni',  role: 'UI Designer',     department: 'Design',      performance: 76, status: 'Active' },
  { id: 9,  name: 'Vikram Rao',      role: 'Support Engineer',department: 'Support',     performance: 69, status: 'Inactive' },
  { id:10,  name: 'Anjali Gupta',    role: 'Recruiter',       department: 'HR',          performance: 82, status: 'Active' },

  { id:11,  name: 'Suresh Kumar',    role: 'Database Admin',  department: 'Engineering', performance: 87, status: 'Active' },
  { id:12,  name: 'Divya Iyer',      role: 'Scrum Master',    department: 'Management',  performance: 84, status: 'Active' },
  { id:13,  name: 'Rohit Malhotra',  role: 'Full Stack Dev',  department: 'Engineering', performance: 91, status: 'Active' },
  { id:14,  name: 'Meena Das',       role: 'Finance Analyst', department: 'Finance',     performance: 74, status: 'On Leave' },
  { id:15,  name: 'Nikhil Jain',     role: 'Product Owner',  department: 'Product',     performance: 89, status: 'Active' },

  { id:16,  name: 'Swati Bansal',    role: 'Content Writer',  department: 'Marketing',   performance: 77, status: 'Active' },
  { id:17,  name: 'Manoj Yadav',     role: 'System Admin',   department: 'IT',           performance: 83, status: 'Active' },
  { id:18,  name: 'Ayesha Khan',     role: 'Digital Marketer',department: 'Marketing',   performance: 81, status: 'Active' },
  { id:19,  name: 'Rakesh Pillai',   role: 'Security Analyst',department: 'Security',    performance: 88, status: 'Active' },
  { id:20,  name: 'Lavanya Rao',     role: 'UX Researcher',   department: 'Design',      performance: 79, status: 'Active' }
];

  getEmployees(){
    return this.EMPLOYEES;
  }
}
