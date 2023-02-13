import React, { useEffect } from "react";
import { useState } from "react";
import "./ExperienceStyle/experienceStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";
const NewExperience = () => {

  const { values, setValues } = useContext(valueContext);

  useEffect(() => {
    const localData = localStorage.getItem("form1");
    if (localData) setValues(JSON.parse(localData));
  }, []);

  const jobPositionValidation = (e) => {
    const _experience = { ...values };

    const jobPosition = e.target.value;
    _experience.jobPosition = jobPosition;
    if (jobPosition.length >= 2) {
      _experience.jobPositionStyle = "success";
    } else if (jobPosition.length && jobPosition.length < 2) {
      _experience.jobPositionStyle = "error";
    } else {
      _experience.jobPositionStyle = "defaullt";
    }
    setValues(_experience);
    localStorage.setItem("form1", JSON.stringify(_experience));
  };
  const employerValidation = (e) => {
    const _experience = { ...values };
    const employer = e.target.value;
    _experience.employer = employer;
    if (employer.length >= 2) {
      _experience.employerStyle = "success";
    } else if (employer.length && employer.length < 2) {
      _experience.employerStyle = "error";
    } else {
      _experience.employerStyle = "default";
    }
    setValues(_experience);
    localStorage.setItem("form1", JSON.stringify(_experience));
  };
  const jobDescriptionValidation = (e) => {
    const _experience = { ...values };
    const jobDescription = e.target.value;
    _experience.jobDescription = jobDescription;
    if (jobDescription.length) {
      _experience.jobDescriptionStyle = "success";
    }
    setValues(_experience);
    localStorage.setItem("form1", JSON.stringify(_experience));
  };

  const startDate = (e) => {
    const _experience = { ...values };
    _experience.startDate = e.target.value;
    setValues(_experience);
    localStorage.setItem("form1", JSON.stringify(_experience));
  }

  const endDate = (e) => {
    const _experience = { ...values };
    _experience.endDate = e.target.value;

    setValues(_experience);
    localStorage.setItem("form1", JSON.stringify(_experience));
  }

  return (
    <div className="experience">
      <form action="">
        <div className="input_container">
          <label htmlFor="">თანამდებობა</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={jobPositionValidation}
              value={values.jobPosition}
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              style={
                values.jobPositionStyle == "error"
                  ? { border: "1px solid #EF5050" }
                  : values.jobPositionStyle == "success"
                    ? { border: "1px solid #98E37E" }
                    : values.jobPosition == "default"
                      ? { border: "1px solid #bcbcbc" }
                      : null
              }
            />
            {values.jobPositionStyle === "error" ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : values.jobPositionStyle == "success" ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>მინიმუმ ორი სიმბოლო</p>
        </div>
        <div className="input_container">
          <label htmlFor="">დამსაქმებელი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={employerValidation}
              value={values.employer}
              type="text"
              placeholder="დამსაქმებელი"
              style={
                values.employerStyle == "error"
                  ? { border: "1px solid #EF5050" }
                  : values.employerStyle == "success"
                    ? { border: "1px solid #98E37E" }
                    : values.employerStyle == "default"
                      ? { border: "1px solid #bcbcbc" }
                      : null
              }
            />
            {values.employerStyle === "error" ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : values.employerStyle == "success" ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>მინიმუმ ორი სიმბოლო</p>
        </div>

        <div className="two_input_container">
          <div className="child_container">
            <label htmlFor="">დაწყების რიცხვი</label>
            <div className="input_icon">
              <input
                value={values.startDate}
                onChange={startDate}
                type="date"
                className="data_input"
              />
            </div>
          </div>
          <div className="child_container">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <div className="input_icon">
              <input
                className="data_input"
                type="date"
                value={values.endDate}
                onChange={endDate}
              />
            </div>
          </div>
        </div>
        <div className="textarea_container">
          <label>აღწერა</label>
          <textarea
            onChange={jobDescriptionValidation}
            value={values.jobDescription}
            className='jobdescription'
            style={
              values.jobDescription?.length ? { border: "1px solid #98E37E" } : null
            }
            name="about"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#C1C1C1",
            marginTop: "58px",
          }}
        ></div>
      </form>
    </div>
  );
};

export default NewExperience;
