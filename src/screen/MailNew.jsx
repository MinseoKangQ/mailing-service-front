import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MailForm from "../components/MailForm";

const MailNew = () => {
    const [user, setUser] = useState(null);
    const [formKey, setFormKey] = useState(Date.now()); // formKey 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("id");
        const userName = localStorage.getItem("name");
        if (userId && userName) {
            setUser({ id: userId, name: userName });
        }
    }, []);

    const location = useLocation();
    const selfWrite = location.state?.selfWrite ?? false;
    const recipientDefault = selfWrite ? localStorage.getItem('id') : "";
    const recipientReadOnly = selfWrite;

    // "메일 쓰기" 또는 "내게 쓰기" 버튼을 클릭할 때마다 formKey를 갱신
    useEffect(() => {
        setFormKey(Date.now());
    }, [location.state]);

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
                        <Menu />
                    </div>
                    <div className="mail-form-section">
                        <MailForm
                            key={formKey} // key로 formKey 사용
                            recipientDefault={recipientDefault}
                            recipientReadOnly={recipientReadOnly}
                        />
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

export default MailNew;
