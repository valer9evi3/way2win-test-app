import { useTheme } from '../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

function ToggleThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        className='p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
        aria-label='Toggle theme'
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  );
}
export default ToggleThemeButton;
