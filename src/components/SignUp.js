import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="centered-container">
      <h1>회원가입 화면</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <input type="text" placeholder="이름" />
      <button>회원가입</button>
      <Link to="/mailing-service/login">이미 계정이 있으신가요? 로그인</Link>
    </div>
  );
};

export default SignUp;