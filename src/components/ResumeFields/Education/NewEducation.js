import React, { useEffect } from "react";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";
import axios from "axios";

const NewEducation = () => {
  const [university, setUniversity] = useState("");
  const [universityStyle, setUniversityStyle] = useState("");

  const { values, setValues } = useContext(valueContext);

  useEffect(() => {
    const _education = { ...values };
    axios.get("https://resume.redberryinternship.ge/api/degrees")
      .then(data => {
        if (data.status === 200) {
          _education.values = data.data;
          setValues(_education);
          localStorage.setItem("form1", JSON.stringify(_education));
        }
      })
      .catch(err => console.log(err));
  }, [])

  const [educationDescription, setEducationDescription] = useState('')
  const [educationDescriptionStyle, setEducationDescriptionStyle] = useState('')
  const universityValidation = (e) => {
    const university = e.target.value;
    setUniversity(university);
    if (university.length >= 2) {
      setUniversityStyle("success");
    } else if (university.length && university.length < 2) {
      setUniversityStyle("error");
    } else {
      setUniversityStyle("default");
    }
  };
  const educationDescriptionValidation = (e) => {
    const educationDescription = e.target.value;
    setEducationDescription(educationDescription);
    if (educationDescription.length) {
      setEducationDescriptionStyle("success");
    }

  };

  return (
    <div className="experience">
      <form action="">
        <div className="input_container">
          <label htmlFor="">სასწავლებელი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={universityValidation}
              value={university}
              type="text"
              placeholder="სასწავლებელი"
              style={
                universityStyle == "error"
                  ? { border: "1px solid #EF5050" }
                  : universityStyle == "success"
                    ? { border: "1px solid #98E37E" }
                    : universityStyle == "default"
                      ? { border: "1px solid #bcbcbc" }
                      : null
              }
            />
            {universityStyle === "error" ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : universityStyle == "success" ? (
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
            <label htmlFor="">ხარისხი</label>
            <div className="input_icon">
              <input
                // onChange={usernameValidation}
                // value={firstname}
                // style={
                //   firstname.length && firstnameError
                //     ? { border: "1px solid #EF5050" }
                //     : { border: "1px solid #bcbcbc" }
                // }
                type="date"
                className="data_input"
                placeholder="აირჩიეთ ხარისხი"
              />

              {/* {firstname.length && firstnameError ? (
                    <div className="icon_container">
                      <img src={Vector} alt="" />
                    </div>
                  ) : firstname.length && !firstnameError ? (
                    <div
                      className="icon_container"
                      style={{ backgroundColor: "#98e37e" }}
                    >
                      <BsCheck />
                    </div>
                  ) : null} */}
            </div>
          </div>
          <div className="child_container">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <div className="input_icon">
              <input
                className="data_input"
                type="date"

              // value={lastname}
              // onChange={lastnameValidation}

              // style={
              //   lastname.length && lastnameError
              //     ? { border: "1px solid #EF5050" }
              //     : lastname.length && !lastnameError
              //     ? { border: "1px solid #98E37E" }
              //     : { border: "1px solid #bcbcbc" }
              // }
              />
              {/* {lastname.length && lastnameError ? (
                    <div className="icon_container">
                      <img src={Vector} alt="" />
                    </div>
                  ) : lastname.length && !lastnameError ? (
                    <div
                      className="icon_container"
                      style={{ backgroundColor: "#98e37e" }}
                    >
                      <BsCheck />
                    </div>
                  ) : null} */}
            </div>
          </div>
        </div>
        <div className="textarea_container">
          <label>აღწერა</label>
          <textarea
            onChange={educationDescriptionValidation}
            // value={educationDescription}
            style={

              educationDescription.length ? { border: "1px solid #98E37E" } : null
              // about.length && aboutError
              //   ? { border: "1px solid #EF5050" }
              //   : about.length && !aboutError
              //   ? { border: "1px solid #98E37E" }
              //   : { border: "1px solid #bcbcbc" }  
            }
            name="about"
            placeholder="განათლების აღწერა"
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

export default NewEducation;
