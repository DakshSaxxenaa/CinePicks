import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="group relative bg-linear-to-b from-gray-800 to-gray-900 flex flex-col 
      w-[calc(50%-0.75rem)] xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72
      h-auto min-h-56 xs:min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-96 
      rounded-lg sm:rounded-xl overflow-hidden 
      border border-gray-700/50 shadow-lg shadow-black/50
      cursor-pointer transition-all duration-500 ease-out
      hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(34,211,238,0.4)] hover:border-cyan-500/50 hover:z-10
      before:absolute before:inset-0 before:bg-linear-to-t before:from-cyan-500/20 before:via-transparent before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
      <div className="relative overflow-hidden">
        <img 
          src={movie.poster} 
          alt="poster" 
          className="h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-full object-cover transition-all duration-700 
            group-hover:scale-110 group-hover:brightness-110" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="relative z-10 p-1.5 xs:p-2 sm:p-3 flex flex-col grow bg-linear-to-t from-gray-900 to-transparent -mt-1 font-sans">
        <h2 className="font-heading font-bold text-xs sm:text-sm md:text-base text-white transition-all duration-300 
          group-hover:text-cyan-400">{movie.title}</h2>
        <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 transition-all duration-500 
          group-hover:text-gray-300">{movie.description}</p>
        <div className="mt-auto flex justify-between items-center pt-1">
          <span className="text-xs sm:text-sm text-gray-500 font-medium transition-all duration-300 
            group-hover:text-cyan-300">{movie.year}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-400 border border-gray-600/50 transition-all duration-300 
            group-hover:bg-cyan-500/20 group-hover:text-cyan-400 group-hover:border-cyan-500/50">{movie.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
