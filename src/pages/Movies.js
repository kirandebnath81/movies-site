import React, { useEffect, useState } from "react";

//toast
import { toast } from "react-toastify";

//logo
import play from "../img/play.png";
import { GoSearch } from "react-icons/go";

//axios instance
import instance from "../config/axios";
import axios from "axios";

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

export const Movies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //global state
  const { page } = useSelector((state) => state.paginate);
  const { selectedMovieGenres } = useSelector((state) => state.genres);
  const { user } = useSelector((state) => state.auth);

  //local state
  //movies
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();

  //search
  const [searchInput, setSearchInput] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTotalPages, setSearchTotalPages] = useState();

  //custom hook
  const genresUrl = useGenres(selectedMovieGenres);

  //making pagination and genre value default
  useEffect(() => {
    dispatch(setPaginate(1));
    dispatch(removeGenres(null));
  }, [dispatch]);

  // all movies api call
  useEffect(() => {
    fetchData(page, genresUrl);
  }, [page, genresUrl]);

  const fetchData = async (page, genresUrl) => {
    try {
      const { data } = await instance.get(requests.fetchAllMovies, {
        params: { page: page, with_genres: genresUrl },
      });
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  //search movies api call
  useEffect(() => {
    fetchSearchMovies(searchInput, page);
  }, [searchInput, page]);

  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();

  // axios
  // .get("/user/12345", {
  //   cancelToken: source.token,
  // })
  // .catch(function (thrown) {

  // });

  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();

  // axios
  //   .get("/user/12345", {
  //     cancelToken: source.token,
  //   })
  //   .catch(function (thrown) {
  //     if (axios.isCancel(thrown)) {
  //       console.log("Request canceled", thrown.message);
  //     } else {
  //       // handle error
  //     }
  //   });

  const fetchSearchMovies = async (searchInput, page) => {
    if (!searchInput) return;

    const controller = new AbortController();

    try {
      const { data } = await instance.get(requests.fetchSearchedMovie, {
        params: { query: searchInput, page: page, with_genres: "16" },
        signal: controller.signal,
      });

      setSearchResult(data.results);
      setSearchTotalPages(data.total_pages);
    } catch (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        console.log("Error");
      }
    }

    controller.abort();
  };

  //taking to video route
  const clickHandler = (id) => {
    if (user) {
      window.scroll(0, 0);
      dispatch(setMediaType("movie"));
      navigate(`/movie/${id}`);
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
          <Genres fetchUrl={requests.fetchMovieGenres} mediaType="movie" />
        )}
        <CardContainer>
          {searchInput ? (
            searchResult.length > 0 ? (
              searchResult.map((movie) => (
                <Card key={movie.id} onClick={() => clickHandler(movie.id)}>
                  <img
                    src={movie.poster_path && img_base_url + movie.poster_path}
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
            movies &&
            movies.map((movie) => (
              <Card key={movie.id} onClick={() => clickHandler(movie.id)}>
                <img
                  src={movie.poster_path && img_base_url + movie.poster_path}
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
