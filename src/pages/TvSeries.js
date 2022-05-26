import React, { useEffect, useState } from "react";

//lazy load images
import { LazyLoadImage } from "react-lazy-load-image-component";

//toast
import { toast } from "react-toastify";

//logo
import play from "../img/play.png";
import { GoSearch } from "react-icons/go";

//axios instance
import axios from "../config/axios";

//api
import { requests } from "../config/apiConfig";

//img base
import { img_base_url } from "../config/imgConfig";

//style
import { StyledHeader } from "../style/Main.style";
import {
  Container,
  CardContainer,
  Card,
  InputContainer,
  StyledInput,
} from "./style/Movies.styles";

//components
import { Pagination } from "../components/Pagination";
import { Genres } from "../components/Genres";

//custom hook
import useGenres from "../hooks/useGenres";

//router
import { useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setPaginate } from "../features/pagination/PaginationSlice";
import { setMediaType } from "../features/media/mediaSlice";
import { removeGenres } from "../features/genres/genresSlice";

const TvSeries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //global state
  const { page } = useSelector((state) => state.paginate);
  const { selectedTvGenres } = useSelector((state) => state.genres);
  const { user } = useSelector((state) => state.auth);

  //local state
  //movies
  const [tvSeries, setTvSeries] = useState([]);
  const [totalPages, setTotalPages] = useState();

  //search
  const [searchInput, setSearchInput] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTotalPages, setSearchTotalPages] = useState();

  //custom hook
  const genresUrl = useGenres(selectedTvGenres);

  //making pagination and genre value default
  useEffect(() => {
    dispatch(setPaginate(1));
    dispatch(removeGenres(null));
  }, [dispatch]);

  // all tv series api call
  useEffect(() => {
    fetchData(page, genresUrl);
  }, [page, genresUrl]);

  const fetchData = async (page, genresUrl) => {
    try {
      const { data } = await axios.get(requests.fetchAllTv, {
        params: { page: page, with_genres: genresUrl },
      });
      setTvSeries(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  //search tv series api call
  useEffect(() => {
    fetchSearchTv(searchInput, page);
  }, [searchInput, page]);

  const fetchSearchTv = async (searchInput, page) => {
    if (!searchInput) return;

    const controller = new AbortController();

    try {
      const { data } = await axios.get(requests.fetchSearchedTv, {
        params: { query: searchInput, page: page },
        signal: controller.signal,
      });

      setSearchResult(data.results);
      setSearchTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }

    controller.abort();
  };

  //taking to video route
  const clickHandler = (id) => {
    if (user) {
      dispatch(setMediaType("tv"));
      navigate(`/tv/${id}`);
    } else {
      toast.info("Log in or sign up to get the access", { theme: "dark" });
    }
  };

  return (
    <>
      <StyledHeader />
      <InputContainer>
        <StyledInput
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <GoSearch />
      </InputContainer>

      <Container>
        {!searchInput && (
          <Genres fetchUrl={requests.fetchTvGenres} mediaType="tv" />
        )}
        <CardContainer>
          {searchInput ? (
            searchResult.length > 0 ? (
              searchResult.map((tv) => (
                <Card key={tv.id} onClick={() => clickHandler(tv.id)}>
                  <LazyLoadImage
                    src={tv.poster_path && img_base_url + tv.poster_path}
                    alt=""
                  />
                  <div>
                    <img src={play} alt="" />
                  </div>
                </Card>
              ))
            ) : (
              <h2>Result Not Found</h2>
            )
          ) : (
            tvSeries &&
            tvSeries.map((tv) => (
              <Card key={tv.id} onClick={() => clickHandler(tv.id)}>
                <LazyLoadImage
                  src={tv.poster_path && img_base_url + tv.poster_path}
                  alt=""
                />
                <div>
                  <img src={play} alt="" />
                </div>
              </Card>
            ))
          )}
        </CardContainer>

        {searchInput
          ? searchTotalPages > 1 && <Pagination totalPages={searchTotalPages} />
          : totalPages > 1 && <Pagination totalPages={totalPages} />}
      </Container>
    </>
  );
};

export default TvSeries;
