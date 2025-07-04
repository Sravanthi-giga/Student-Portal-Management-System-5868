import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useStudent } from '../context/StudentContext';

const { FiBook, FiCreditCard, FiCalendar, FiAward, FiTrendingUp, FiUser, FiClock } = FiIcons;

const Dashboard = () => {
  const { student } = useStudent();

  const stats = [
    { name: 'GPA', value: student.gpa, icon: FiAward, color: 'bg-green-500' },
    { name: 'Credits', value: student.credits, icon: FiBook, color: 'bg-blue-500' },
    { name: 'Courses', value: student.enrolledCourses.length, icon: FiBook, color: 'bg-purple-500' },
    { name: 'Semester', value: student.semester, icon: FiCalendar, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { name: 'View Profile', href: '/profile', icon: FiUser, color: 'bg-blue-500' },
    { name: 'Course Registration', href: '/registration', icon: FiBook, color: 'bg-green-500' },
    { name: 'Payment History', href: '/payment', icon: FiCreditCard, color: 'bg-purple-500' },
    { name: 'View Schedule', href: '/schedule', icon: FiCalendar, color: 'bg-orange-500' },
  ];

  const recentNotices = [
    { id: 1, title: 'Registration for Spring 2025 begins', date: '2024-12-01', priority: 'high' },
    { id: 2, title: 'Final exam schedule released', date: '2024-11-28', priority: 'medium' },
    { id: 3, title: 'Library hours extended during finals', date: '2024-11-25', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center space-x-4">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-16 h-16 rounded-full border-2 border-white/20"
          />
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {student.name}!</h1>
            <p className="text-primary-100">{student.program} • {student.year}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <div className={`p-3 rounded-lg ${action.color} mb-2`}>
                  <SafeIcon icon={action.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{action.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Notices */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Notices</h2>
            <Link to="/notices" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {recentNotices.map((notice) => (
              <div key={notice.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notice.priority === 'high' ? 'bg-red-500' :
                  notice.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{notice.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Current Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Current Courses</h2>
          <Link to="/courses" className="text-sm text-primary-600 hover:text-primary-700">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {student.enrolledCourses.slice(0, 4).map((course) => (
            <div key={course.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{course.id}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  course.grade === 'A' || course.grade === 'A-' ? 'bg-green-100 text-green-800' :
                  course.grade === 'B+' || course.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.grade}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{course.name}</p>
              <p className="text-xs text-gray-500">{course.credits} Credits</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;