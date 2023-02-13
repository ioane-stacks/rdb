import React from "react";
import "./StartPageStyle/startPageStyle.css";
import BackgroundImage from "../Assets/startPageImage.png";
import RedberryLogo from "../Assets/logo.svg";
import CircleLogo from "../Assets/circle.svg";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { valueContext } from "../../App";
const StartPage = () => {
  const navigate = useNavigate();
  const { values, setValues } = useContext(valueContext);

  const handleNavigate = () => {
    localStorage.setItem("form1", JSON.stringify(values));
    navigate('layout');
  }
  return (
    <div
      className="startPageStyle"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <img src={RedberryLogo} className="redberry" alt="" />
      <div className="line"></div>
      <img src={CircleLogo} alt="logo" className="circle_logo" />
      <button className="add_resume_btn" onClick={handleNavigate}>რეზიუმეს დამატება</button>
    </div>
  );
};

export default StartPage;
