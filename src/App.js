import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';



import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Projects from './pages/Projects';
import Files from './pages/Files';
import Courses from './pages/Courses';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainLayout}>
        <Sidebar />
        <div className={styles.content}>
        <Dashboard />
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/files" element={<Files />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
