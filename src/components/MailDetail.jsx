import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MailDetail = () => {
  const { userId, mailId } = useParams();
  const [mail, setMail] = useState(null);

  useEffect(() => {
    const fetchMailDetail = async () => {
      try {
        const response = await axios.get(`/mailing-service/api/mail/${userId}/${mailId}`);
        setMail(response.data);
      } catch (error) {
        console.error("메일 상세 정보를 가져오는데 실패했습니다.", error);
      }
    };

    fetchMailDetail();
  }, [userId, mailId]);

  return (
    <div>
      {mail && (
        <div>
          <h1>{mail.title}</h1>
          <p>{mail.content}</p>
          {/* 추가 정보 표시 */}
        </div>
      )}
    </div>
  );
};

export default MailDetail;
