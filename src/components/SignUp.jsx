import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    pw: '',
    pw2: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('/mailing-service/api/signup', formData);
      console.log('회원가입 응답:', response.data);

      if (response.status === 201) { // HTTP 상태 코드가 CREATED (201) 인 경우
        navigate('/'); // 홈 페이지로 이동
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return (
    <div className="centered-container">
      <h1>회원가입 화면</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="아이디" onChange={handleChange} />
        <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} />
        <input type="password" name="pw2" placeholder="비밀번호 확인" onChange={handleChange} />
        <input type="text" name="name" placeholder="이름" onChange={handleChange} />
        <button type="submit">회원가입</button>
      </form>
      <Link to="/login">이미 계정이 있으신가요? 로그인</Link>
    </div>
  );
};

export default SignUp;
