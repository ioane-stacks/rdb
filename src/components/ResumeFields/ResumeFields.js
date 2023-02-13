import React, { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Experience from "./Experience/Experience.js";
import Education from "./Education/Education.js";
import ResumeResult from "../ResumeResult/ResumeResult";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { valueContext } from "../../App";
const ResumeFields = () => {
  const navigate = useNavigate();

  const { values, setValues } = useContext(valueContext);

  useEffect(() => {
    const localData = localStorage.getItem("form1");
    if (localData) setValues(JSON.parse(localData));
  }, []);

  const handleNextPage = () => {
    const _currentPage = { ...values };
    if (_currentPage.currentPage < 2) {
      _currentPage.currentPage += 1;
    }
    setValues(_currentPage);
    localStorage.setItem("form1", JSON.stringify(_currentPage));
  };
  const handlePreviousPage = () => {
    const _currentPage = { ...values };
    _currentPage.currentPage -= 1;
    setValues(_currentPage);
    localStorage.setItem("form1", JSON.stringify(_currentPage));
  };
  const pages = [
    <PersonalInformation handleNextPage={handleNextPage} />,
    <Experience
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,
    <Education
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,

  ];
  return (
    <div>
      <div style={myStyle.backToStartPage} onClick={() => navigate("/")}>
        <IoIosArrowBack />
      </div>
      <div style={myStyle.currentField}>{pages[values.currentPage]}</div>
    </div>
  );
};

const myStyle = {
  backToStartPage: {
    position: "absolute",
    top: "45px",
    left: "48px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    cursor: "pointer",
  },
  currentField: {
    position: "absolute",
    top: "47px",
    left: "149px",
    width: "798px",
  },
};

export default ResumeFields;
