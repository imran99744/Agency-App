import React from "react";
import web from "../Components/img/ab.svg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name="Welcome to About Us "
       imgsrc={web}
        visit="./contact" 
        btname="Contact Now" />
    </>
  );
};

export default About;
