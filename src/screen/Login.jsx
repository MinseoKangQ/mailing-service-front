import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    id: "",
    pw: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("/mailing-service/api/login", formData);
      console.log("로그인 응답:", response.data);

      if (response.status === 200) {
        // 예시: 로그인 성공 시 서버로부터 받은 사용자 식별자나 토큰을 저장
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.name);

        navigate("/"); // 홈 페이지로 이동
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  return (
    <div className="centered-container">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
        />
        <input
          type="password"
          name="pw"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <button type="submit">로그인</button>
      </form>
      <Link to="/signup">계정이 없으신가요? 회원가입</Link>
    </div>
  );
};

export default Login;
