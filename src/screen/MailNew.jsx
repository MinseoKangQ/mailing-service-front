import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MailForm from "../components/MailForm";

const MailNew = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="centered-body-container">
        <div className="menu-section">
          <Menu />
        </div>
        <div className="mail-form-section">
          <MailForm/>
        </div>
      </div>
    </div>
  );
};

export default MailNew;
