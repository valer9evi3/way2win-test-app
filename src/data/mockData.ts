import { Doctor, Nurse } from '../types';

const russianFirstNames = [
  'Александр',
  'Дмитрий',
  'Максим',
  'Сергей',
  'Андрей',
  'Алексей',
  'Артём',
  'Илья',
  'Кирилл',
  'Михаил',
  'Елена',
  'Ольга',
  'Наталья',
  'Мария',
  'Анна',
  'Ирина',
  'Татьяна',
  'Светлана',
  'Екатерина',
  'Анастасия',
];

const russianLastNames = [
  'Иванов',
  'Смирнов',
  'Кузнецов',
  'Попов',
  'Васильев',
  'Петров',
  'Соколов',
  'Михайлов',
  'Новиков',
  'Федоров',
  'Иванова',
  'Смирнова',
  'Кузнецова',
  'Попова',
  'Васильева',
  'Петрова',
  'Соколова',
  'Михайлова',
  'Новикова',
  'Федорова',
];

const russianPatronymics = [
  'Александрович',
  'Дмитриевич',
  'Максимович',
  'Сергеевич',
  'Андреевич',
  'Александровна',
  'Дмитриевна',
  'Максимовна',
  'Сергеевна',
  'Андреевна',
];

function generateFullName(): string {
  const lastName =
    russianLastNames[Math.floor(Math.random() * russianLastNames.length)];
  const firstName =
    russianFirstNames[Math.floor(Math.random() * russianFirstNames.length)];
  const patronymic =
    russianPatronymics[Math.floor(Math.random() * russianPatronymics.length)];
  return `${lastName} ${firstName} ${patronymic}`;
}

function generateDepartment(): 'cardiology' | 'surgery' {
  return Math.random() < 0.5 ? 'cardiology' : 'surgery';
}

// Generate doctors
export const mockDoctors: Doctor[] = Array.from({ length: 30 }, (_, index) => {
  const department = generateDepartment();
  return {
    id: (index + 1).toString(),
    fullName: generateFullName(),
    department,
    // Only one head of department per department
    isHeadOfDepartment: index === 0 || index === 1,
  };
});

// Ensure exactly one head of department per department
const cardiologyHead = mockDoctors.find(
  (d) => d.department === 'cardiology' && d.isHeadOfDepartment
);
const surgeryHead = mockDoctors.find(
  (d) => d.department === 'surgery' && d.isHeadOfDepartment
);

if (!cardiologyHead) {
  const firstCardiology = mockDoctors.find(
    (d) => d.department === 'cardiology'
  );
  if (firstCardiology) firstCardiology.isHeadOfDepartment = true;
}

if (!surgeryHead) {
  const firstSurgery = mockDoctors.find((d) => d.department === 'surgery');
  if (firstSurgery) firstSurgery.isHeadOfDepartment = true;
}

// Generate nurses
export const mockNurses: Nurse[] = Array.from({ length: 100 }, (_, index) => ({
  id: (index + 1).toString(),
  fullName: generateFullName(),
  department: generateDepartment(),
}));
