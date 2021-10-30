import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./routes";
import { useEffect } from "react";
export default () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [true]);
  return (
    <div>
      <Routes />
    </div>
  );
};
