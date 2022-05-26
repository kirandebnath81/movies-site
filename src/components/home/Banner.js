import React, { useEffect, useState } from "react";

//lazy load images
import { LazyLoadImage } from "react-lazy-load-image-component";

//toast
import { toast } from "react-toastify";
//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//style
import { Container, StyledRow, StyledCol, Button } from "./style/Banner.styles";

//axios instance
import axios from "../../config/axios";

//img base
import { img_base_url } from "../../config/imgConfig";

//api
import { requests } from "../../config/apiConfig";

//random movies
import { RandomMovies } from "../RandomMovies";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setMediaType } from "../../features/media/mediaSlice";

//router
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [movies, setMovies] = useState([]);
  const randomMovies = RandomMovies(movies);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(requests.fetchTrendingMovies);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //taking to video route
  const clickHandler = (id) => {
    if (user) {
      navigate(`/movie/${id}`);
      dispatch(setMediaType("movie"));
    } else {
      toast.info("Log in or sign up to get the access", { theme: "dark" });
    }
  };

  return (
    <header>
      <Splide
        options={{
          type: "fade",
          rewind: true,
          pagination: false,
          arrows: false,
          autoplay: true,
          interval: 2500,
          drag: true,
          autoWidth: true,
        }}
      >
        {randomMovies &&
          randomMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              {movie.backdrop_path && (
                <Container imgUrl={movie.backdrop_path}>
                  <StyledRow>
                    <StyledCol>
                      <h1>{movie.original_name || movie.original_title}</h1>
                      <p>{movie.overview?.split(".")[0]}</p>
                      <Button onClick={() => clickHandler(movie.id)}>
                        Watch Now
                      </Button>
                    </StyledCol>
                    <StyledCol>
                      <LazyLoadImage
                        src={
                          movie.poster_path && img_base_url + movie.poster_path
                        }
                        alt={movie.original_title || movie.original_name}
                      />
                    </StyledCol>
                  </StyledRow>
                </Container>
              )}
            </SplideSlide>
          ))}
      </Splide>
    </header>
  );
};
