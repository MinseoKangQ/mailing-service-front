import React from "react";
import "./MailList.css";

const MailList = ({ mails }) => {
  const sortedMails = mails.sort(
    (a, b) => new Date(b.sentAt) - new Date(a.sentAt)
  );

  return (
    <div className="MailList">
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
              <td></td> {/* '삭제' 열에는 아무 내용도 포함하지 않음 */}
              <td>{mail.isRead ? "읽음" : "안 읽음"}</td>
              <td>{mail.sender}</td>
              <td className="title">{mail.title}</td>
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
