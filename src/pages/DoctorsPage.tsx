import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StaffTable } from '../components/StaffTable';
import { RootState } from '../store';
import { addDoctor, updateDoctor, deleteDoctor } from '../store/staffSlice';
import { Doctor } from '../types';

export function DoctorsPage() {
  const dispatch = useDispatch();
  const doctors = useSelector((state: RootState) => state.staff.doctors);

  return (
    <div className='h-full flex flex-col'>
      <div className='px-4 sm:px-6 lg:px-8 py-4'>
        <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>
          Врачи
        </h1>
      </div>
      <div className='flex-1 px-4 sm:px-6 lg:px-8 pb-4 min-h-0'>
        <StaffTable
          data={doctors}
          type='doctor'
          onAdd={(data) => dispatch(addDoctor(data as Doctor))}
          onUpdate={(data) => dispatch(updateDoctor(data as Doctor))}
          onDelete={(id) => dispatch(deleteDoctor(id))}
        />
      </div>
    </div>
  );
}
