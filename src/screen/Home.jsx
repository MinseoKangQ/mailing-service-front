import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "./Home.css";
import MailList from "../components/MailList";

const Home = () => {
  const [user, setUser] = useState(null);
  const [mails, setMails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const userName = localStorage.getItem("name");

    if (userId && userName) {
      setUser({ id: userId, name: userName });
      fetchMails(userId);
    }
  }, []);

  const fetchMails = async (userId) => {
    try {
      const response = await axios.get(`/mailing-service/api/mail/${userId}`);
      setMails(response.data); // 데이터를 상태에 저장
    } catch (error) {
      console.error("메일 데이터를 가져오는데 실패했습니다.", error);
    }
  };

  const handleDeleteSelectedMails = async (selectedMailIds) => {
    const userId = localStorage.getItem("id");
    try {
      await Promise.all(selectedMailIds.map(mailId =>
        axios.delete(`/mailing-service/api/mail/${mailId}`)
      ));
      // 성공적으로 삭제 후 메일 목록 새로고침
      fetchMails(userId);
    } catch (error) {
      console.error("메일 삭제 중 오류 발생:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      {user ? (
        <div className="centered-body-container">
          <div className="menu-section">
            <Menu />
          </div>
          <div className="mail-list-section">
            {/* <MailList mails={mails} onDeleteSelectedMails={handleDeleteSelectedMails} /> */}
            <MailList mails={mails} onDeleteSelectedMails={handleDeleteSelectedMails} />
          </div>
        </div>
      ) : (
        <div className="centered-container">
          <Link to="/login">
            <button>로그인</button>
          </Link>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
