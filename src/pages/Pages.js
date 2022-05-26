import React, { lazy, Suspense } from "react";

//components
import { Home } from "./Home";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

//redux
import { useSelector } from "react-redux";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Movies = lazy(() => import("./Movies"));
const TvSeries = lazy(() => import("./TvSeries"));
const Login = lazy(() => import("./Login"));
const WatchList = lazy(() => import("./wishList/WatchList"));
const Watched = lazy(() => import("./wishList/Watched"));
const Favourite = lazy(() => import("./wishList/Favourite"));
const Main = lazy(() => import("./watch/Main"));
const Upcoming = lazy(() => import("./footerLinks/Upcoming"));
const Latest = lazy(() => import("./footerLinks/Latest"));
const PopularFace = lazy(() => import("./footerLinks/PopularFace"));
const TodayAiringTv = lazy(() => import("./footerLinks/TodayAiringTv"));
const AiringTv = lazy(() => import("./footerLinks/AiringTv"));
const PopularTv = lazy(() => import("./footerLinks/PopularTv"));

export const Pages = () => {
  const { mediaType } = useSelector((state) => state.media);

  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <h1 style={{ margin: "200px 0px", textAlign: "center" }}>
            Loading...
          </h1>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvSeries" element={<TvSeries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path={`/${mediaType}/:id`} element={<Main />} />
          <Route path="/movie/upcoming" element={<Upcoming />} />
          <Route path="/movie/latest" element={<Latest />} />
          <Route path="/people" element={<PopularFace />} />
          <Route path="/tv/tv-airing-today" element={<TodayAiringTv />} />
          <Route path="/tv/tv-on-the-air" element={<AiringTv />} />
          <Route path="/tv/popular" element={<PopularTv />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};
