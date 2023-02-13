import StartPage from "./components/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { createContext, useState } from "react";

export const valueContext = createContext(null);

function App() {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    about: "",
    email: "",
    mobile: "",
    photo: "",

    firstnameError: null,
    lastnameError: null,
    emailError: null,
    mobileError: null,
    /*END PERSONAL INFO*/

    jobPosition: "",
    employer: "",
    jobDescription: "",
    startDate: "",
    endDate: "",

    jobPositionStyle: "",
    employerStyle: "",
    jobDescriptionStyle: "",

    /*END EXPERIENCE INFO*/
    degree: "",

    currentPage: 0,
  });

  return (
    <valueContext.Provider
      value={{
        values,
        setValues,
      }}
    >
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="layout" element={<Layout />} />
      </Routes>
    </valueContext.Provider>
  );
}

export default App;
