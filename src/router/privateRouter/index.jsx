import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login/login'; // Make sure you are importing the Login component correctly
import Welcome from '../../pages/welcome/welcome';
import Atomic from '../../pages/atmoic/atmoic';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/atomic" element={<Atomic />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
