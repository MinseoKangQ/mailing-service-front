import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MailDetail from '../components/MailDetail';
import './MailPage.css';

const MailPage = () => {
  const [user, setUser] = useState(() => {
    // 로컬 스토리지에서 사용자 정보 불러오기
    const savedId = localStorage.getItem("id");
    const savedName = localStorage.getItem("name");
    return savedId && savedName ? { id: savedId, name: savedName } : null;
  });
  const navigate = useNavigate();

  const onLogout = () => {
    // 로그아웃 처리 : 로컬 스토리지에서 사용자 정보를 삭제하고, 홈페이지로 리디렉션
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="mail-page-container">
      <Header user={user} onLogout={onLogout} />
      <div className="mail-detail-container">
        <MailDetail />
      </div>
    </div>
  );
};

export default MailPage;
