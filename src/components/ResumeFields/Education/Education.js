import React, { useState } from "react";
import NewEducation from "./NewEducation";
const Education = ({ handleNextPage, handlePreviousPage }) => {
  const [educations, setEducations] = useState([<NewEducation />]);

  const handleAddExperience = () => {
    setEducations([...educations, <NewEducation />]);
  };
  return (
    <>
      <div className="header_information">
        <p className="title">განათლება</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          3/3
        </div>
      </div>

      {educations.map(newform => {
        return newform;
      })}
      <button className="more_experience" onClick={handleAddExperience}>
       სხვა სასწავლებლის დამატება
      </button>
      <div className="btns_container">
        <button onClick={handlePreviousPage}>უკან</button>
        <button onClick={handleNextPage}>დასრულება</button>
      </div>
    </>
  );
};

export default Education;
