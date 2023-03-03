import React, { useRef, useState } from "react";
import './style.css'


const Home = () => {
  return (
    <div>
      <section id="home" className="flex bg-gray-800 h-screen">
        <div className="bg-home">
          <h2 className="title text-white">
            Your Computer Is Under Your Control
          </h2>
          <h4 className=" subtitle  text-white">
            discover thousands of interesting games that we have provided just
            for you
          </h4>
        </div>
      </section>
    </div>
  );
}

export default Home