import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../asset/gamesidn2.png";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const FooterDetail = () => {
  return (
    <footer className="bottom-footer h-full py-5 bg-zinc-900">
      <div className="flex px-20 text-white">
        <div className="w-4/5 flex items-center gap-3">
          <FontAwesomeIcon icon={faCopyright} />
          <h2 className="font-light">
            Gamesidn 2023 Alright Reserved . Apis and Designed by{" "}
            <a
              href="https://www.freetogame.com/"
              className="footer-link brightness-75"
            >
              Free To Game
            </a>
          </h2>
        </div>
        <div className="w-1/5 flex">
          <a href="https://www.facebook.com/" className="h-7 w-1/3">
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-7 w-1/3 brightness-75 facebook"
            ></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/" className="h-7 w-1/3">
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-7 w-1/3 brightness-75 twitter"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/" className="h-7 w-1/3">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-7 w-1/3 brightness-75 instagram"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterDetail