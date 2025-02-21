import React, { useState } from 'react';
import { Doctor, Nurse, Department, StaffType } from '../types';

interface StaffFormProps {
  type: StaffType;
  initialData?: Doctor | Nurse;
  onSubmit: (data: Doctor | Nurse) => void;
  onCancel: () => void;
}

export function StaffForm({
  type,
  initialData,
  onSubmit,
  onCancel,
}: StaffFormProps) {
  const [formData, setFormData] = useState({
    id: initialData?.id || crypto.randomUUID(),
    fullName: initialData?.fullName || '',
    department: initialData?.department || 'cardiology',
    isHeadOfDepartment:
      type === 'doctor'
        ? (initialData as Doctor)?.isHeadOfDepartment || false
        : undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Doctor | Nurse);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label
          htmlFor='fullName'
          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          ФИО
        </label>
        <input
          type='text'
          id='fullName'
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white'
          required
        />
      </div>

      <div>
        <label
          htmlFor='department'
          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          Отделение
        </label>
        <select
          id='department'
          value={formData.department}
          onChange={(e) =>
            setFormData({
              ...formData,
              department: e.target.value as Department,
            })
          }
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white'
        >
          <option value='cardiology'>Кардиология</option>
          <option value='surgery'>Хирургия</option>
        </select>
      </div>

      {type === 'doctor' && (
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='isHeadOfDepartment'
            checked={formData.isHeadOfDepartment}
            onChange={(e) =>
              setFormData({ ...formData, isHeadOfDepartment: e.target.checked })
            }
            className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700'
          />
          <label
            htmlFor='isHeadOfDepartment'
            className='ml-2 block text-sm text-gray-700 dark:text-gray-300'
          >
            Заведующий отделением
          </label>
        </div>
      )}

      <div className='flex justify-end space-x-3'>
        <button
          type='button'
          onClick={onCancel}
          className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        >
          Отмена
        </button>
        <button
          type='submit'
          className='rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600'
        >
          {initialData ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </form>
  );
}
