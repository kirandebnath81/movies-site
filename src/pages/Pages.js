import React from "react";

//components
import { Home } from "./Home";
import { Movies } from "./Movies";
import { TvSeries } from "./TvSeries";
import { Login } from "./Login";
import { WatchList } from "./wishList/WatchList";
import { Watched } from "./wishList/Watched";
import { Favourite } from "./wishList/Favourite";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { Main } from "./watch/Main";
import { Upcoming } from "./footerLinks/Upcoming";
import { Latest } from "./footerLinks/Latest";
import { PopularFace } from "./footerLinks/PopularFace";
import { TodayAiringTv } from "./footerLinks/TodayAiringTv";
import { AiringTv } from "./footerLinks/AiringTv";
import { PopularTv } from "./footerLinks/PopularTv";

//redux
import { useSelector } from "react-redux";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Pages = () => {
  const { mediaType } = useSelector((state) => state.media);

  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  );
};
