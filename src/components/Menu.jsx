import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <button className="menu-button">메일 쓰기</button>
      <button className="menu-button">내게 쓰기</button>
      <div className="menu-list">
        <div className="menu-item">전체 메일</div>
        <div className="menu-item">받은 메일함</div>
        <div className="menu-item">보낸 메일함</div>
        <div className="menu-item">내게 쓴 메일함</div>
      </div>
    </div>
  );
};

export default Menu;
