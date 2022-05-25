import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//axios instance
import axios from "../../config/axios";

//handing api call(async func) in redux
export const getGenres = createAsyncThunk(
  "genres/getGenres",
  async (url, thunkAPI) => {
    thunkAPI.dispatch(removeGenres());
    try {
      const { data } = await axios.get(url);
      return data.genres;
    } catch (error) {
      return thunkAPI.rejectWithValue("error occured", error);
    }
  }
);

const initialState = {
  genres: [],
  selectedMovieGenres: [],
  selectedTvGenres: [],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addGenres: (state, { payload }) => {
      state.genres = state.genres.filter(
        (genre) => genre.id !== payload.genre.id
      );

      if (payload.genreType === "movie") {
        state.selectedMovieGenres.push(payload.genre);
      } else if (payload.genreType === "tv") {
        state.selectedTvGenres.push(payload.genre);
      }
    },
    removeGenres: (state, { payload }) => {
      if (!state.selectedMovieGenres) {
      }

      if (!payload) {
        state.selectedTvGenres = [];
        state.selectedMovieGenres = [];
      } else {
        state.genres.push(payload.genre);

        if (payload.genreType === "movie") {
          state.selectedMovieGenres = state.selectedMovieGenres.filter(
            (genre) => genre.id !== payload.genre.id
          );
        } else if (payload.genreType === "tv") {
          state.selectedTvGenres = state.selectedTvGenres.filter(
            (genre) => genre.id !== payload.genre.id
          );
        }
      }
    },
  },
  extraReducers: {
    [getGenres.fulfilled]: (state, action) => {
      state.genres = action.payload;
    },
    [getGenres.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addGenres, removeGenres } = genresSlice.actions;
export default genresSlice.reducer;
