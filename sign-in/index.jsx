import React from "react";
import divider from "./divider.svg";
import "./style.css";
import vector from "./vector.svg";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="frame">
        <div className="logo">
          <img className="vector" alt="Vector" src={vector} />

          <div className="text-wrapper">Risk Finder</div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="top">
              <div className="text">
                <div className="div">Log In</div>
              </div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-2">아이디</div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-3">비밀번호</div>
            </div>

            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-4">로그인</div>
              </div>
            </div>
          </div>

          <img className="divider" alt="Divider" src={divider} />

          <div className="card-2">
            <div className="frame-3">
              <div className="text-wrapper-5">아직 회원이 아니신가요?</div>

              <div className="frame-4">
                <div className="text-wrapper-6">회원가입</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
