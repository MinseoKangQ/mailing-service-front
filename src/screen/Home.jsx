import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/home/Header";
import Menu from "../components/home/Menu";
import "./Home.css";
import MailList from "../components/home/MailList";

const Home = () => {
  const [user, setUser] = useState(null);
  const [mails, setMails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const userName = localStorage.getItem("name");

    if (userId && userName) {
      setUser({ id: userId, name: userName });

      // 메일 데이터 가져오기
      const fetchMails = async () => {
        try {
          const response = await axios.get(
            `/mailing-service/api/mail/${userId}`
          );
          setMails(response.data); // 데이터를 상태에 저장
          console.log("메일 데이터:", response.data); // 콘솔에 데이터 출력
        } catch (error) {
          console.error("메일 데이터를 가져오는데 실패했습니다.", error);
        }
      };

      fetchMails();
    }
  }, []);

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
            <MailList mails={mails} />
          </div>
        </div>
      ) : (
        <div className="centered-container">
          <div>
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
