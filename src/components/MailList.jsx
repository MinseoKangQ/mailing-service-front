import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MailList.css";

const MailList = ({ mails, onDeleteSelectedMails }) => {

  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const [selectedMails, setSelectedMails] = useState([]);

  const handleMailClick = async (mailId) => {
    try {
      await axios.put(`/mailing-service/api/mail/${userId}/${mailId}`);
      console.log(`메일 ${mailId}을(를) 읽음으로 표시함`);
    } catch (error) {
      console.error("메일 상태 업데이트 중 오류 발생:", error);
    }

    navigate(`/mail/${userId}/${mailId}`); // 메일 상세 페이지로 이동
  };

  const handleCheckboxChange = (mailId, isChecked) => {
    if (isChecked) {
      setSelectedMails(prev => [...prev, mailId]);
    } else {
      setSelectedMails(prev => prev.filter(id => id !== mailId));
    }
  };

  const handleDeleteSelectedMails = async () => {
    try {
      // 선택된 메일들을 삭제하는 API 요청
      await onDeleteSelectedMails(selectedMails);
      setSelectedMails([]); // 선택된 메일 목록 초기화
    } catch (error) {
      console.error("메일 삭제 중 오류 발생:", error);
    }
  };

  const sortedMails = mails.sort(
    (a, b) => new Date(b.sentAt) - new Date(a.sentAt)
  );

  return (
    <div className="MailList">
      <button className="delete-button" onClick={handleDeleteSelectedMails}>삭제</button>
      <table>
        <thead>
          <tr>
            <th>삭제</th>
            <th>읽음</th>
            <th>발신인</th>
            <th className="title">제목</th>
            <th>중요</th>
            <th>보낸 일시</th>
          </tr>
        </thead>
        <tbody>
          {sortedMails.map((mail, index) => (
            <tr key={index} className={mail.isRead ? "read" : ""}>
              <td>
                <input
                  type="checkbox"
                  onChange={e => handleCheckboxChange(mail.mailId, e.target.checked)}
                  checked={selectedMails.includes(mail.mailId)}
                />
              </td>
              <td>{mail.isRead ? "읽음" : "안 읽음"}</td>
              <td>{mail.sender}</td>
              <td className="title" onClick={() => handleMailClick(mail.mailId)} >{mail.title}</td>
              <td>{mail.isImportant ? "중요" : "중요 아님"}</td>
              <td>{new Date(mail.sentAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MailList;
