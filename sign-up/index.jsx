import React from "react";
import divider from "./divider.svg";
import "./style.css";
import vector from "./vector.svg";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="frame">
        <div className="logo">
          <img className="vector" alt="Vector" src={vector} />

          <div className="text-wrapper">Risk Finder</div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="top">
              <div className="text">
                <div className="div">Sign Up</div>
              </div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-2">아이디 입력</div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-3">비밀번호 입력</div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-3">비밀번호 재입력</div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-3">이메일 주소</div>
            </div>

            <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-4">가입하기</div>
              </div>
            </div>
          </div>

          <img className="divider" alt="Divider" src={divider} />

          <div className="card-2">
            <div className="frame-4">
              <div className="text-wrapper-5">회원이신가요?</div>

              <div className="frame-5">
                <div className="text-wrapper-6">로그인</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
