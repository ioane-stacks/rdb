import React from "react";
import ResumeFields from "../ResumeFields/ResumeFields";
import RuntimeResume from "../RuntimeResume/RuntimeResume";
import "./LayoutStyle/layoutStyle.css";

const LayOut = () => {
  return (
    <div className="layout">
      <div className="resume_fields">
        <ResumeFields />
      </div>
      <div className="runtime_resume2">
        <RuntimeResume />
      </div>
    </div>
  );
};

export default LayOut;
