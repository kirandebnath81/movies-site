import React from "react";

import { Container } from "../style/Main.style";

//api
import { requests } from "../config/apiConfig";

//components
import { Row } from "../components/home/Row";
import { Banner } from "../components/home/Banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Row
          title="Trending Movies"
          fetchUrl={requests.fetchTrendingMovies}
          isLargeRow
          mediaType="movie"
        />
        <Row
          title="Trending Tv Series"
          fetchUrl={requests.fetchTrendingTv}
          isLargeRow
          mediaType="tv"
        />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflix}
          mediaType="tv"
        />
        <Row
          title="Top Rated Movies"
          fetchUrl={requests.fetchTopMovies}
          mediaType="movie"
        />
        <Row
          title="Top Rated Tv Series"
          fetchUrl={requests.fetchTopTv}
          mediaType="tv"
        />
      </Container>
    </>
  );
};
