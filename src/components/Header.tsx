import { UserRound, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ToggleThemeButton from './ToggleThemeButton';

export function Header() {
  const location = useLocation();

  return (
    <header className='bg-white shadow-md dark:bg-gray-800 transition-colors duration-200'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between items-center'>
          <div className='flex items-center space-x-8'>
            <Link
              to='/doctors'
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/doctors'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <UserRound size={20} />
              <span>Врачи</span>
            </Link>
            <Link
              to='/nurses'
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/nurses'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Users size={20} />
              <span>Медсестры</span>
            </Link>
          </div>
          <ToggleThemeButton />
        </div>
      </nav>
    </header>
  );
}
