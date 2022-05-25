import React, { useEffect, useState } from "react";

//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//axios instance
import axios from "../../config/axios";

//img base
import { img_base_url } from "../../config/imgConfig";

//style
import {
  StyledHeader,
  Container,
  Box1,
  Box2,
  Box3,
  Button,
} from "./style/Header.styles";

//redux
import { useDispatch } from "react-redux";
import { addMedia } from "../../features/wishList/wishListSlice";

//api key
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const Header = ({ mediaType, id }) => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]);

  //api call for getting details
  useEffect(() => {
    fetchDetails(mediaType, id);
  }, [mediaType, id]);

  const fetchDetails = async (mediaType, id) => {
    try {
      const { data } = await axios.get(
        `/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
      );
      setDetails(data);
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  //api call for getting credits

  useEffect(() => {
    fetchCredits(mediaType, id);
  }, [mediaType, id]);

  const fetchCredits = async (mediaType, id) => {
    try {
      const { data } = await axios.get(
        `/${mediaType}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCredits(data.cast.slice(0, 15));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledHeader imgUrl={details.backdrop_path}>
      <Container>
        <Box1>
          <img
            src={details.poster_path && img_base_url + details.poster_path}
            alt=""
          />
        </Box1>
        <Box2>
          <h1 className="title">
            {details.original_title || details.original_name}
          </h1>
          <p className="tagline">{details.tagline}</p>
          <div className="genres">
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <h2 className="rating">
            {details.vote_average !== 0 && details.vote_average}
          </h2>
          <div className="release-date">
            {details.release_date || details.first_air_date}
          </div>
          <div className="des">{details.overview?.split(".")[0]} </div>
          <Button
            onClick={() =>
              dispatch(
                addMedia({
                  listType: "watch",
                  media: details,
                  mediaType,
                })
              )
            }
          >
            Add to WishList
          </Button>
        </Box2>
        <Box3>
          <Splide
            options={{
              type: "loop",
              arrows: false,
              pagination: false,
              autoWidth: true,
              autoplay: true,
              interval: 700,
              gap: "1.8rem",
            }}
          >
            {credits &&
              credits.map((credit) => (
                <SplideSlide key={credit.id}>
                  <div className="credit">
                    <img
                      src={
                        credit.profile_path &&
                        img_base_url + credit.profile_path
                      }
                      alt=""
                    />
                    <div className="name">
                      {credit?.original_name || credit?.name}
                    </div>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </Box3>
      </Container>
    </StyledHeader>
  );
};
