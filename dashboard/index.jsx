import React from "react";
import { Cards } from "./Cards";
import { CircleChart } from "./CircleChart";
import { Frame } from "./Frame";
import { Header } from "./Header";
import { Revenue } from "./Revenue";
import { Up } from "./Up";
import divider3 from "./divider-3.svg";
import "./style.css";
import vector from "./vector.svg";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="logo">
        <img className="vector" alt="Vector" src={vector} />

        <div className="text-wrapper-14">Risk Finder</div>
      </div>

      <Frame />
      <Header />
      <CircleChart />
      <div className="cards-2">
        <div className="card-2">
          <div className="top-3">
            <div className="text-4">
              <div className="text-wrapper-15">13</div>

              <div className="text-wrapper-16">안전등급 E 고객 수</div>
            </div>
          </div>

          <div className="bottom-3">
            <div className="amount-3">
              <Up className="up-instance" color="#FF383C" />
              <div className="text-wrapper-17">3.00</div>
            </div>

            <div className="text-wrapper-18">+1.00% 이번주</div>
          </div>
        </div>

        <img className="divider-3" alt="Divider" src={divider3} />

        <div className="card-2">
          <div className="top-3">
            <div className="text-4">
              <div className="text-wrapper-15">23%</div>

              <div className="text-wrapper-16">전체 고객 부도확률</div>
            </div>
          </div>

          <div className="bottom-3">
            <div className="amount-3">
              <Up className="up-instance" color="#FF383C" />
              <div className="text-wrapper-17">3.00</div>
            </div>

            <div className="text-wrapper-18">+1.00% 이번주</div>
          </div>
        </div>
      </div>

      <Cards />
      <Revenue />
    </div>
  );
};
