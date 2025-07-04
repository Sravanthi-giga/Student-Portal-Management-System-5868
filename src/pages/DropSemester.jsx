import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAlertTriangle, FiCalendar, FiDollarSign, FiBook, FiCheck, FiX, FiInfo } = FiIcons;

const DropSemester = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const dropReasons = [
    'Medical/Health Issues',
    'Financial Difficulties',
    'Family Emergency',
    'Academic Performance',
    'Work Commitments',
    'Personal Reasons',
    'Transfer to Another Institution',
    'Change of Academic Program',
    'Other',
  ];

  const currentSemester = {
    name: 'Fall 2024',
    courses: [
      { id: 'CS301', name: 'Data Structures', credits: 3 },
      { id: 'CS302', name: 'Algorithms', credits: 3 },
      { id: 'CS303', name: 'Database Systems', credits: 3 },
      { id: 'MATH201', name: 'Discrete Mathematics', credits: 3 },
    ],
    totalCredits: 12,
    tuitionPaid: 2500,
    refundAmount: 1250, // 50% refund
    withdrawalDeadline: '2024-12-15',
  };

  const consequences = [
    {
      title: 'Academic Impact',
      description: 'Your GPA will not be affected, but you will receive "W" grades for all courses.',
      icon: FiBook,
      color: 'text-blue-600',
    },
    {
      title: 'Financial Impact',
      description: `You may receive a partial refund of $${currentSemester.refundAmount.toLocaleString()} based on the withdrawal date.`,
      icon: FiDollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Enrollment Status',
      description: 'Your enrollment status will change to "Withdrawn" for the current semester.',
      icon: FiCalendar,
      color: 'text-orange-600',
    },
    {
      title: 'Future Registration',
      description: 'You may need to reapply for readmission to enroll in future semesters.',
      icon: FiInfo,
      color: 'text-purple-600',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedReason && agreedToTerms) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmDrop = () => {
    // Handle the actual drop semester logic here
    alert('Semester drop request submitted successfully!');
    setShowConfirmation(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3"
      >
        <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-red-500" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Drop Semester</h1>
          <p className="text-sm text-gray-600">Request to withdraw from all courses for the current semester</p>
        </div>
      </motion.div>

      {/* Warning Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-red-50 border border-red-200 rounded-xl p-6"
      >
        <div className="flex items-start space-x-3">
          <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 text-red-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">Important Notice</h3>
            <p className="text-red-700 mb-4">
              Dropping a semester is a serious decision that will affect your academic progress and financial aid eligibility. 
              Please consult with your academic advisor before proceeding.
            </p>
            <div className="bg-red-100 p-3 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Deadline:</strong> You must submit your withdrawal request by{' '}
                <span className="font-semibold">{new Date(currentSemester.withdrawalDeadline).toLocaleDateString()}</span>{' '}
                to be eligible for a partial refund.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Current Semester Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Semester: {currentSemester.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Enrolled Courses</h3>
            <div className="space-y-2">
              {currentSemester.courses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{course.name}</p>
                    <p className="text-sm text-gray-600">{course.id}</p>
                  </div>
                  <span className="text-sm text-gray-500">{course.credits} credits</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Financial Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Total Credits</span>
                <span className="font-medium text-gray-900">{currentSemester.totalCredits}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Tuition Paid</span>
                <span className="font-medium text-gray-900">${currentSemester.tuitionPaid.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-green-600">Potential Refund</span>
                <span className="font-medium text-green-700">${currentSemester.refundAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Consequences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Consequences of Dropping</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consequences.map((consequence, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={consequence.icon} className={`w-6 h-6 ${consequence.color} mt-1`} />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{consequence.title}</h3>
                  <p className="text-sm text-gray-600">{consequence.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Drop Request Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Drop Request Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Dropping <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            >
              <option value="">Select a reason</option>
              {dropReasons.map((reason) => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Please provide any additional details about your situation..."
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I understand the consequences of dropping the semester and acknowledge that this decision may affect my academic progress, 
              financial aid eligibility, and future enrollment. I have consulted with my academic advisor or understand that I should 
              do so before making this decision.
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={!selectedReason || !agreedToTerms}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit Drop Request
            </button>
            <button
              type="button"
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md mx-4"
          >
            <div className="text-center mb-6">
              <SafeIcon icon={FiAlertTriangle} className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Semester Drop</h3>
              <p className="text-gray-600">
                Are you sure you want to drop all courses for {currentSemester.name}? This action cannot be undone.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Summary:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Reason: {selectedReason}</li>
                <li>• Courses affected: {currentSemester.courses.length}</li>
                <li>• Potential refund: ${currentSemester.refundAmount.toLocaleString()}</li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDrop}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Confirm Drop
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DropSemester;