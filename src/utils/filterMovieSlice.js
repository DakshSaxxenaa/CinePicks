import { createSlice } from "@reduxjs/toolkit";

const filterMovieSlice = createSlice({
    name: "filterMovies",
    initialState: {
        genre:"All",
        movies:[]
    },
    reducers: {
        setGenre: (state, action) => {
            state.genre = action.payload;
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
});


export const { setGenre, setMovies } = filterMovieSlice.actions;
export default filterMovieSlice.reducer;