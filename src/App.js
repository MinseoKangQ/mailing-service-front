import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mailing-service/login" element={<Login />} />
        <Route path="/mailing-service/signup" element={<SignUp />} />
        <Route path="/mailing-service" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
