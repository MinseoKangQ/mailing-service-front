import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="centered-container">
      <h1>메일링 서비스</h1>
      <Link to="/mailing-service/login">
        <button>로그인</button>
      </Link>
      <Link to="/mailing-service/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default Home;
