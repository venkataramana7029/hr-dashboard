export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  performance: number; 
  status: 'Active' | 'On Leave' | 'Inactive';
}
