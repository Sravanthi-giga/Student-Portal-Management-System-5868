import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useStudent } from '../context/StudentContext';

const { FiBook, FiClock, FiUser, FiMapPin, FiCalendar, FiAward, FiFilter } = FiIcons;

const Courses = () => {
  const { student } = useStudent();
  const [selectedSemester, setSelectedSemester] = useState('current');

  const currentCourses = [
    {
      id: 'CS301',
      name: 'Data Structures and Algorithms',
      instructor: 'Dr. Sarah Johnson',
      credits: 3,
      schedule: 'MWF 10:00-11:00 AM',
      room: 'CS Building 201',
      grade: 'A-',
      progress: 85,
      assignments: 8,
      completedAssignments: 7,
    },
    {
      id: 'CS302',
      name: 'Software Engineering',
      instructor: 'Prof. Michael Chen',
      credits: 3,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'CS Building 305',
      grade: 'B+',
      progress: 78,
      assignments: 6,
      completedAssignments: 5,
    },
    {
      id: 'CS303',
      name: 'Database Systems',
      instructor: 'Dr. Emily Rodriguez',
      credits: 3,
      schedule: 'MWF 1:00-2:00 PM',
      room: 'CS Building 102',
      grade: 'A',
      progress: 92,
      assignments: 5,
      completedAssignments: 5,
    },
    {
      id: 'MATH201',
      name: 'Discrete Mathematics',
      instructor: 'Prof. David Kim',
      credits: 3,
      schedule: 'TTh 9:00-10:30 AM',
      room: 'Math Building 401',
      grade: 'B',
      progress: 72,
      assignments: 10,
      completedAssignments: 8,
    },
  ];

  const pastCourses = [
    {
      id: 'CS101',
      name: 'Introduction to Programming',
      instructor: 'Dr. Lisa Wang',
      credits: 3,
      semester: 'Spring 2024',
      grade: 'A',
    },
    {
      id: 'CS102',
      name: 'Object-Oriented Programming',
      instructor: 'Prof. Robert Brown',
      credits: 3,
      semester: 'Spring 2024',
      grade: 'A-',
    },
    {
      id: 'MATH101',
      name: 'Calculus I',
      instructor: 'Dr. Jennifer Lee',
      credits: 4,
      semester: 'Fall 2023',
      grade: 'B+',
    },
  ];

  const getGradeColor = (grade) => {
    if (grade === 'A' || grade === 'A-') return 'text-green-600 bg-green-50';
    if (grade === 'B+' || grade === 'B') return 'text-blue-600 bg-blue-50';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-600 bg-yellow-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 80) return 'bg-blue-500';
    if (progress >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="current">Current Semester</option>
            <option value="past">Past Courses</option>
          </select>
        </div>
      </motion.div>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900">{currentCourses.length}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500">
              <SafeIcon icon={FiBook} className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Credits</p>
              <p className="text-2xl font-bold text-gray-900">
                {currentCourses.reduce((sum, course) => sum + course.credits, 0)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
              <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(currentCourses.reduce((sum, course) => sum + course.progress, 0) / currentCourses.length)}%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500">
              <SafeIcon icon={FiClock} className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current GPA</p>
              <p className="text-2xl font-bold text-gray-900">{student.gpa}</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-500">
              <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Courses List */}
      {selectedSemester === 'current' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-600">{course.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(course.grade)}`}>
                  {course.grade}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>
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
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Assignments: {course.completedAssignments}/{course.assignments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Past Courses</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {pastCourses.map((course) => (
              <div key={course.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{course.name}</h4>
                    <p className="text-sm text-gray-600">{course.id} • {course.instructor}</p>
                    <p className="text-sm text-gray-500">{course.semester}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{course.credits} Credits</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Courses;