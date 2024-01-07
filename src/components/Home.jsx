import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');
    if (userId && userName) {
      setUser({ id: userId, name: userName });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="centered-container">
      <h1>메일링 서비스</h1>
      {user ? ( // 로컬 스토리지에 id와 name 값이 있다면 -> 로그인 한 상태
        <>
          <p>{user.name} 님 환영합니다</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : ( // 그렇지 않다면 -> 로그인 하지 않은 상태
        <>
          <Link to="/login">
            <button>로그인</button>
          </Link>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
