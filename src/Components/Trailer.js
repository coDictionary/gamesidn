import React from 'react'
import "./style.css";
import trailer from "../asset/trailer.mp4";

const Trailer = () => {
  return (
    <div>
      <section id="About" className="flex w-full">
        <div className="vid-frame w-full ">
          <video
            src={trailer}
            autoPlay
            muted
            loop
            className=" w-screen object-cover bg-cover bg-center frame-vid"
          ></video>
        </div>
      </section>
    </div>
  );
}

export default Trailer