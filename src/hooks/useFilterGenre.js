export const useFilterGenre = (movies) => {
    const genres = movies.map((movie) => movie.genre);
    const uniqueGenres = [...new Set(genres)];
    return uniqueGenres;
}

