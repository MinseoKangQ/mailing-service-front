import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import MailPage from './screen/MailPage';
import MailNew from './screen/MailNew';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/mail/:userId/:mailId" element={<MailPage />} />
            <Route path="/new" element={<MailNew />} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
