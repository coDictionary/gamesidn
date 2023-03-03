import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Triangle } from "react-loader-spinner";
import FooterDetail from "./FooterDetail";
import Footer from "./Footer";

const Detail = () => {
    const {id} = useParams()
    const {title} = useParams()
    const [games, setGames] = useState([]);
    const [screenshot,setScreenshot] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minSystem, setMinSystem] = useState([])
    const getDetails = async () => {
      const res = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        {
          params: { id: `${id}` },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );
      setTimeout(() => {
        console.log(res.data);
        setGames(res.data);
        setScreenshot(res.data.screenshots);
        console.log(screenshot)
        setMinSystem(res.data.minimum_system_requirements)
        console.log(minSystem)
        setLoading(false);
      }, 3000);
      setLoading(true);
    };

    useEffect(() => {
      getDetails();
    }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GAMESIDN | {title}</title>
        <meta
          name="description"
          content={`${games.title} is a ${games.short_description}`}
        />
      </Helmet>

      {loading ? (
        <div className="flex flex-col gap-2 items-center content-center justify-center h-screen w-screen  bg-gray-800">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            className=" w-screen items-center justify-center"
          />
          <h2 className="font-bold text-white">Loading bang..</h2>
        </div>
      ) : (
        <>
          <Header />
          <div className="flex gap-5 px-20 py-8 bg-gray-800">
            <div className="w-2/5 flex px-10 ">
              <div className="flex flex-col gap-3 w-full">
                <img
                  src={games.thumbnail}
                  alt=""
                  className="object-cover rounded-xl h-fit w-full"
                />

                <a
                  href={games.game_url}
                  className="play w-full bg-blue-800 py-4 rounded-xl text-lg font-semibold text-center text-white brightness-75"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="w-3/5 flex flex-col gap-4 ">
              <div className="head flex flex-col ">
                <h4 className="font-medium text-white text-3xl tracking-wide">
                  {games.title}
                </h4>
              </div>

              <div className="about flex flex-col gap-4 divide-y">
                <h4 className="text-white text-2xl">About {games.title}</h4>
                <h5 className=" text-white text-sm py-5">
                  {games.description}
                </h5>
              </div>

              <div className="additional-information flex flex-col gap-4 divide-y">
                <h4 className="text-white text-2xl">
                  Additional Information {games.title}
                </h4>
                <div className="flex gap-2 py-5">
                  <div className="w-1/3 flex flex-col gap-3">
                    <div className="title flex flex-col gap-1">
                      <h4 className="text-sm text-white">Title</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.title}
                      </h5>
                    </div>
                    <div className="realease-date flex flex-col gap-1">
                      <h4 className="text-sm text-white">Realease Date</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.release_date}
                      </h5>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col gap-3">
                    <div className="developer flex flex-col gap-1">
                      <h4 className="text-sm text-white">Developer</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.developer}
                      </h5>
                    </div>
                    <div className="genre flex flex-col gap-1">
                      <h4 className="text-sm text-white">Genre</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.genre}
                      </h5>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col gap-3">
                    <div className="publisher flex flex-col gap-1">
                      <h4 className="text-sm text-white">Publisher</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.publisher}
                      </h5>
                    </div>
                    <div className="platform flex flex-col gap-1">
                      <h4 className="text-sm text-white">Platform</h4>
                      <h5 className="text-lg text-white font-medium">
                        {games.platform}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="platform flex flex-col gap-3 divide-y">
                <h4 className="text-white text-2xl">Minimum Specs</h4>
                {games.minimum_system_requirements ? (
                  <>
                    <div className="flex py-5 ">
                      <div className="w-1/2 flex flex-col gap-2">
                        <div className="os flex flex-col gap-1">
                          <h4 className="uppercase text-sm font-medium text-white">
                            os
                          </h4>
                          <h5 className="text-white text-lg">{minSystem.os}</h5>
                        </div>
                        <div className="memory flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Memory
                          </h4>
                          <h5 className="text-white text-lg">
                            {minSystem.memory}
                          </h5>
                        </div>
                        <div className="storage flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Storage
                          </h4>
                          <h5 className="text-white text-lg">
                            {minSystem.storage}
                          </h5>
                        </div>
                      </div>
                      <div className="w-1/2 flex flex-col gap-2">
                        <div className="processor flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Processor
                          </h4>
                          <h5 className="text-white text-lg">
                            {minSystem.processor}
                          </h5>
                        </div>
                        <div className="graphic flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Graphics
                          </h4>
                          <h5 className="text-white text-lg">
                            {minSystem.graphics}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex py-5 ">
                      <div className="w-1/2 flex flex-col gap-2">
                        <div className="os flex flex-col gap-1">
                          <h4 className="uppercase text-sm font-medium text-white">
                            os
                          </h4>
                          <h5 className="text-white text-lg">Undefined</h5>
                        </div>
                        <div className="memory flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Memory
                          </h4>
                          <h5 className="text-white text-lg">Undefined</h5>
                        </div>
                        <div className="storage flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Storage
                          </h4>
                          <h5 className="text-white text-lg">Undefined</h5>
                        </div>
                      </div>
                      <div className="w-1/2 flex flex-col gap-2">
                        <div className="processor flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Processor
                          </h4>
                          <h5 className="text-white text-lg">Undefined</h5>
                        </div>
                        <div className="graphic flex flex-col gap-1">
                          <h4 className="text-sm font-medium text-white">
                            Graphics
                          </h4>
                          <h5 className="text-white text-lg">Undefined</h5>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="screenshot flex flex-col gap-3 divide-y">
                <h4 className="text-white text-2xl">
                  {games.title} Screenshoot
                </h4>
                <div className="content flex py-5 w-full gap-2">
                  {screenshot.map((g) => (
                    <div className="rounded-xl flex w-1/3" key={g.id}>
                      <img
                        src={g.image}
                        alt="image"
                        className="object-cover w-full rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <FooterDetail />
        </>
      )}
    </>
  );
}

export default Detail