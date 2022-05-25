import React, { useEffect, useState } from "react";

//hook
import useGenres from "../../hooks/useGenres";

//toast
import { toast } from "react-toastify";

//logo
import play from "../../img/play.png";

import axios from "../../config/axios";
import { requests } from "../../config/apiConfig";

//style
import { StyledHeader } from "../../style/Main.style";
import { Container, CardContainer, Card } from "../style/Movies.styles";

//img base
import { img_base_url } from "../../config/imgConfig";

//component
import { Pagination } from "../../components/Pagination";
import { Genres } from "../../components/Genres";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setPaginate } from "../../features/pagination/PaginationSlice";
import { removeGenres } from "../../features/genres/genresSlice";
import { setMediaType } from "../../features/media/mediaSlice";

//router
import { useNavigate } from "react-router-dom";

export const PopularTv = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //global state
  const { page } = useSelector((state) => state.paginate);
  const { selectedTvGenres } = useSelector((state) => state.genres);
  const { user } = useSelector((state) => state.auth);

  //local state
  const [tvShows, setTvShows] = useState([]);
  const [totalPages, setTotalPages] = useState();

  //custom hook
  const genresIds = useGenres(selectedTvGenres);

  // getting the default value
  useEffect(() => {
    dispatch(setPaginate(1));
    dispatch(removeGenres(null));
  }, [dispatch]);

  useEffect(() => {
    fetchData(page, genresIds);
  }, [page, genresIds]);

  const fetchData = async (page, genresIds) => {
    try {
      const { data } = await axios.get(requests.fetchPopularTv, {
        params: { page: page, with_genres: genresIds },
      });

      setTvShows(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  //taking to video route
  const clickHandler = (id) => {
    if (user) {
      window.scroll(0, 0);
      dispatch(setMediaType("tv"));
      navigate(`/tv/${id}`);
    } else {
      toast.info("Log in or sign up to get the access", { theme: "dark" });
    }
  };

  return (
    <div>
      <StyledHeader />
      <Container>
        <Genres fetchUrl={requests.fetchTvGenres} mediaType="tv" />
        <CardContainer>
          {tvShows &&
            tvShows.map(
              (show) =>
                show.poster_path && (
                  <Card key={show.id} onClick={() => clickHandler(show.id)}>
                    <img src={img_base_url + show.poster_path} alt="" />
                    <div>
                      <img src={play} alt="" />
                    </div>
                  </Card>
                )
            )}
        </CardContainer>

        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </Container>
    </div>
  );
};
