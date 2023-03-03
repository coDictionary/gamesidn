import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";

import { Triangle } from "react-loader-spinner";

const ListGenre = () => {
  const { genre } = useParams();

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const getGamesByGenre = async () => {
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        params: { category: `${genre}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      }
    );
    setTimeout(() => {
      console.log(res.data.slice(0, 10));
      setGames(res.data.slice(0, 10));
      setLoading(false);
    }, 3000);
    setLoading(true);
  };

  useEffect(() => {
    getGamesByGenre();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GAMESIDN | {genre}</title>
        <meta name="description" content={`games with ${genre} genre`} />
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
            className =" w-screen items-center justify-center"
          />
          <h2 className="font-bold text-white">Loading bang..</h2>
        </div>
      ) : (
        <>
          <Header />
          <div className="flex flex-wrap items-center justify-center gap-3 px-14 py-10 bg-gray-800 h-full">
            {games.map((g) => (
              <Link to={`/${g.title}/${g.id}`} className="rounded-xl card-genre" key={g.id}>
                <img
                  src={g.thumbnail}
                  alt="image"
                  className="object-cover w-full rounded-xl brightness-50 card-zoom-image"
                />
                <div className="container-list px-4 relative bottom-10">
                  <h2 className="text-white font-bold">{g.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ListGenre;
