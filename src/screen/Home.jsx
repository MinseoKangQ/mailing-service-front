// Home.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MailList from "../components/MailList";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const [mails, setMails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const userName = localStorage.getItem("name");
    if (userId && userName) {
      setUser({ id: userId, name: userName });
      // 초기 로드 시 받은 메일함을 기본으로 불러옵니다.
      fetchMails('received');
    }
  }, []);

  const fetchMails = async (mailType) => {
    const userId = localStorage.getItem("id");
    let endpoint = `/mailing-service/api/mail/${mailType}/${userId}`;
    try {
      const response = await axios.get(endpoint);
      setMails(response.data);
    } catch (error) {
      console.error("Failed to fetch mails", error);
    }
  };

  return (
    <div>
      <Header user={user} onLogout={() => {
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        setUser(null);
        navigate("/");
      }} />
      {user ? (
        <div className="centered-body-container">
          <div className="menu-section">
            <Menu onFetchMails={fetchMails} />
          </div>
          <div className="mail-list-section">
            <MailList mails={mails} />
          </div>
        </div>
      ) : (
        <div className="centered-container">
          <Link to="/login"><button>로그인</button></Link>
          <Link to="/signup"><button>회원가입</button></Link>
        </div>
      )}
    </div>
  );
};

export default Home;
