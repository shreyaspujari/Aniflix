import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";

const Main = () => {
  const [animes, setAnimes] = useState([]);

  const anime = animes[Math.floor(Math.random() * animes.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setAnimes(response.data.results);
    });
  }, []);

  //console.log(anime)
  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-balck"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${anime?.backdrop_path}`}
          alt={anime?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{anime?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              {" "}
              Play
            </button>
            <button className="border ml-4 text-white border-gray-300 py-2 px-5">
              {" "}
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {anime?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">
            {truncate(anime?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
