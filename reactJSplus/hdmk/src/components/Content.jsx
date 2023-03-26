import React from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
const Content = ({ movieData2 }) => {
  return (
    <div className="bg-black">
      <div className="container mx-auto w-11/12 py-2">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex lg:w-8/12 justify-center lg:text-6xl border border-sky-500 rounded-xl p-4 lg:p-6 bg-black text-sky-400 gap-7 flex-wrap">
            {movieData2.map((item) => (
              <div key={item.id} className="w-5/12  lg:w-2/12 group relative">
                <Link to={`/Detail/${item.id}`}>
                  <img
                    className="rounded-lg group-hover:scale-110  duration-300 group-hover:opacity-20"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt=""
                  />
                  <div className="absolute px-5 bottom-8 text-center">
                    <h3 className="text-xs opacity-0 group-hover:opacity-100 text-rose-600">
                      {item.title}
                    </h3>
                    <span className="opacity-0 group-hover:opacity-100 text-sm">
                      {item.release_date}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="lg:w-4/12 justify-center  border border-sky-500 rounded-xl p-2 lg:p-6 lg:h-1/2 bg-black text-sky-400">
            <h6 className="text-lg text-center mb-5">Türlerine Göre Filmler</h6>

            <ul className="flex flex-wrap justify-center gap-3">
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Aile Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Komedi Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Drama Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Gerilim Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Aile Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Komedi Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Drama Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Gerilim Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Aile Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Komedi Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Drama Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Gerilim Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Aile Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Komedi Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Drama Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Gerilim Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Aile Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Komedi Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Drama Filmler
                </a>
              </li>
              <li className="list-disc w-4/12">
                <a className="text-white" href="#">
                  Gerilim Filmler
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
