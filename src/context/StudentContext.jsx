import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    id: 'STU001',
    name: 'John Doe',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    address: '123 University Ave, College Town, CT 06511',
    program: 'Computer Science',
    year: 'Junior',
    semester: 'Fall 2024',
    gpa: 3.75,
    credits: 89,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    enrolledCourses: [
      { id: 'CS301', name: 'Data Structures', credits: 3, grade: 'A-' },
      { id: 'CS302', name: 'Algorithms', credits: 3, grade: 'B+' },
      { id: 'CS303', name: 'Database Systems', credits: 3, grade: 'A' },
      { id: 'MATH201', name: 'Discrete Mathematics', credits: 3, grade: 'B' },
    ],
    paymentHistory: [
      { id: 1, date: '2024-01-15', amount: 2500, description: 'Tuition Fee - Spring 2024', status: 'Paid' },
      { id: 2, date: '2024-08-15', amount: 2500, description: 'Tuition Fee - Fall 2024', status: 'Paid' },
      { id: 3, date: '2024-12-15', amount: 2500, description: 'Tuition Fee - Spring 2025', status: 'Pending' },
    ]
  });

  const updateStudent = (updates) => {
    setStudent(prev => ({ ...prev, ...updates }));
  };

  return (
    <StudentContext.Provider value={{ student, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};