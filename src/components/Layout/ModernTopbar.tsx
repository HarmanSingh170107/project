import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bars3Icon,
  BellIcon,
  MoonIcon,
  SunIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface ModernTopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const ModernTopbar: React.FC<ModernTopbarProps> = ({ setSidebarOpen }) => {
  const { darkMode, toggleDarkMode } = useApp();

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students, classes..."
                className="pl-10 pr-4 py-2 w-80 text-sm bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            ) : (
              <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-semibold">!</span>
            </span>
          </button>

          {/* Live Status */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 bg-green-50 rounded-xl border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernTopbar;