import React, { useEffect, useState } from "react";

//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//video player
import ReactPlayer from "react-player";

//logo
import play from "../../img/play.png";

//axios instance
import axios from "../../config/axios";

//img base
import { img_base_url } from "../../config/imgConfig";

//style
import { CardContainer, TrailerCard, Card } from "./style/Main.styles";

//component
import { Header } from "./Header";

//router
import { useParams } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setMediaType } from "../../features/media/mediaSlice";

//navigate
import { useNavigate } from "react-router-dom";

//api key
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const Main = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //global state
  const { mediaType } = useSelector((state) => state.media);

  //local state
  const [videos, setVideos] = useState([]);
  const [similar, setSimilar] = useState([]);

  //api call for getting video
  useEffect(() => {
    fetchVideos(mediaType, id);
  }, [mediaType, id]);

  const fetchVideos = async (mediaType, id) => {
    try {
      const { data } = await axios.get(
        `/${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      setVideos(
        data.results.slice(data.results.length - 5, data.results.length)
      );
    } catch (error) {
      console.log(error);
    }
  };

  //api call for getting similar
  useEffect(() => {
    fetchSimilar(mediaType, id);
  }, [mediaType, id]);

  const fetchSimilar = async (mediaType, id) => {
    try {
      const { data } = await axios.get(
        `/${mediaType}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      );
      setSimilar(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = (id) => {
    window.scroll(0, 0);
    dispatch(setMediaType(mediaType));
    navigate(`/${mediaType}/${id}`);
  };

  return (
    <div>
      <Header mediaType={mediaType} id={id} />
      <CardContainer>
        {videos &&
          videos.map((video) => (
            <TrailerCard key={video.id}>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={`//www.youtube.com/watch?v=${video.key}`}
                  width="100%"
                  height="100%"
                  controls={true}
                  config={{
                    youtube: {
                      playerVars: { origin: ` http://localhost:3000 ` },
                    },
                  }}
                />
              </div>
            </TrailerCard>
          ))}
        <div className="similar-container">
          <h4>Similar {mediaType}</h4>
          <Splide
            options={{
              arrows: false,
              pagination: false,
              autoWidth: true,
            }}
          >
            {similar &&
              similar.map((movie) => (
                <SplideSlide key={movie.id}>
                  <Card onClick={() => clickHandler(movie.id)}>
                    <img
                      src={
                        movie.poster_path && img_base_url + movie.poster_path
                      }
                      alt=""
                    />
                    <div>
                      <img src={play} alt="" />
                    </div>
                  </Card>
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </CardContainer>
    </div>
  );
};
