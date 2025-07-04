import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useStudent } from '../context/StudentContext';

const { FiAward, FiTrendingUp, FiTrendingDown, FiBarChart, FiDownload, FiCalendar } = FiIcons;

const Results = () => {
  const { student } = useStudent();
  const [selectedSemester, setSelectedSemester] = useState('Fall 2024');

  const semesterResults = {
    'Fall 2024': {
      courses: [
        { id: 'CS301', name: 'Data Structures', credits: 3, grade: 'A-', points: 3.67, percentage: 88 },
        { id: 'CS302', name: 'Algorithms', credits: 3, grade: 'B+', points: 3.33, percentage: 85 },
        { id: 'CS303', name: 'Database Systems', credits: 3, grade: 'A', points: 4.0, percentage: 92 },
        { id: 'MATH201', name: 'Discrete Mathematics', credits: 3, grade: 'B', points: 3.0, percentage: 82 },
      ],
      gpa: 3.5,
      totalCredits: 12,
    },
    'Spring 2024': {
      courses: [
        { id: 'CS201', name: 'Programming Fundamentals', credits: 3, grade: 'A', points: 4.0, percentage: 94 },
        { id: 'CS202', name: 'Object-Oriented Programming', credits: 3, grade: 'A-', points: 3.67, percentage: 89 },
        { id: 'MATH101', name: 'Calculus I', credits: 4, grade: 'B+', points: 3.33, percentage: 87 },
        { id: 'ENG101', name: 'English Composition', credits: 3, grade: 'A', points: 4.0, percentage: 93 },
      ],
      gpa: 3.75,
      totalCredits: 13,
    },
    'Fall 2023': {
      courses: [
        { id: 'CS101', name: 'Introduction to Computing', credits: 3, grade: 'A', points: 4.0, percentage: 95 },
        { id: 'MATH100', name: 'Pre-Calculus', credits: 3, grade: 'B+', points: 3.33, percentage: 86 },
        { id: 'PHYS101', name: 'Physics I', credits: 4, grade: 'B', points: 3.0, percentage: 83 },
        { id: 'HIST101', name: 'World History', credits: 3, grade: 'A-', points: 3.67, percentage: 90 },
      ],
      gpa: 3.5,
      totalCredits: 13,
    },
  };

  const semesters = Object.keys(semesterResults);
  const currentResults = semesterResults[selectedSemester];

  const getGradeColor = (grade) => {
    if (grade === 'A' || grade === 'A-') return 'text-green-600 bg-green-50';
    if (grade === 'B+' || grade === 'B') return 'text-blue-600 bg-blue-50';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const calculateCumulativeGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    Object.values(semesterResults).forEach(semester => {
      semester.courses.forEach(course => {
        totalPoints += course.points * course.credits;
        totalCredits += course.credits;
      });
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };

  const cumulativeGPA = calculateCumulativeGPA();

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-gray-900">Academic Results</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {semesters.map(semester => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Download Transcript</span>
          </button>
        </div>
      </motion.div>

      {/* GPA Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Semester GPA</p>
              <p className="text-2xl font-bold text-gray-900">{currentResults.gpa}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500">
              <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Cumulative GPA</p>
              <p className="text-2xl font-bold text-gray-900">{cumulativeGPA}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
              <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Credits Earned</p>
              <p className="text-2xl font-bold text-gray-900">{currentResults.totalCredits}</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500">
              <SafeIcon icon={FiBarChart} className="w-6 h-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Class Rank</p>
              <p className="text-2xl font-bold text-gray-900">15/120</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-500">
              <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Course Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Course Results - {selectedSemester}</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentResults.courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.name}</div>
                    <div className="text-sm text-gray-500">{course.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getPercentageColor(course.percentage)}`}>
                      {course.percentage}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.points.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* GPA Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">GPA Trend</h3>
        <div className="space-y-4">
          {semesters.map((semester, index) => (
            <div key={semester} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-900">{semester}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {semesterResults[semester].totalCredits} credits
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {semesterResults[semester].gpa}
                </span>
                {index > 0 && (
                  <SafeIcon 
                    icon={semesterResults[semester].gpa >= semesterResults[semesters[index - 1]].gpa ? FiTrendingUp : FiTrendingDown}
                    className={`w-4 h-4 ${
                      semesterResults[semester].gpa >= semesterResults[semesters[index - 1]].gpa 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Results;