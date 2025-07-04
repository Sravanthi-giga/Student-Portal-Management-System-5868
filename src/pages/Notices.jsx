import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBell, FiCalendar, FiUser, FiFilter, FiSearch, FiEye, FiBookmark } = FiIcons;

const Notices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notices = [
    {
      id: 1,
      title: 'Registration for Spring 2025 Semester Opens',
      content: 'Online registration for Spring 2025 semester will begin on December 1, 2024. Students are advised to meet with their academic advisors before registration.',
      category: 'Registration',
      priority: 'high',
      date: '2024-12-01',
      author: 'Academic Office',
      isRead: false,
      isBookmarked: true,
    },
    {
      id: 2,
      title: 'Final Examination Schedule Released',
      content: 'The final examination schedule for Fall 2024 semester has been published. Please check your student portal for detailed timings and locations.',
      category: 'Exams',
      priority: 'high',
      date: '2024-11-28',
      author: 'Examination Office',
      isRead: true,
      isBookmarked: false,
    },
    {
      id: 3,
      title: 'Library Hours Extended During Finals',
      content: 'The university library will extend its operating hours during the final examination period. New hours: 7:00 AM - 2:00 AM daily.',
      category: 'General',
      priority: 'medium',
      date: '2024-11-25',
      author: 'Library Services',
      isRead: true,
      isBookmarked: false,
    },
    {
      id: 4,
      title: 'Scholarship Applications Now Open',
      content: 'Applications for merit-based scholarships for the 2025-2026 academic year are now open. Deadline: January 15, 2025.',
      category: 'Financial Aid',
      priority: 'medium',
      date: '2024-11-20',
      author: 'Financial Aid Office',
      isRead: false,
      isBookmarked: true,
    },
    {
      id: 5,
      title: 'Campus WiFi Maintenance Scheduled',
      content: 'Campus-wide WiFi maintenance will be performed on December 10, 2024, from 2:00 AM to 6:00 AM. Internet services may be intermittent during this time.',
      category: 'Technical',
      priority: 'low',
      date: '2024-11-18',
      author: 'IT Services',
      isRead: true,
      isBookmarked: false,
    },
    {
      id: 6,
      title: 'Student Health Center Holiday Hours',
      content: 'The Student Health Center will operate on reduced hours during the holiday break. Emergency services will remain available 24/7.',
      category: 'Health Services',
      priority: 'low',
      date: '2024-11-15',
      author: 'Health Services',
      isRead: true,
      isBookmarked: false,
    },
    {
      id: 7,
      title: 'Career Fair 2025 - Save the Date',
      content: 'The annual Career Fair will be held on February 15-16, 2025. Over 100 companies will be participating. Registration opens January 1, 2025.',
      category: 'Career Services',
      priority: 'medium',
      date: '2024-11-10',
      author: 'Career Services',
      isRead: false,
      isBookmarked: false,
    },
    {
      id: 8,
      title: 'Parking Permit Renewal Reminder',
      content: 'Parking permits for the Spring 2025 semester must be renewed by December 31, 2024. Late renewals will incur additional fees.',
      category: 'General',
      priority: 'medium',
      date: '2024-11-05',
      author: 'Campus Security',
      isRead: true,
      isBookmarked: false,
    },
  ];

  const categories = ['all', 'Registration', 'Exams', 'General', 'Financial Aid', 'Technical', 'Health Services', 'Career Services'];

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityDot = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const unreadCount = notices.filter(notice => !notice.isRead).length;
  const bookmarkedCount = notices.filter(notice => notice.isBookmarked).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notices & Announcements</h1>
          <p className="text-sm text-gray-600 mt-1">
            {unreadCount} unread, {bookmarkedCount} bookmarked
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            <SafeIcon icon={FiBell} className="w-4 h-4" />
            <span>Mark All Read</span>
          </button>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiFilter} className="w-4 h-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice, index) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 ${
              !notice.isRead ? 'border-l-4 border-l-primary-500' : ''
            } hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-2 h-2 rounded-full ${getPriorityDot(notice.priority)}`}></div>
                  <h3 className={`text-lg font-semibold ${notice.isRead ? 'text-gray-900' : 'text-gray-900 font-bold'}`}>
                    {notice.title}
                  </h3>
                  {!notice.isRead && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      New
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{notice.content}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{new Date(notice.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>{notice.author}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(notice.priority)}`}>
                    {notice.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {notice.isBookmarked && (
                  <SafeIcon icon={FiBookmark} className="w-4 h-4 text-yellow-500" />
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <SafeIcon icon={FiEye} className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-yellow-500 rounded-lg hover:bg-gray-50 transition-colors">
                  <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredNotices.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <SafeIcon icon={FiBell} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notices found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Notices;