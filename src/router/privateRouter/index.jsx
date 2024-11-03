import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login/login'; 
import Welcome from '../../pages/welcome/welcome';
import Atomic from '../../pages/atmoic/atmoic';
import UserProfile from '../../pages/profile/profile';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/atomic" element={<Atomic />} />
        <Route path="/profile" element={<UserProfile />} />
   
      </Routes>
    </Router>
  );
};

export default AppRouter;
