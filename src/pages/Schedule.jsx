import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiMapPin, FiUser, FiBook, FiChevronLeft, FiChevronRight } = FiIcons;

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('week');

  const schedule = {
    Monday: [
      {
        id: 1,
        course: 'CS301 - Data Structures',
        instructor: 'Dr. Sarah Johnson',
        time: '10:00 AM - 11:00 AM',
        room: 'CS Building 201',
        type: 'Lecture',
        color: 'bg-blue-500',
      },
      {
        id: 2,
        course: 'CS303 - Database Systems',
        instructor: 'Dr. Emily Rodriguez',
        time: '1:00 PM - 2:00 PM',
        room: 'CS Building 102',
        type: 'Lecture',
        color: 'bg-green-500',
      },
    ],
    Tuesday: [
      {
        id: 3,
        course: 'CS302 - Software Engineering',
        instructor: 'Prof. Michael Chen',
        time: '2:00 PM - 3:30 PM',
        room: 'CS Building 305',
        type: 'Lecture',
        color: 'bg-purple-500',
      },
      {
        id: 4,
        course: 'MATH201 - Discrete Mathematics',
        instructor: 'Prof. David Kim',
        time: '9:00 AM - 10:30 AM',
        room: 'Math Building 401',
        type: 'Lecture',
        color: 'bg-orange-500',
      },
    ],
    Wednesday: [
      {
        id: 5,
        course: 'CS301 - Data Structures',
        instructor: 'Dr. Sarah Johnson',
        time: '10:00 AM - 11:00 AM',
        room: 'CS Building 201',
        type: 'Lecture',
        color: 'bg-blue-500',
      },
      {
        id: 6,
        course: 'CS303 - Database Systems',
        instructor: 'Dr. Emily Rodriguez',
        time: '1:00 PM - 2:00 PM',
        room: 'CS Building 102',
        type: 'Lecture',
        color: 'bg-green-500',
      },
      {
        id: 7,
        course: 'CS301 - Lab Session',
        instructor: 'TA: Alex Smith',
        time: '3:00 PM - 5:00 PM',
        room: 'CS Lab 101',
        type: 'Lab',
        color: 'bg-blue-400',
      },
    ],
    Thursday: [
      {
        id: 8,
        course: 'CS302 - Software Engineering',
        instructor: 'Prof. Michael Chen',
        time: '2:00 PM - 3:30 PM',
        room: 'CS Building 305',
        type: 'Lecture',
        color: 'bg-purple-500',
      },
      {
        id: 9,
        course: 'MATH201 - Discrete Mathematics',
        instructor: 'Prof. David Kim',
        time: '9:00 AM - 10:30 AM',
        room: 'Math Building 401',
        type: 'Lecture',
        color: 'bg-orange-500',
      },
    ],
    Friday: [
      {
        id: 10,
        course: 'CS301 - Data Structures',
        instructor: 'Dr. Sarah Johnson',
        time: '10:00 AM - 11:00 AM',
        room: 'CS Building 201',
        type: 'Lecture',
        color: 'bg-blue-500',
      },
      {
        id: 11,
        course: 'CS303 - Database Systems',
        instructor: 'Dr. Emily Rodriguez',
        time: '1:00 PM - 2:00 PM',
        room: 'CS Building 102',
        type: 'Lecture',
        color: 'bg-green-500',
      },
    ],
    Saturday: [],
    Sunday: [],
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'CS301 Midterm Exam',
      date: '2024-12-15',
      time: '10:00 AM - 12:00 PM',
      room: 'CS Building 201',
      type: 'Exam',
    },
    {
      id: 2,
      title: 'CS302 Project Presentation',
      date: '2024-12-18',
      time: '2:00 PM - 4:00 PM',
      room: 'CS Building 305',
      type: 'Presentation',
    },
    {
      id: 3,
      title: 'MATH201 Assignment Due',
      date: '2024-12-20',
      time: '11:59 PM',
      room: 'Online',
      type: 'Assignment',
    },
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Exam':
        return 'bg-red-100 text-red-800';
      case 'Presentation':
        return 'bg-blue-100 text-blue-800';
      case 'Assignment':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
        <div className="flex items-center space-x-4">
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="week">Week View</option>
            <option value="day">Day View</option>
          </select>
        </div>
      </motion.div>

      {/* Week Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200"
      >
        <button
          onClick={() => setCurrentWeek(currentWeek - 1)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <SafeIcon icon={FiChevronLeft} className="w-4 h-4" />
          <span>Previous</span>
        </button>
        
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">Week of December 9-15, 2024</h2>
          <p className="text-sm text-gray-600">Fall 2024 Semester</p>
        </div>
        
        <button
          onClick={() => setCurrentWeek(currentWeek + 1)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <span>Next</span>
          <SafeIcon icon={FiChevronRight} className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Schedule Grid */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="p-6">
            <div className="grid grid-cols-8 gap-4">
              {/* Time column */}
              <div className="space-y-4">
                <div className="h-12"></div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-16 flex items-center">
                    <span className="text-xs text-gray-500 font-medium">{time}</span>
                  </div>
                ))}
              </div>

              {/* Days columns */}
              {daysOfWeek.map((day) => (
                <div key={day} className="space-y-4">
                  <div className="h-12 flex items-center justify-center border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-900">{day}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {schedule[day].map((event) => (
                      <div
                        key={event.id}
                        className={`${event.color} text-white p-2 rounded-lg text-xs relative`}
                      >
                        <div className="font-medium truncate">{event.course}</div>
                        <div className="text-xs opacity-90 truncate">{event.time}</div>
                        <div className="text-xs opacity-90 truncate">{event.room}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiClock} className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiMapPin} className="w-3 h-3" />
                      <span>{event.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Classes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Classes</h3>
            <div className="space-y-3">
              {schedule.Wednesday.map((event) => (
                <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm">{event.course}</h4>
                    <span className="text-xs text-gray-500">{event.type}</span>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiClock} className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiMapPin} className="w-3 h-3" />
                      <span>{event.room}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiUser} className="w-3 h-3" />
                      <span>{event.instructor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;