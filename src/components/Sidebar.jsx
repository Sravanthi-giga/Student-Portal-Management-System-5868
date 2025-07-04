import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiUser, FiBook, FiFileText, FiCreditCard, FiAward, FiCalendar, FiBell, FiX, FiUserX } = FiIcons;

const Sidebar = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Profile', href: '/profile', icon: FiUser },
    { name: 'Courses', href: '/courses', icon: FiBook },
    { name: 'Registration', href: '/registration', icon: FiFileText },
    { name: 'Payment', href: '/payment', icon: FiCreditCard },
    { name: 'Results', href: '/results', icon: FiAward },
    { name: 'Schedule', href: '/schedule', icon: FiCalendar },
    { name: 'Notices', href: '/notices', icon: FiBell },
    { name: 'Drop Semester', href: '/drop-semester', icon: FiUserX },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 lg:relative lg:translate-x-0 lg:shadow-none"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary-600">Student Portal</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <SafeIcon icon={item.icon} className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;