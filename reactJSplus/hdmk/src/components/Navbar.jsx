import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [btn, setBtn] = useState(false);
  const btns = () => {
    if (btn === false) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };
  return (
    <div className="bg-black border-b-2 border-sky-300  select-none ">
      <div className="px-4 lg:container py-2 lg:py-4 m-auto flex justify-between items-center">
        <a
          className="text-transparent bg-gradient-to-r bg-clip-text from-sky-600 to-white text-xl"
          href="#"
        >
          <Link to="/">HDmovies</Link>
        </a>

        <button
          onClick={btns}
          className="flex lg:hidden bg-sky-500 cursor-pointer hover:bg-sky-300 w-7 justify-center py-1 mt-1"
        >
          |||
        </button>

        {btn ? (
          <div className="bg-sky-500 w-40 h-20 z-10 text-center absolute mt-32 rounded-md ml-24">
            <Link
              onClick={() => {
                setBtn(false);
              }}
              className="text-black mt-52 font-mono font-extrabold"
              to=""
            >
              HOME
            </Link>
          </div>
        ) : null}
        <div className="hidden md:flex space-x-2 lg:space-x-5">
          <input
            className="bg-sky-600 text-white rounded-md outline-none
         hover:bg-sky-300 items-center   lg:mx-6 px-2
         placeholder-black focus:bg-rose-600 focus:text-black"
            placeholder="Movie Search..."
            type="text"
            name=""
          />
          <a className="text-sky-600 hover:text-sky-300" href="#">
            <Link to="/"> HOME</Link>
          </a>
          <a className="text-sky-600 hover:text-sky-300" href="#">
            MOVIES
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
