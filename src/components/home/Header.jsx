import React from "react";
import "./Header.css"; // 별도의 스타일시트

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="header-box">
        <h1 className="login-mailing-service-title">메일링 서비스</h1>
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
