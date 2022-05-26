import React from "react";

import logo from "../img/logo.png";

import { SFooter, Container, StyledLink } from "./style/Footer.styles";

import { Link } from "react-router-dom";

export const Footer = () => {
  const clickHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <SFooter>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Container>
        <ul>
          <Link to={"/"}>
            <li onClick={clickHandler}>Home</li>
          </Link>

          <Link to={"/movies"}>
            <li onClick={clickHandler}>Movies</li>
          </Link>

          <Link to={"/tv"}>
            <li onClick={clickHandler}>Tv-series</li>
          </Link>
        </ul>

        <ul>
          <li onClick={clickHandler}>
            <StyledLink to={"/movie/upcoming"}>Upcoming Movies</StyledLink>
          </li>
          <li onClick={clickHandler}>
            <StyledLink to={"/movie/latest"}>Movies in Theatres</StyledLink>
          </li>
          <li onClick={clickHandler}>
            <StyledLink to={"/people"}>Tmdb Popular Face</StyledLink>
          </li>
        </ul>

        <ul>
          <li onClick={clickHandler}>
            <StyledLink to={"/tv/tv-airing-today"}>
              Today Airing tv shows
            </StyledLink>
          </li>
          <li onClick={clickHandler}>
            <StyledLink to={"/tv/tv-on-the-air"}>
              On the Air tv shows
            </StyledLink>
          </li>
          <li onClick={clickHandler}>
            <StyledLink to={"/tv/popular"}>Popular Tv shows</StyledLink>
          </li>
        </ul>
      </Container>
      <div className="copyright">
        <hr />
        <small>© 2022 Kiran Debnath All Rights Reserved</small>
      </div>
    </SFooter>
  );
};
