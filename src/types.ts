export interface Person {
  id: string;
  fullName: string;
  department: Department;
}

export interface Doctor extends Person {
  isHeadOfDepartment: boolean;
}

export interface Nurse extends Person {}

export type Department = 'cardiology' | 'surgery';

export type StaffType = 'doctor' | 'nurse';
