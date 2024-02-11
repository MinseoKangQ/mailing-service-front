import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 임포트합니다.
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 초기화합니다.

  const handleTitleClick = () => {
    navigate('/'); // 루트 경로로 이동합니다.
  };

  return (
    <header className="header">
      <div className="header-box">
        <h1 className="login-mailing-service-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          메일링 서비스
        </h1>
        {user && (
          <button className="logout-button" onClick={onLogout}>
            로그아웃
          </button>
        )}
      </div>
      {user && (
        <p className="login-mailing-service-welcome">
          {user.name}님 환영합니다
        </p>
      )}
    </header>
  );
};

export default Header;
