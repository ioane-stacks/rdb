import React, { useState } from "react";
import "./ExperienceStyle/experienceStyle.css";
import NewExperience from "./NewExperience";
const Experience = ({ handleNextPage, handlePreviousPage }) => {
  const [experiences, setExperiences] = useState([<NewExperience />]);

  const handleAddExperience = () => {
    setExperiences([...experiences, <NewExperience />]);
  };
  return (
    <>
      <div className="header_information">
        <p className="title">გამოცდილება</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          2/3
        </div>
      </div>
      {experiences.map(newform => {
        return newform;
      })}
      <button className="more_experience" onClick={handleAddExperience}>
        მეტი გამოცდილების დამატება
      </button>
      <div className="btns_container">
        <button onClick={handlePreviousPage}>უკან</button>
        <button onClick={handleNextPage}>შემდეგი</button>
      </div>
    </>
  );
};

export default Experience;
