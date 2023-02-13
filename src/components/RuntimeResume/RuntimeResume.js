import React, { useEffect } from "react";
import "./RuntimeStyle/runtimeStyle.css";
import Icon1 from "../Assets/mailIcon.svg";
import Icon2 from "../Assets/phoneIcon.svg";

import { useContext } from "react";
import { valueContext } from "../../App";


const RuntimeResume = () => {

  const { values } = useContext(valueContext);


  return (
    <div className="runtime_resume_conainer">
      <div className="runtime_resume">
        <div className="section1">
          <div className="section1_left_container">
            <p className="name_surname">{values.firstname} {values.lastname}</p>
            <div className="gmail_phone">
              <div className="each_cont">
                <img src={Icon1} alt="" />
                <p>iafofkhadze@gmail.com</p>
              </div>
              <div className="each_cont">
                <img src={Icon1} alt="" />
                <p>+995 571 15 30 74</p>
              </div>
            </div>
            <p className="about_me">ჩემ შესახებ</p>
            <p className="about_me_text">
              {" "}
              ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
            </p>
          </div>
          <div className="section1_right_container">
            <div className="image_container" style={{ backgroundImage: `url(${values.photo})` }}>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default RuntimeResume;
