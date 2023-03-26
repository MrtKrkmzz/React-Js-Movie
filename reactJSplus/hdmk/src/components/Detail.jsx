import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = ({ movieData3 }) => {
  const { id } = useParams();
  const myData = movieData3.find((data) => data.id === Number(id));
  useEffect(() => {}, [myData]);

  return (
    <div className="bg-black">
      <div className="container flex flex-col lg:flex-row m-auto">
        <img
          className="m-auto w-52 "
          src={`https://image.tmdb.org/t/p/w500${myData.poster_path}`}
          alt=""
        />
        <div className="w-6/12 m-auto text-center relative">
          <h1 className="text-3xl text-sky-600 uppercase underline  underline-offset-4 mb-5">
            {myData.original_title}
          </h1>
          <p className="text-sky-600">{myData.overview}</p>
          <span className="bg-rose-600 ">{myData.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
