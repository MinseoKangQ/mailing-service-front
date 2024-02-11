import React, { useState } from "react";
import './MailForm.css';

const MailForm = ({ onSubmit }) => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ recipient, subject, isImportant, content });
  };

  return (
    <form onSubmit={handleSubmit} className="mail-form">
      <div className="form-control">
        중요 <span className={`star-icon ${isImportant ? 'filled' : ''}`} onClick={() => setIsImportant(!isImportant)}>&#9734;</span>
      </div>
      <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="받는 사람" />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="제목" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <button type="submit">전송</button>
    </form>
  );
};

export default MailForm;
