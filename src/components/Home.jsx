import React, { useState, useEffect, useRef } from "react";
import HomeImage from "./HomeImage";
import HomeText from "./HomeText";
import Skill from "./Skill";

const Home = ({ pics }) => {
  
  useEffect(() => {
    document.title = "Moroof Oladipo Mustapha || Portfolio";
  }, []);

  return (
    <div className="parent">
      <div className="homepage">
        <HomeText />
        <HomeImage pics={pics} />
      </div>
      <hr />
      <Skill />
    </div>
  );
};

export default Home;
