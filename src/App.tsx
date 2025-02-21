import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { DoctorsPage } from './pages/DoctorsPage';
import { NursesPage } from './pages/NursesPage';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
        <Header />
        <main className='flex-1 overflow-hidden'>
          <Routes>
            <Route path='/' element={<Navigate to='/doctors' replace />} />
            <Route path='/doctors' element={<DoctorsPage />} />
            <Route path='/nurses' element={<NursesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
