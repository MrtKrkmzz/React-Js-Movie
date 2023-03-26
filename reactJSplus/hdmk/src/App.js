import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieData2, setMovieData2] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c34037aee08f5d2be7c6c88445f6e051"
      )
      .then((response) => {
        setMovieData(response.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=c34037aee08f5d2be7c6c88445f6e051"
      )
      .then((item) => {
        setMovieData2(item.data.results);
      });
  }, []);
  return (
    <div className="bg-black  ">
      <BrowserRouter>
        <Navbar />
        <Header movieData={movieData} />
        <Routes>
          <Route path="" element={<Content movieData2={movieData2} />}/>
          <Route path="/Detail/:id" element={<Detail movieData3={movieData2} />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
