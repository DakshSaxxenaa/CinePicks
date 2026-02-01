import { configureStore } from "@reduxjs/toolkit";
import filterMoviesReducer from "./filterMovieSlice";
const appStore = configureStore({
    reducer: {
        filterMovies: filterMoviesReducer,
    },
});
export default appStore;