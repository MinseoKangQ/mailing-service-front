import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './MailForm.css';

const MailForm = ({ recipientDefault, recipientReadOnly }) => {
    const [recipient, setRecipient] = useState(recipientDefault);
    const [subject, setSubject] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    // recipientDefault와 recipientReadOnly 값의 변화에 반응합니다.
    useEffect(() => {
        setRecipient(recipientReadOnly ? recipientDefault : ''); // 내게 쓰기인 경우만 recipient 값을 유지합니다.
        // 제목과 내용을 초기화합니다.
        setSubject('');
        setContent('');
        // 중요 표시는 사용자가 매번 선택하도록 합니다.
        setIsImportant(false);
    }, [recipientDefault, recipientReadOnly]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('mailing-service/api/mail/send', {
                sender: localStorage.getItem('id'), // 예시: 로컬 스토리지에서 발송인 ID 가져오기
                receiver: recipient,
                title: subject,
                content: content,
                isImportant: isImportant,
            });

            if (response.status === 201) {
                alert('메일이 정상적으로 발송되었습니다!');
                navigate('/'); // 루트 경로로 이동
            }
        } catch (error) {
            console.error('메일 발송 오류:', error);
            alert('메일 발송에 실패했습니다.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mail-form">
            <div className="form-control">
                중요 <span className={`star-icon ${isImportant ? 'filled' : ''}`} onClick={() => setIsImportant(!isImportant)}>&#9734;</span>
            </div>
            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="받는 사람" readOnly={recipientReadOnly} />
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="제목" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
            <button type="submit">전송</button>
        </form>
    );
};

export default MailForm;
