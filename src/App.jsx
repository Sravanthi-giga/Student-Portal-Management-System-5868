import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Payment from './pages/Payment';
import Results from './pages/Results';
import Schedule from './pages/Schedule';
import Notices from './pages/Notices';
import DropSemester from './pages/DropSemester';
import { StudentProvider } from './context/StudentContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <StudentProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuClick={() => setSidebarOpen(true)} />
            
            <main className="flex-1 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/notices" element={<Notices />} />
                  <Route path="/drop-semester" element={<DropSemester />} />
                </Routes>
              </motion.div>
            </main>
          </div>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;