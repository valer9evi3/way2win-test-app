import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StaffTable } from '../components/StaffTable';
import { RootState } from '../store';
import { addNurse, updateNurse, deleteNurse } from '../store/staffSlice';
import { Nurse } from '../types';

export function NursesPage() {
  const dispatch = useDispatch();
  const nurses = useSelector((state: RootState) => state.staff.nurses);

  return (
    <div className='h-full flex flex-col'>
      <div className='px-4 sm:px-6 lg:px-8 py-4'>
        <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>
          Медсестры
        </h1>
      </div>
      <div className='flex-1 px-4 sm:px-6 lg:px-8 pb-4 min-h-0'>
        <StaffTable
          data={nurses}
          type='nurse'
          onAdd={(data) => dispatch(addNurse(data as Nurse))}
          onUpdate={(data) => dispatch(updateNurse(data as Nurse))}
          onDelete={(id) => dispatch(deleteNurse(id))}
        />
      </div>
    </div>
  );
}
