import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="centered-container">
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>
      <Link to="/signup">계정이 없으신가요? 회원가입</Link>
    </div>
  );
};

export default Login;