import React, { useEffect } from "react";

//logo
import { FaTimes } from "react-icons/fa";

//style
import { CardContainer } from "./style/Genres.styles";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  getGenres,
  addGenres,
  removeGenres,
} from "../features/genres/genresSlice";

export const Genres = ({ fetchUrl, mediaType }) => {
  const dispatch = useDispatch();
  const { genres, selectedMovieGenres, selectedTvGenres } = useSelector(
    (state) => state.genres
  );

  useEffect(() => {
    dispatch(getGenres(fetchUrl));
  }, [fetchUrl, dispatch]);

  return (
    <CardContainer>
      {mediaType === "movie"
        ? selectedMovieGenres.map((genre) => (
            <div key={genre.id} className="genres ">
              {genre.name}{" "}
              <FaTimes
                className="deleteIcon"
                onClick={() =>
                  dispatch(removeGenres({ genreType: mediaType, genre }))
                }
              />
            </div>
          ))
        : selectedTvGenres.map((genre) => (
            <div key={genre.id} className="genres ">
              {genre.name}{" "}
              <FaTimes
                className="deleteIcon"
                onClick={() =>
                  dispatch(removeGenres({ genreType: mediaType, genre }))
                }
              />
            </div>
          ))}

      {genres &&
        genres.map((genre) => (
          <div
            key={genre.id}
            className="genres"
            onClick={() => dispatch(addGenres({ genreType: mediaType, genre }))}
          >
            {genre.name}
          </div>
        ))}
    </CardContainer>
  );
};
