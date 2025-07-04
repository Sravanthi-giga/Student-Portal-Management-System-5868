import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiMinus, FiCalendar, FiClock, FiUser, FiMapPin, FiBook, FiCheck, FiX } = FiIcons;

const Registration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const availableCourses = [
    {
      id: 'CS401',
      name: 'Advanced Algorithms',
      instructor: 'Dr. Sarah Johnson',
      credits: 3,
      schedule: 'MWF 10:00-11:00 AM',
      room: 'CS Building 201',
      department: 'Computer Science',
      prerequisites: ['CS301', 'MATH201'],
      seats: 25,
      enrolled: 18,
      description: 'Advanced study of algorithmic techniques and complexity analysis.',
    },
    {
      id: 'CS402',
      name: 'Machine Learning',
      instructor: 'Prof. Michael Chen',
      credits: 3,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'CS Building 305',
      department: 'Computer Science',
      prerequisites: ['CS301', 'MATH201'],
      seats: 30,
      enrolled: 25,
      description: 'Introduction to machine learning algorithms and applications.',
    },
    {
      id: 'CS403',
      name: 'Computer Networks',
      instructor: 'Dr. Emily Rodriguez',
      credits: 3,
      schedule: 'MWF 1:00-2:00 PM',
      room: 'CS Building 102',
      department: 'Computer Science',
      prerequisites: ['CS301'],
      seats: 20,
      enrolled: 12,
      description: 'Fundamentals of computer networking and distributed systems.',
    },
    {
      id: 'MATH301',
      name: 'Linear Algebra',
      instructor: 'Prof. David Kim',
      credits: 3,
      schedule: 'TTh 9:00-10:30 AM',
      room: 'Math Building 401',
      department: 'Mathematics',
      prerequisites: ['MATH201'],
      seats: 35,
      enrolled: 20,
      description: 'Vector spaces, linear transformations, and matrix theory.',
    },
    {
      id: 'PHYS201',
      name: 'Physics II',
      instructor: 'Dr. Lisa Wang',
      credits: 4,
      schedule: 'MWF 9:00-10:00 AM, T 2:00-4:00 PM',
      room: 'Physics Building 101',
      department: 'Physics',
      prerequisites: ['PHYS101'],
      seats: 40,
      enrolled: 35,
      description: 'Electricity, magnetism, and modern physics.',
    },
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Physics'];

  const filteredCourses = availableCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || course.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const addCourse = (course) => {
    if (!selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(c => c.id !== courseId));
  };

  const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);

  const getSeatColor = (enrolled, seats) => {
    const ratio = enrolled / seats;
    if (ratio >= 0.9) return 'text-red-600';
    if (ratio >= 0.7) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-gray-900">Course Registration</h1>
        <div className="text-sm text-gray-600">
          Spring 2025 Registration Period: Dec 1 - Dec 15, 2024
        </div>
      </motion.div>

      {/* Registration Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Selected Courses</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Total Credits: {totalCredits}</span>
            <button
              disabled={selectedCourses.length === 0}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Register Courses
            </button>
          </div>
        </div>

        {selectedCourses.length > 0 ? (
          <div className="space-y-3">
            {selectedCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-600">{course.id} • {course.credits} Credits • {course.schedule}</p>
                </div>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No courses selected yet</p>
        )}
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Available Courses */}
      <div className="space-y-4">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {course.department}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{course.id} • {course.instructor}</p>
                <p className="text-sm text-gray-700 mb-4">{course.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                    <span>{course.room}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SafeIcon icon={FiBook} className="w-4 h-4" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <SafeIcon icon={FiUser} className="w-4 h-4 text-gray-600" />
                    <span className={getSeatColor(course.enrolled, course.seats)}>
                      {course.enrolled}/{course.seats} Enrolled
                    </span>
                  </div>
                </div>

                {course.prerequisites.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Prerequisites:</strong> {course.prerequisites.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="ml-4">
                {selectedCourses.find(c => c.id === course.id) ? (
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <SafeIcon icon={FiMinus} className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                ) : (
                  <button
                    onClick={() => addCourse(course)}
                    disabled={course.enrolled >= course.seats}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <SafeIcon icon={FiPlus} className="w-4 h-4" />
                    <span>{course.enrolled >= course.seats ? 'Full' : 'Add'}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Registration;