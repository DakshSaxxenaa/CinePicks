import React, { useState } from "react";
import movies from "../utils/constants";
import { useFilterGenre } from "../hooks/useFilterGenre";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../utils/filterMovieSlice";
const Header = () => {
  const filteredGenres = useFilterGenre(movies);
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState(
    useSelector((store) => store.filterMovies.genre),
  );

  return (
    <header className="font-sans h-auto py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-6 bg-[radial-gradient(ellipse_at_top,#3a3a3a_0%,#1f1f1f_40%,#0a0a0a_100%)] flex flex-col justify-center items-center shadow-lg">
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          CINEPICKS
        </h1>


        <h3 className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-cyan-400 mt-1 font-medium">
          A CURRATED COLLECTION OF MOVIES
        </h3>
      </section>
      <div className="flex justify-start sm:justify-center py-2 px-1 sm:px-2 mt-3 sm:mt-4 overflow-x-auto overflow-y-hidden w-full max-w-full scrollbar-hide">
        <button
          onClick={() => {
            dispatch(setGenre("All"));
            setSelectedGenre("All");
            console.log("clicked");
          }}
          className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg ml-2 whitespace-nowrap 
            transition-all duration-300 ease-out cursor-pointer border border-transparent
            ${selectedGenre === "All" 
              ? "bg-cyan-400 text-gray-900 font-semibold shadow-[0_0_15px_3px_rgba(34,211,238,0.6)] scale-105" 
              : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.3)] hover:scale-105 hover:border-cyan-400/50"}`}
        >
          All
        </button>
        {filteredGenres.map((genre, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(setGenre(genre));
              setSelectedGenre(genre);
              console.log("clicked");
            }}
            className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg ml-2 whitespace-nowrap 
              transition-all duration-300 ease-out cursor-pointer border border-transparent
              ${selectedGenre === genre 
                ? "bg-cyan-400 text-gray-900 font-semibold shadow-[0_0_15px_3px_rgba(34,211,238,0.6)] scale-105" 
                : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.3)] hover:scale-105 hover:border-cyan-400/50"}`}
          >
            {genre}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
