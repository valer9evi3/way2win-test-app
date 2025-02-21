# Hospital Staff Management System

A modern web application for managing hospital staff, including doctors and nurses, built with React, TypeScript, and Redux Toolkit.

## Features

- 👥 Staff Management (Doctors and Nurses)
- 🏥 Department Organization (Cardiology and Surgery)
- 🌓 Dark/Light Theme Support

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd hospital-staff-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Mock data and data utilities
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── store/            # Redux store and slices
├── types/            # TypeScript type definitions
└── App.tsx           # Root component
```

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Features Implementation

#### Theme Switching
The application supports both light and dark themes, with system preference detection and local storage persistence.

#### Staff Management
- View, add, edit, and delete staff members
- Separate management for doctors and nurses
- Department assignment
- Head of department designation for doctors

#### Responsive Design
- Full-screen layout
- Responsive tables with horizontal scrolling
- Mobile-friendly interface
