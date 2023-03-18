import Navbar from "./components/Navbar";
// import HTML from "./components/home";
import React, { useState,useEffect } from "react";
import axios from 'axios';
import Data_fetch from "./components/data_fetch";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div>ksegfhbi</div> */}
      
      <div className="thrid-div">
      <Data_fetch />
      </div>
    </div>
  );
};
export default Home;



