import React from "react";
import { Frame } from "./Frame";
import { Header } from "./Header";
import { Product } from "./Product";
import "./style.css";
import vector3 from "./vector-3.svg";

export const Customer = () => {
  return (
    <div className="customer">
      <Header />
      <Product />
      <Frame />
      <div className="logo">
        <img className="vector-3" alt="Vector" src={vector3} />

        <div className="text-wrapper-17">Risk Finder</div>
      </div>
    </div>
  );
};
