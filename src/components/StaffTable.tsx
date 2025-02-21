import React, { useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { Doctor, Nurse } from '../types';
import { StaffForm } from './StaffForm';

interface StaffTableProps {
  data: (Doctor | Nurse)[];
  type: 'doctor' | 'nurse';
  onAdd: (data: Doctor | Nurse) => void;
  onUpdate: (data: Doctor | Nurse) => void;
  onDelete: (id: string) => void;
}

export function StaffTable({
  data,
  type,
  onAdd,
  onUpdate,
  onDelete,
}: StaffTableProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  function handleClickAdd() {
    setIsAdding((prev) => !prev);
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='mb-4 flex-shrink-0'>
        <button
          onClick={handleClickAdd}
          className='flex items-center space-x-2 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200'
        >
          <Plus size={16} />
          <span>Добавить {type === 'doctor' ? 'врача' : 'медсестру'}</span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0 ${
          isAdding ? 'mb-4' : 'mb-0 h-0'
        }`}
      >
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            isAdding ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {isAdding && (
            <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h3 className='mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                Добавить {type === 'doctor' ? 'врача' : 'медсестру'}
              </h3>
              <StaffForm
                type={type}
                onSubmit={(data) => {
                  onAdd(data);
                  setIsAdding(false);
                }}
                onCancel={() => setIsAdding(false)}
              />
            </div>
          )}
        </div>
      </div>

      <div className='flex-1 min-h-0 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out'>
        <div className='h-full overflow-auto scrollbar'>
          <table className='min-w-full divide-y divide-gray-300 dark:divide-gray-700'>
            <thead className='sticky top-0 bg-gray-50 dark:bg-gray-800'>
              <tr>
                <th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'>
                  ФИО
                </th>
                <th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'>
                  Отделение
                </th>
                {type === 'doctor' && (
                  <th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100'>
                    Заведующий отделением
                  </th>
                )}
                <th className='px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-gray-100'>
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'>
              {data.map((person) => (
                <tr
                  key={person.id}
                  className='transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800'
                >
                  {editingId === person.id ? (
                    <td colSpan={type === 'doctor' ? 4 : 3} className='p-4'>
                      <div className='transform transition-all duration-300 ease-in-out animate-fade-in'>
                        <StaffForm
                          type={type}
                          initialData={person}
                          onSubmit={(data) => {
                            onUpdate(data);
                            setEditingId(null);
                          }}
                          onCancel={() => setEditingId(null)}
                        />
                      </div>
                    </td>
                  ) : (
                    <>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100'>
                        {person.fullName}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                        {person.department === 'cardiology'
                          ? 'Кардиология'
                          : 'Хирургия'}
                      </td>
                      {type === 'doctor' && (
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400'>
                          {(person as Doctor).isHeadOfDepartment ? 'Да' : 'Нет'}
                        </td>
                      )}
                      <td className='whitespace-nowrap px-3 py-4 text-right text-sm'>
                        <button
                          onClick={() => setEditingId(person.id)}
                          className='mr-2 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-400 transition-colors duration-200'
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => onDelete(person.id)}
                          className='rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-400 transition-colors duration-200'
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
