import React, { useEffect, useState } from "react";
import "./PersonalInformationStyle/personalInformationStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";

const PersonalInformation = ({ handleNextPage }) => {
  const {
    values,
    setValues,
  } = useContext(valueContext);

  useEffect(() => {
    const localData = localStorage.getItem("form1");
    if (localData) setValues(JSON.parse(localData));
  }, [])

  const usernameValidation = (e) => {
    const _personalInformation = { ...values };
    const firstname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    _personalInformation.firstname = firstname;
    _personalInformation.firstnameError = !firstname.match(regex);
    setValues(_personalInformation);
    localStorage.setItem("form1", JSON.stringify(_personalInformation));
  };

  const lastnameValidation = (e) => {
    const _personalInformation = { ...values };
    const lastname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    _personalInformation.lastname = lastname;
    _personalInformation.lastnameError = !lastname.match(regex);
    setValues(_personalInformation)
    localStorage.setItem("form1", JSON.stringify(_personalInformation));
  };

  const aboutValidation = (e) => {
    const _personalInformation = { ...values };
    const about = e.target.value;

    _personalInformation.about = about;
    setValues(_personalInformation);
    localStorage.setItem("form1", JSON.stringify(_personalInformation));
  };

  const emailValidation = (e) => {
    const _personalInformation = { ...values };
    const email = e.target.value;
    const emailRegex = /^\w+([.-]?\w+)*@redberry.ge$/;

    _personalInformation.email = email;
    _personalInformation.emailError = !email.match(emailRegex);
    setValues(_personalInformation);
    localStorage.setItem("form1", JSON.stringify(_personalInformation));
  };

  //   let mobile = e.target.value;
  //   mobile = mobile.replace(/[^\d+]/g, "");
  //   let phoneNumberLength = mobile.length;
  //   if (phoneNumberLength < 5) {
  //     setMobile(mobile);
  //   }
  //   if (phoneNumberLength < 14) {
  //     let formatedPhoneNumber = `${mobile.slice(0, 4)} ${mobile.slice(
  //       4,
  //       7
  //     )} ${mobile.slice(7, 9)} ${mobile.slice(9, 11)} ${mobile.slice(11, 13)}`;
  //     setMobile(formatedPhoneNumber);
  //   }
  // };
  const checkPhoneNumber = (e) => {
    const _personalInformation = { ...values };

    if (e.target.value.length < 18) {
      const _mobile = e.target.value.replace(/[^+|0-9]/g, '');
      if (_mobile.startsWith('+995') && _mobile.length === 13) {

        let ph = '';
        for (let i = 0; i < _mobile.length; i++) {
          ph += _mobile[i];
          if (i > 0) {
            if (i === 3) ph += ' ';
            if (i === 6) ph += ' ';
            if (i === 8) ph += ' ';
            if (i === 10) ph += ' ';
            _personalInformation.mobile = ph;
            _personalInformation.mobileError = false;
          }
        }
      }
      if (_mobile.length !== 13) {
        _personalInformation.mobile = _mobile;
        _personalInformation.mobileError = true;
      }
      setValues(_personalInformation);
      localStorage.setItem("form1", JSON.stringify(_personalInformation));
    }
  }

  const uploadPhoto = (e) => {
    const _personalInformation = { ...values };
    if (e.target.files && e.target.files[0]) {
      const fr = new FileReader();
      fr.onload = (e) => {
        const photo = e.target.result;
        _personalInformation.photo = photo;
        setValues(_personalInformation);
        localStorage.setItem("form1", JSON.stringify(_personalInformation));
      }
      fr.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <>
      <div className="header_information">
        <p className="title">პირადი ინფო</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          1/3
        </div>
      </div>
      <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <div className="two_input_container">
          <div className="child_container">
            <label htmlFor="">სახელი</label>
            <div className="input_icon">
              <input
                name="firstname"
                onChange={usernameValidation}
                value={values.firstname}
                style={
                  values.firstname.length && values.firstnameError
                    ? { border: "1px solid #EF5050" }
                    : values.firstname.length && !values.firstnameError
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />

              {values.firstname.length && values.firstnameError ? (
                <div className="icon_container">
                  <img src={Vector} alt="" />
                </div>
              ) : values.firstname.length && !values.firstnameError ? (
                <div
                  className="icon_container"
                  style={{ backgroundColor: "#98e37e" }}
                >
                  <BsCheck />
                </div>
              ) : null}
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="child_container">
            <label htmlFor="">გვარი</label>
            <div className="input_icon">
              <input
                value={values.lastname}
                onChange={lastnameValidation}
                name="lastname"
                style={
                  values.lastname.length && values.lastnameError
                    ? { border: "1px solid #EF5050" }
                    : values.lastname.length && !values.lastnameError
                      ? { border: "1px solid #98E37E" }
                      : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />
              {values.lastname.length && values.lastnameError ? (
                <div className="icon_container">
                  <img src={Vector} alt="" />
                </div>
              ) : values.lastname.length && !values.lastnameError ? (
                <div
                  className="icon_container"
                  style={{ backgroundColor: "#98e37e" }}
                >
                  <BsCheck />
                </div>
              ) : null}
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="upload_image_container">
          <p>პირადი ფოტოს ატვირთვა</p>
          <input type="file" style={{ display: "none" }} id="uploadphoto" onChange={uploadPhoto} />
          <label htmlFor="uploadphoto">ატვირთვა</label>
        </div>
        <div className="textarea_container">
          <label>ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            onChange={aboutValidation}
            value={values.about}
            style={
              values.about.length
                ? { border: "1px solid #98E37E" }
                : { border: "1px solid #bcbcbc" }
            }
            name="about"
            placeholder="ზოგადი ინფო შენს შესახებ"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="input_container">
          <label htmlFor="email">ელ.ფოსტა</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={emailValidation}
              value={values.email}
              name="email"
              type="email"
              placeholder="someone@redberry.ge"
              style={
                values.email.length && values.emailError
                  ? { border: "1px solid #EF5050" }
                  : values.email.length && !values.emailError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
              }
            />
            {values.email.length && values.emailError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : values.email.length && !values.emailError ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="input_container">
          <label htmlFor="mobile">მობილური ნომერი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={checkPhoneNumber}
              value={values.mobile}
              name="mobile"
              type="text"
              placeholder="+995 551 12 34 56"
              style={
                values.mobile.length && values.mobileError
                  ? { border: "1px solid #EF5050" }
                  : values.mobile.length && !values.mobileError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
              }
            />
            {values.mobile && values.mobileError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : values.mobile.length && !values.mobileError ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          <div className="btn_container">
            <button className="next_page_btn" onClick={handleNextPage}>
              შემდეგი
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;
