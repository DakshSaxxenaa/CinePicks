import React, { useEffect } from "react";
import Card from "./Card";
import movies from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
const Container = () => {
  const [selectedMovies, setSelectedMovies] = useState(movies);
  const selectedGenre = useSelector((store) => store.filterMovies.genre);

  const filterMoviesByGenre = () => {
    if (selectedGenre === "All") {
      setSelectedMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === selectedGenre);
      setSelectedMovies(filtered);
    }
    console.log("object")
  };

  useEffect(() => {
    filterMoviesByGenre();
  }, [selectedGenre]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#4a4a4a_0%,#2a2a2a_40%,#1a1a1a_100%)] flex flex-wrap justify-center content-start gap-3 p-3 sm:gap-4 sm:p-4 md:gap-5 md:p-6 lg:gap-6 lg:p-8">
      {selectedMovies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Container;
