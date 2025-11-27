import React from "react";
import divider from "./divider.svg";
import "./style.css";

export const CustomerDetail = () => {
  return (
    <div className="customer-detail">
      <div className="frame">
        <div className="dashboard-copy">abcd1234</div>

        <div className="div">
          <div className="frame-2">
            <div className="text-wrapper">이름</div>

            <div className="text-wrapper-2">Microsoft</div>
          </div>

          <div className="frame-2">
            <div className="text-wrapper">전화번호</div>

            <div className="text-wrapper-3">010-1234-5678</div>
          </div>

          <div className="frame-2">
            <div className="text-wrapper">이메일</div>

            <div className="text-wrapper-3">abcd@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="frame-3">
        <div className="div-wrapper">
          <div className="text-wrapper-4">안내 메일 발송</div>
        </div>

        <img className="divider" alt="Divider" src={divider} />

        <div className="frame-4">
          <div className="text-wrapper-5">안전등급</div>

          <div className="text-wrapper-6">A</div>
        </div>

        <div className="frame-5">
          <div className="text-wrapper-7">부도확률</div>

          <div className="text-wrapper-8">8.00%</div>
        </div>
      </div>

      <div className="dashboard-copy-wrapper">
        <div className="dashboard-copy-2">주요요인</div>
      </div>
    </div>
  );
};
