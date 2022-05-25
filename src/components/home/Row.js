import React, { useEffect, useState } from "react";

//toast
import { toast } from "react-toastify";

//logo
import logo from "../../img/play.png";

//axios
import axios from "../../config/axios";

//img base
import { img_base_url } from "../../config/imgConfig";

//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//style
import { CardContainer, Card } from "./style/Row.styles";

//router
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setMediaType } from "../../features/media/mediaSlice";

export const Row = ({ fetchUrl, title, isLargeRow, mediaType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData(fetchUrl);
  }, [fetchUrl]);

  const fetchData = async (fetchUrl) => {
    try {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //navigate to video page and set media type in redux state
  const clickHandler = (id) => {
    if (user) {
      navigate(`/${mediaType}/${id}`);
      dispatch(setMediaType(mediaType));
    } else {
      toast.info("Log in or sign up to get the access", { theme: "dark" });
    }
  };

  return (
    <CardContainer large={isLargeRow}>
      <h4>{title}</h4>
      <Splide
        options={{
          pagination: false,
          arrows: false,
          autoWidth: true,
        }}
      >
        {movies &&
          movies.map(
            (movie) =>
              movie.backdrop_path && (
                <SplideSlide key={movie.id}>
                  <Card
                    large={isLargeRow}
                    onClick={() => clickHandler(movie.id)}
                  >
                    <img
                      className="poster"
                      src={
                        isLargeRow
                          ? img_base_url + movie.poster_path
                          : img_base_url + movie.backdrop_path
                      }
                      alt={movie.original_title || movie.original_name}
                    />

                    {isLargeRow ? (
                      <div className="media-content">
                        <img src={logo} alt="" className="logo" />
                      </div>
                    ) : (
                      <div className="media-content">
                        <img src={logo} alt="" className="logo" />
                        <div className="title">
                          {movie.original_name || movie.original_title}
                        </div>
                      </div>
                    )}
                  </Card>
                </SplideSlide>
              )
          )}
      </Splide>
    </CardContainer>
  );
};
