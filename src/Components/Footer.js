import React from 'react'
import logo from '../asset/gamesidn2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div>
      <section id="Footer" className="w-full bg-gray-900">
        <div className="content-footer flex flex-col h-full w-full gap-5">
          <div className="container-footer flex h-full px-20 py-20">
            <div className="col w-1/4 h-full flex flex-col items-center justify-center gap-3">
              <img src={logo} alt="logo" className="w-20" />
              <div className="container-text flex flex-col gap-0 justify-center items-center">
                <h2 className="title-footer text-white">Gamesidn</h2>
                <h2 className="subtitle-footer text-white">play your game</h2>
              </div>
            </div>
            <div className="col w-3/4 h-full gap-4 flex">
              <div className="w-1/3 h-full flex flex-col gap-7">
                <h4 className="text-xl font-semibold text-white">
                  Panduan Pengguna
                </h4>
                <div className="list-footer">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="">Pengguna Baru</a>
                    </li>
                    <li>
                      <a href="">Ketentuan dan Kebijakan Privasi</a>
                    </li>
                    <li>
                      <a href="">Syarat dan Ketentuan</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-7">
                <h4 className="text-xl font-semibold text-white">
                  Customer Service
                </h4>
                <div className="list-footer">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="">@csgamesidn.id</a>
                    </li>
                    <li>
                      <a href="">Login / Registrasi Komunitas</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-7">
                <h4 className="text-xl font-semibold text-white">
                  Temukan kami
                </h4>
                <div className="list-footer">
                  <ul className="flex gap-2 w-full">
                    <li className="w-1/3 flex items-center">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="w-1/3 facebook h-fit text-white"
                      >
                        {" "}
                      </FontAwesomeIcon>
                    </li>
                    <li className="w-1/3 flex items-center">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="w-1/3 instagram h-fit text-white"
                      >
                        {" "}
                      </FontAwesomeIcon>
                    </li>
                    <li className="w-1/3 flex items-center">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className=" twitter w-1/3 h-fit text-white"
                      >
                        {" "}
                      </FontAwesomeIcon>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Footer